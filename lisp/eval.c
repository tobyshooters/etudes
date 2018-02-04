#include "eval.h"

/////////////////////////////////////////////////////////
// EVALUATION ///////////////////////////////////////////
/////////////////////////////////////////////////////////

#define LASSERT(args, cond, err) \
    if (!(cond)) { lval_del(args); return lval_err(err); }

lval* builtin_head(lenv* e, lval* a) {
    LASSERT(a, a->count == 1, "Function 'head' passed to many arguments");
    LASSERT(a, a->cell[0]->type == LVAL_QEXPR, "Function 'head' passed incorrect types");
    LASSERT(a, a->cell[0]->count != 0, "Function 'head' passed {}");
    
    lval* v = lval_take(a, 0);
    while (v->count > 1) { lval_del(lval_pop(v, 1)); }
    return v;
}

lval* builtin_tail(lenv* e, lval* a) {
    LASSERT(a, a->count == 1, "Function 'tail' passed to many arguments");
    LASSERT(a, a->cell[0]->type == LVAL_QEXPR, "Function 'tail' passed incorrect types");
    LASSERT(a, a->cell[0]->count != 0, "Function 'tail' passed {}");
    
    lval* v = lval_take(a, 0);
    lval_del(lval_pop(v, 0));
    return v;
}

lval* builtin_list(lenv* e, lval* a) {
    a->type = LVAL_QEXPR;
    return a;
}

lval* builtin_eval(lenv* e, lval* a) {
    LASSERT(a, a->count == 1, "Function 'eval' passed to many arguments");
    LASSERT(a, a->cell[0]->type == LVAL_QEXPR, "Function 'eval' passed incorrect types");

    lval* x = lval_take(a, 0);
    x->type = LVAL_SEXPR;
    return lval_eval(e, x);
}

lval* builtin_join(lenv* e, lval* a) {
    for (int i = 0; i < a->count; i++) {
        LASSERT(a, a->cell[0]->type == LVAL_QEXPR, "Function 'join' passed incorrect types");
    }

    lval* x = lval_pop(a, 0);
    while (a->count) {
        x = lval_join(x, lval_pop(a, 0));
    }

    lval_del(a);
    return x;
}

// Where the actual evaluation happens
lval* builtin_op(lenv* e, lval* a, char* op) {
    for (int i = 0; i < a->count; i++) {
        if (a->cell[i]->type != LVAL_NUM) {
            lval_del(a);
            return lval_err("Can't operate on non-numbers!");
        }
    }
    
    lval* x = lval_pop(a, 0);

    if ((strcmp(op, "-") == 0) && a->count == 0) {
        x->num = -x->num;
    }

    while (a->count > 0) {
        lval* y = lval_pop(a, 0);

        if (strcmp(op, "+") == 0) { x->num += y->num; }
        if (strcmp(op, "-") == 0) { x->num -= y->num; }
        if (strcmp(op, "*") == 0) { x->num *= y->num; }
        if (strcmp(op, "/") == 0) { 
            if (y->num == 0) {
                lval_del(x);
                lval_del(y);
                x = lval_err("Divided by zero!");
                break;
            }
            x->num /= y->num;
        }
        if (strcmp(op, "%") == 0) { x->num %= y->num; }
        lval_del(y);
    }
    lval_del(a);
    return x;
}

lval* builtin_add(lenv* e, lval* a) {
    return builtin_op(e, a, "+");
}

lval* builtin_sub(lenv* e, lval* a) {
    return builtin_op(e, a, "-");
}

lval* builtin_mul(lenv* e, lval* a) {
    return builtin_op(e, a, "*");
}

lval* builtin_div(lenv* e, lval* a) {
    return builtin_op(e, a, "/");
}

lval* builtin_rem(lenv* e, lval* a) {
    return builtin_op(e, a, "%");
}

lval* builtin_def(lenv* e, lval* a) {
    LASSERT(a, a->cell[0]->type == LVAL_QEXPR, 
            "Function def passed wrong arguments!");

    lval* syms = a->cell[0];
    for (int i = 0; i < syms->count; i++) {
        LASSERT(a, syms->cell[i]->type == LVAL_SYM,
                "Function def cannot define non-symbols!");
    }

    LASSERT(a, syms->count == a->count - 1,
            "Function def needs same number of syms and values");

    for (int i = 0; i < syms->count; i++) {
        lenv_put(e, syms->cell[i], a->cell[i + 1]);
    }

    lval_del(a);
    return lval_sexpr();
}

lval* lval_eval_sexpr(lenv* e, lval* v) {
    for (int i = 0; i < v->count; i++) {
        v->cell[i] = lval_eval(e, v->cell[i]);
    }

    for (int i = 0; i < v->count; i++) {
        if (v->cell[i]->type == LVAL_ERR) {
            return lval_take(v, i);
        }
    }
    
    if (v->count == 0) { return v; }
    if (v->count == 1) { return lval_take(v, 0); }

    lval* f = lval_pop(v, 0); // Operator
    if (f->type != LVAL_FUN) {
        lval_del(f); lval_del(v);
        return lval_err("S-expr does not begin with operator!");
    }
        
    lval* result = f->fun(e, v);
    lval_del(f);
    // Note: lval_take or builtin_op take care of deleting v recursively
    return result;
}

lval* lval_eval(lenv* e, lval* v) {
    if (v->type == LVAL_SYM) {
        lval* x = lenv_get(e, v);
        lval_del(v);
        return x;
    }
    if (v->type == LVAL_SEXPR) { return lval_eval_sexpr(e, v); }
    return v;
}

void lenv_add_builtins(lenv* e) {
    lenv_add_builtin(e, "list", builtin_list);
    lenv_add_builtin(e, "head", builtin_head);
    lenv_add_builtin(e, "tail", builtin_tail);
    lenv_add_builtin(e, "eval", builtin_eval);
    lenv_add_builtin(e, "join", builtin_join);

    lenv_add_builtin(e, "+", builtin_add);
    lenv_add_builtin(e, "-", builtin_sub);
    lenv_add_builtin(e, "*", builtin_mul);
    lenv_add_builtin(e, "/", builtin_div);
    lenv_add_builtin(e, "%", builtin_rem);

    lenv_add_builtin(e, "def", builtin_def);
}

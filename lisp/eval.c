#include "eval.h"

/////////////////////////////////////////////////////////
// EVALUATION ///////////////////////////////////////////
/////////////////////////////////////////////////////////

#define LASSERT(args, cond, err) \
    if (!(cond)) { lval_del(args); return lval_err(err); }

lval* builtin_head(lval* a) {
    LASSERT(a, a->count == 1, "Function 'head' passed to many arguments");
    LASSERT(a, a->cell[0]->type == LVAL_QEXPR, "Function 'head' passed incorrect types");
    LASSERT(a, a->cell[0]->count != 0, "Function 'head' passed {}");
    
    lval* v = lval_take(a, 0);
    while (v->count > 1) { lval_del(lval_pop(v, 1)); }
    return v;
}

lval* builtin_tail(lval* a) {
    LASSERT(a, a->count == 1, "Function 'tail' passed to many arguments");
    LASSERT(a, a->cell[0]->type == LVAL_QEXPR, "Function 'tail' passed incorrect types");
    LASSERT(a, a->cell[0]->count != 0, "Function 'tail' passed {}");
    
    lval* v = lval_take(a, 0);
    lval_del(lval_pop(v, 0));
    return v;
}

lval* builtin_list(lval* a) {
    a->type = LVAL_QEXPR;
    return a;
}

lval* builtin_eval(lval* a) {
    LASSERT(a, a->count == 1, "Function 'eval' passed to many arguments");
    LASSERT(a, a->cell[0]->type == LVAL_QEXPR, "Function 'eval' passed incorrect types");

    lval* x = lval_take(a, 0);
    x->type = LVAL_SEXPR;
    return lval_eval(x);
}

lval* builtin_join(lval* a) {
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
lval* builtin_op(lval* a, char* op) {
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

lval* builtin(lval* a, char* func) {
    if (strcmp(func, "list") == 0) { return builtin_list(a); }
    if (strcmp(func, "head") == 0) { return builtin_head(a); }
    if (strcmp(func, "tail") == 0) { return builtin_tail(a); }
    if (strcmp(func, "join") == 0) { return builtin_join(a); }
    if (strcmp(func, "eval") == 0) { return builtin_eval(a); }
    if (strstr(func, "+-/*%")) { return builtin_op(a, func); }
    lval_del(a);
    return lval_err("Unknown Function");
}

lval* lval_eval_sexpr(lval* v) {
    for (int i = 0; i < v->count; i++) {
        v->cell[i] = lval_eval(v->cell[i]);
    }

    for (int i = 0; i < v->count; i++) {
        if (v->cell[i]->type == LVAL_ERR) {
            return lval_take(v, i);
        }
    }
    
    if (v->count == 0) { return v; }
    if (v->count == 1) { return lval_take(v, 0); }

    lval* f = lval_pop(v, 0); // Operator
    if (f->type != LVAL_SYM) {
        lval_del(f);
        lval_del(v);
        return lval_err("S-expr does not begin with operator!");
    }

    lval* result = builtin(v, f->sym);
    lval_del(f);
    // Note: lval_take or builtin_op take care of deleting v recursively
    return result;
}

lval* lval_eval(lval* v) {
    if (v->type == LVAL_SEXPR) { return lval_eval_sexpr(v); }
    return v;
}

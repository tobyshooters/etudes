#include "mpc.h"
#include "lval.h"

lval* builtin_op(lval* a, char* op);
lval* builtin_head(lval* a);
lval* builtin_tail(lval* a);
lval* builtin_list(lval* a);
lval* builtin_eval(lval* a);
lval* builtin_join(lval* a);

lval* lval_eval_sexpr(lval* v);
lval* lval_eval(lval* v);

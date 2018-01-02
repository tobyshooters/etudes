#include "mpc.h"
#include "lval.h"

lval* builtin_op(lval* a, char* op);
lval* lval_eval_sexpr(lval* v);
lval* lval_eval(lval* v);

#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "mpc.h"

typedef struct lval lval;
typedef struct lenv lenv;

enum { LVAL_NUM, LVAL_ERR, LVAL_SYM, LVAL_FUN, LVAL_SEXPR, LVAL_QEXPR };

struct lenv {
    int count;
    char** syms;
    lval** vals;
};

typedef lval* (*lbuiltin) (lenv*, lval*);

struct lval {
    int type;
    long num;
    char* err;
    char* sym;
    lbuiltin fun;
    // Array holding elements of list, recursive
    lval** cell;
    int count;
};

// Constructors
lval* lval_num(long x);
lval* lval_err(char* msg);
lval* lval_sym(char* s);
lval* lval_sexpr(void);
lval* lval_qexpr(void);
lval* lval_fun(lbuiltin fun);
void lval_del(lval* v);

// Helpers
lval* lval_join(lval* x, lval* y);
lval* lval_pop(lval* v, int i);
lval* lval_take(lval* v, int i);
lval* lval_copy(lval*v);

// Printing
void lval_print(lval* v);
void lval_expr_print(lval* v, char open, char close);
void lval_print(lval* v);
void lval_println(lval* v);

// Parsing
lval* lval_add(lval* v, lval* new);
lval* lval_read_num(mpc_ast_t* t);
lval* lval_read(mpc_ast_t* t);

// Environment
lenv* lenv_new(void);
void lenv_del(lenv* e);
lval* lenv_get(lenv* e, lval* key);
void lenv_put(lenv* e, lval* key, lval* val);

void lenv_add_builtin(lenv* e, char* name, lbuiltin fun);

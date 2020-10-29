# LISP interpreter in Python
# Follows from: norvig.com/lispy.html

import re
import math
import operator as op

Symbol = str
Number = (int, float)
Atom   = (Symbol, Number)
List   = list
Exp    = (Atom , List)

class Env(dict):
    def __init__(self, d, p=None):
        self.update(d);
        self.parent = p;
    def get(self, s):
        return self[s] if s in self else self.parent.get(s)

class Procedure(object):
    def __init__(self, params, body, env):
        self.params, self.body, self.env = params, body, env
    def __call__(self, *args):
        return eval(self.body, Env(zip(self.params, args), self.env))

global_dict = {
    "+": op.add, "-": op.sub, "*": op.mul, "/": op.truediv,
    ">": op.gt, "<": op.lt, ">=": op.ge, "<=": op.le, "=": op.eq,
    "abs":     abs,
    "append":  op.add,
    "apply":   lambda proc, args: proc(*args),
    "begin":   lambda *x: x[-1],
    "car":     lambda x: x[0],
    "cdr":     lambda x: x[1:],
    "cons":    lambda x, y: [x] + y,
    "eq?":     op.is_,
    "expt":    pow,
    "equal?":  op.eq,
    "length":  len,
    "list":    lambda *x: List(x),
    "list?":   lambda x: isinstance(x, List),
    "map":     map,
    "max":     max,
    "min":     min,
    "not":     op.not_,
    "null?":   lambda x: x == [],
    "number?": lambda x: isinstance(x, Number),
    "proc?":   callable,
    "round":   round,
    "symbol?": lambda x: isinstance(x, Symbol)
}
global_dict.update(vars(math))

env = Env(global_dict)

def parse(line):
    def atom(token):
        try: return int(token)
        except ValueError:
            try: return float(token)
            except ValueError:
                return token

    def tree(tokens):
        if len(tokens) == 0: raise SyntaxError("unexpected EOF")
        if tokens[0] == ')': raise SyntaxError("unexpected )")
        token = tokens.pop(0)
        if token == '(':
            ast = []
            while (tokens[0] != ')'):
                ast.append(tree(tokens))
            tokens.pop(0)
            return ast
        else:
            return atom(token)

    def tokenize(line):
        return [s for s in re.split("([\(\)\s])", line) if s and s != ' ']

    return tree(tokenize(line))

def eval(x, env=env):
    if isinstance(x, Symbol): return env.get(x)
    if not isinstance(x, List): return x
    op, *args = x
    if op == "quote":
        return args[0]
    elif op == "if":
        (test, conseq, alt) = args
        exp = conseq if eval(test, env) else alt
        return eval(exp, env)
    elif op == "define":
        (sym, exp) = args
        env[sym] = eval(exp, env)
        return "Defined: " + sym
    elif op == "lambda":
        (params, exp) = args
        return Procedure(params, exp, env)
    else:
        proc = eval(op, env)
        args = [eval(arg, env) for arg in args]
        return proc(*args)

if __name__ == "__main__":
    while (True):
        line = input("> ")
        result = eval(parse(line))
        print(result)

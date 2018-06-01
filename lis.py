import re
import math
import operator as op

Symbol = str
Number = (int, float)
Atom   = (Symbol, Number)
List   = list
Exp    = (Atom , List)

def environment():
    env = {
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
        # "print":   print,
        "proc?":   callable,
        "round":   round,
        "symbol?": lambda x: isinstance(x, Symbol)
    }
    env.update(vars(math))
    return env;

env = environment();

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

def parse(line):
    return tree(tokenize(line))

def eval(x, env=env):
    if isinstance(x, Symbol): return env[x]
    if isinstance(x, Number): return x
    if x[0] == "if":
        (_, test, conseq, alt) = x
        exp = conseq if eval(test, env) else alt
        return eval(exp, env)
    elif x[0] == "define":
        (_, sym, exp) = x
        env[sym] = eval(exp, env)
        return "Defined: " + sym
    else:
        proc = eval(x[0], env)
        args = [eval(arg, env) for arg in x[1:]]
        return proc(*args)

if __name__ == "__main__":
    while (True):
        line = raw_input("> ")
        print eval(parse(line))

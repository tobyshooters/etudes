# parser etude: evaluating arithmetic expressions

def typify(s):
    try: return int(s)
    except: return s

def find(a, e):
    try: return a.index(e)
    except: return None

def ast(a):
    for op in ["+", "*"]:
        index = find(a, op)
        if index != None:
            return [op, ast(a[:index]), ast(a[index+1:])]
    return a

def parse(string):
    return [typify(s) for s in string.split(" ")]

def eval(ast):
    if len(ast) == 1: return ast[0]
    op, exp1, exp2 = ast
    if op == "+": return eval(exp1) + eval(exp2)
    if op == "*": return eval(exp1) * eval(exp2)
    else: raise "Unexpected value"

# I: doesn't support parentheses
def interpret(string):
    return eval(ast(parse(string)))

def parens(a):
    stack = [[]]
    for e in a:
        if e == "(":
            stack.append([])
        elif e == ")":
            stack[-1].append(eval(ast(stack.pop())))
        else:
            stack[-1].append(e)
    return eval(ast(stack.pop()))

# II: supports parentheses
def math(string):
    return parens(parse(string))

# III: ast is beautiful, but overkill
def reduce(a, f, init):
    for e in a:
        init = f(init, e)
    return init

def eval2(string):
    return reduce(string.split("+"), lambda a, c: a 
            + reduce(c.split("*"), lambda a, c: a * int(c), 1), 0)

def parens2(s):
    stack = [""]
    for e in s:
        if e == "(":
            stack.append("")
        elif e == ")":
            result = eval2(stack.pop())
            stack[-1] += str(result)
        else:
            stack[-1] += e
    return eval2(stack.pop())

def math2(string):
    return parens2(string.replace(" ", ""))

# Works, but is too slow

def max_prod(l, p):
    if len(l) == 0:
        return p
    return max(max_prod(l[1:], p * l[0]),
            max_prod(l[1:], p))

def answer(xs):
    return max_prod(xs, 1)

# Non-recursive solution

def ans(xs):
    _z = [i for i in xs if i != 0] # non-zeroes
    n = [i for i in xs if i < 0] # negatives
    f = max(n) if n else 1 # largest negatives

    p = reduce(lambda x, y: x * y, xs)
    _z_p = reduce(lambda x, y: x * y, _z) if _z else 0
    prod = _z_p if _z_p >= 0 else _z_p / f if sum(xs) != f else p

    return prod # return in string before submiting

print 'TESTS'
print '-----'
print ans([0, 0, 0, 0, -5]) == 0
print ans([1, 1, 1, 1, -1]) == 1
print ans([-1]) == -1

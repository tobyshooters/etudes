n = 1
m = 2

def fib(n,m):
    temp = 0

    fib = []

    while m < 40:
        fib.append(m)
        temp = n
        n = m
        m = m + temp

    print(fib)

fib(2,3)

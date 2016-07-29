def fib(n,m):
    temp = 0

    fib = []

    while m < 40000000:
        fib.append(m)
        temp = n
        n = m
        m = m + temp

    return (fib)

sum = 0

for i in fib(1,1):
    if i%2 == 0:
        sum += i

print(sum)

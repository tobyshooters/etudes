prime = []
nonprime = []

for i in range(2,100):
    cond = True
    for j in range(2,int(i+1/2)):
        if i%j == 0:
            cond = False
    if cond == True:
        prime.append(i)

def primefactor(n):
    factors = []
    for i in prime:
        if  n%i == 0:
            factors.append(i)
    print(factors)

primefactor(600851475143)

def nth_prime(n):
    for i in prime:
        if prime.index(i) == n-1:
            return i
            break

print(nth_prime(10001))

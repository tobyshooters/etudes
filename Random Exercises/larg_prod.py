def larg_prod(num,seq):
    num = str(num)
    max = 0
    prod = 1

    for i in range(seq):
        prod *= int(num[i])

    for i in range(len(num) - seq):
        prod = (prod * int(num[i+seq])) / int(num[i])
        if prod > max:
            max = prod

    print(max)

larg_prod(123454321,3)

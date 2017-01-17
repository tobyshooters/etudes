def answer(l, t):
    for i in range(len(l)):
        for j in range(len(l)):
            if sum(l[i:j]) == t:
                return [i, j-1]
    return [-1, -1]

print answer([1, 2, 3, 4], 15)
print answer([4, 3, 10, 2, 8], 12)

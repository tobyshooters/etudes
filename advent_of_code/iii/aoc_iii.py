def checkTri(a, b, c):
    return False if ((a >= b + c) or (b >= a + c) or (c >= a + b)) else True

with open('aoc_iii_input.txt', 'r') as f:
    content = f.read().split('\n')
    nums_raw = [i.split(' ') for i in content if i]
    nums_flat = [int(i) for row in nums_raw for i in row if i != '']

count = 0

for i in range(0, len(nums_flat), 3):
    if checkTri(nums_flat[i], nums_flat[i+1], nums_flat[i+2]):
        count += 1

count_col = 0

for i in range(0, len(nums_flat), 9):
    for j in range(3):
        if checkTri(nums_flat[i + j],
                nums_flat[i + j + 3], nums_flat[i + j + 6]):
            count_col += 1

print count, count_col

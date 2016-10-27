import sys

T = int(sys.stdin.readline())

while T > 0:
    T -= 1
    num_items = int(sys.stdin.readline().split(' '))
    coords = []
    for i in range(num_items):
        coords.append([int(i) for i in sys.stdin.readline().split(' ')])

    if coords[0]

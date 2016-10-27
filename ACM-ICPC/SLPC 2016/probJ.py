import sys
import math

T = int(sys.stdin.readline())

def isContained(point, coord1, coord2):
    if (point[0] <= coord1[0] and point[0] >= coord2[0]) or (point[0] <= coord2[0] and point[0] >= coord1[0]):
        if (point[1] <= coord1[1] and point[1] >= coord2[1]) or (point[1] <= coord2[1] and point[1] >= coord1[1]):
            return True
        else:
            return False
    else:
        return False

def areaRect(coord1, coord2):
    temp = (coord2[0] - coord1[0]) * (coord2[1] - coord1[1])
    factor = -1 if temp < 0 else 1
    return temp * factor

while T > 0:
    T -= 1
    size = int(sys.stdin.readline())
    min_num = math.ceil((size + 1) / 2)
    answer = 1000000000
    coords = []
    for i in range(size):
        coords.append([int(i) for i in sys.stdin.readline().split(' ')])
    for i in range(len(coords)):
        for j in range(len(coords)):
            num = 0
            for coord in coords:
                if isContained(coord, coords[i], coords[j]):
                    num += 1
            if num >= min_num:
                if areaRect(coords[i], coords[j]) < answer:
                    answer = areaRect(coords[i], coords[j])

    print(answer)

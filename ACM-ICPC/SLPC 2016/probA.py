import sys
import math

def listPermutes(list1, list2):
    if len(list1) == 0:
        return list2
    if len(list2) == 0:
        return list1

    permutes = []
    for i in list1:
        for j in list2:
            permutes.append(i+j)
    return permutes

T = int(sys.stdin.readline())

while T > 0:
    T -= 1
    types, num_answers = [int(i) for i in sys.stdin.readline().split(' ')]

    pieces = []
    for i in range(types):
        piece = sorted([int(i) for i in sys.stdin.readline().split(' ')[1:]])
        pieces.append(piece)

    answers = []
    for i in range(types):
        answers = listPermutes(answers, pieces[i])
        answers = sorted(answers)[:num_answers]

    print(' '.join([str(i) for i in sorted(answers)[:num_answers]]))

import sys

T = int(sys.stdin.readline())

while T > 0:
    T -= 1
    num = int(sys.stdin.readline())
    numbers = {}
    for i in range(num):
        for i in [int(i) for i in sys.stdin.readline().split(' ')]:
            if i in numbers:
                numbers[i] += 1
            else:
                numbers[i] = 1
    
    minimum = 0
    answer = [0] * 6
    for key in sorted(numbers):
        if numbers[key] > min([numbers[i] if i != 0 else 0 for i in answer]):
            answer[answer.index(min([numbers[i] if i != 0 else 0 for i in answer]))] = key
        if key == 7 and 6 in answer and numbers[6] == numbers[7]:
            answer.append(7)
            answer.remove(6)

    print(' '.join([str(i) for i in sorted(answer)]))


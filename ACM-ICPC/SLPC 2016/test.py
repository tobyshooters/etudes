import sys
T = int(sys.stdin.readline())

def check(word):
    comparison = []
    for letter in word:
        comparison.insert(0, letter)
    if ''.join(comparison) == word:
        return True
    else:
        return False

while T > 0:
    T -= 1
    word = sys.stdin.readline()
    answer = ''
    for i in range(len(word)):
        for j in range(len(word)):
            substring = word[i:j]
            if check(substring) and len(substring) > len(answer):
                answer = substring
    print(answer)

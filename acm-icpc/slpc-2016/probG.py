import sys

T = int(sys.stdin.readline())

while T > 0:
    T -= 1
    tasks, num_cities = [int(i) for i in sys.stdin.readline().split(' ')]
    cities = [0] * num_cities
    
    for _ in range(tasks):
        task = sys.stdin.readline().split(' ')
        
        if task[0] == 'U':
            letter, direc, i, s, a, d = task
            i = int(i)
            s = int(s)
            a = int(a)
            d = int(d)
            factor = 1 if direc == 'E' else -1
            for j in range(d):
                cities[i-1+factor*j] += s + a*j

        if task[0] == 'Q':
            print(cities[int(task[1])-1])

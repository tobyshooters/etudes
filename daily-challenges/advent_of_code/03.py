import sys
from math import inf

p1, p2 = (l.strip() for l in sys.stdin.readlines())
p1 = [(s[0], int(s[1:])) for s in p1.split(",")]
p2 = [(s[0], int(s[1:])) for s in p2.split(",")]

i = j = k = 0
locations = set()
traveled_distance = {}

for steps in p1:

    if steps[0] == 'U':
        for _ in range(steps[1]):
            i += 1
            k += 1
            locations.add((i, j))
            if (i, j) not in traveled_distance:
                traveled_distance[(i, j)] = k

    if steps[0] == 'D':
        for _ in range(steps[1]):
            i -= 1
            k += 1
            locations.add((i, j))
            if (i, j) not in traveled_distance:
                traveled_distance[(i, j)] = k

    if steps[0] == 'R':
        for _ in range(steps[1]):
            j += 1
            k += 1
            locations.add((i, j))
            if (i, j) not in traveled_distance:
                traveled_distance[(i, j)] = k

    if steps[0] == 'L':
        for _ in range(steps[1]):
            j -= 1
            k += 1
            locations.add((i, j))
            if (i, j) not in traveled_distance:
                traveled_distance[(i, j)] = k


closest = inf
least_steps = inf
i = j = k = 0

for steps in p2:

    if steps[0] == 'U':
        for _ in range(steps[1]):
            i += 1
            k += 1
            if (i, j) in locations:
                if abs(i) + abs(j) < closest:
                    closest = abs(i) + abs(j)
                if traveled_distance[(i, j)] + k < least_steps:
                    least_steps = traveled_distance[(i, j)] + k

    if steps[0] == 'D':
        for _ in range(steps[1]):
            i -= 1
            k += 1
            if (i, j) in locations:
                if abs(i) + abs(j) < closest:
                    closest = abs(i) + abs(j)
                if traveled_distance[(i, j)] + k < least_steps:
                    least_steps = traveled_distance[(i, j)] + k

    if steps[0] == 'R':
        for _ in range(steps[1]):
            j += 1
            k += 1
            if (i, j) in locations:
                if abs(i) + abs(j) < closest:
                    closest = abs(i) + abs(j)
                if traveled_distance[(i, j)] + k < least_steps:
                    least_steps = traveled_distance[(i, j)] + k

    if steps[0] == 'L':
        for _ in range(steps[1]):
            j -= 1
            k += 1
            if (i, j) in locations:
                if abs(i) + abs(j) < closest:
                    closest = abs(i) + abs(j)
                if traveled_distance[(i, j)] + k < least_steps:
                    least_steps = traveled_distance[(i, j)] + k

print(closest)
print(least_steps)

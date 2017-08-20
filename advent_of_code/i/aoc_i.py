class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.prev_values = {(self.x, self.y)}

    def update(self, dX = 0, dY = 0):
        self.x += dX
        self.y += dY

    def walkAndCheck(self, direction):
        if direction == 0:
            self.y += 1
        elif direction == 1:
            self.x += 1
        elif direction == 2:
            self.y -= 1
        else:
            self.x -= 1

        if ((self.x, self.y) in self.prev_values):
            return True
        else:
            self.prev_values.add((self.x, self.y))

    def dist(self):
        return self.x + self.y

    def __str__(self):
        return str(self.x) + ', ' + str(self.y)


class Grid:
    def __init__(self):
        self.coord = Point(0, 0)
        # 0 = 'N', 1 = 'E', 2 = 'S', 3 = 'W'
        self.dir = 0

    def changeDir(self, side):
        if side == 'R':
            self.dir += 1
        if side == 'L':
            self.dir -= 1
        
        # Avoid negative indexes
        self.dir = (self.dir + 4) % 4

    def move(self, rule):
        side = rule[0]
        steps = int(rule[1:])

        self.changeDir(side)
        
        # Update x and y, while adding locations to visited
        for i in range(steps):
            if (self.coord.walkAndCheck(self.dir)):
                return 'Arrived'

def main():

    with open('aoc_i_input.txt', 'r') as f:
        data = f.read()
        data = data.replace('\n', '').split(', ')

    g = Grid()
    for rule in data:
        if (g.move(rule) == 'Arrived'):
            break

    print "You are " + str(g.coord.dist()) + " steps away."

main()



import time

class Grid:

    def __init__(self):
        self.grid = {}
        for i in range(9):
            for j in range(9):
                self.grid[(i, j)] = [x for x in range(1, 10)]

    def setCell(self, i, j, value):
        self.grid[(i, j)] =  value

    def setGrid(self, matrix):
        for i, row in enumerate(matrix):
            for j, col in enumerate(row):
                if not(matrix[i][j] == 0):
                    self.setCell(i, j, matrix[i][j])

    def updateGrid(self):
        for key in self.grid:
            if self.grid[key] not in range(0, 10):
                if len(self.grid[key]) == 1:
                    self.grid[key] = self.grid[key][0]
                else:
                    self.checkCell(key)

    def checkCell(self, coords):
        # Coords = i, j in a tuple
        options = self.grid[coords]

        # Checking the row
        for key in [key for key in self.grid if key[0] == coords[0]
                            and self.grid[key] in range(9)]:
            for value in options:
                if self.grid[key] == value:
                    options.remove(value)

        # Checking the column
        for key in [key for key in self.grid if key[1] == coords[1]
                            and self.grid[key] in range(9)]:
            for value in options:
                if self.grid[key] == value:
                    options.remove(value)

        # Checking the square
        regions = [[(0,0), (0,1), (0,2), (1,0), (1,1), (1,2), (2,0), (2,1), (2,2)],
                   [(3,0), (3,1), (3,2), (4,0), (4,1), (4,2), (5,0), (5,1), (5,2)],
                   [(6,0), (6,1), (6,2), (7,0), (7,1), (7,2), (8,0), (8,1), (8,2)],
                   [(0,4), (0,5), (0,3), (1,4), (1,5), (1,3), (2,4), (2,5), (2,3)],
                   [(3,4), (3,5), (3,3), (4,4), (4,5), (4,3), (5,4), (5,5), (5,3)],
                   [(6,4), (6,5), (6,3), (7,4), (7,5), (7,3), (8,4), (8,5), (8,3)],
                   [(0,6), (0,7), (0,8), (1,6), (1,7), (1,8), (2,6), (2,7), (2,8)],
                   [(3,6), (3,7), (3,8), (4,6), (4,7), (4,8), (5,6), (5,7), (5,8)],
                   [(6,6), (6,7), (6,8), (7,6), (7,7), (7,8), (8,6), (8,7), (8,8)]]

        for region in regions:
            if coords in region:
                for key in region:
                    for value in options:
                        if self.grid[key] == value:
                            options.remove(value)

        self.grid[coords] = options

    def isSolved(self):
        for key in self.grid:
            if not isinstance(self.grid[key], int):
                return False
        else:
            print("You have solved the Sudoku!")
            return True

    def __str__(self):
        string = ''
        for row in range(9):
            for col in range(9):
                string += str(self.grid[(row, col)]
                                if self.grid[(row, col)] in range(0, 10) else 0)
                string += ' '
            string += '\n'
        return string

g = Grid()

sudoku = """090100300,010060024,700380000,
            000000406,083000190,207000000,
            000093005,670020080,009004060"""

matrix = []
for x in sudoku.replace("\n", "").replace(" ", "").split(","):
    temp = []
    for y in x:
        temp.append(int(y))
    matrix.append(temp)

g.setGrid(matrix)

while not g.isSolved():
    g.updateGrid()
    print(g)
    time.sleep(0.1)

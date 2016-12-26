class Keypad:
    
    def __init__(self):
        self.curr = 5

    # Using 0 indexing for a grid
    def move(self, direction):
        if direction == "U":
            if self.curr > 3:
                self.curr -= 3

        elif direction == "D":
            if self.curr < 7:
                self.curr += 3

        elif direction == "L":
            if not (self.curr % 3 == 1):
                self.curr -= 1

        elif direction == "R":
            if not (self.curr % 3 == 0):
                self.curr += 1

class FunkyKeypad:

    def __init__(self):
        self.keys = ['.', '.',  1,  '.', '.',
                     '.',  2,   3,   4,  '.',
                      5,   6,   7,   8,   9 ,
                     '.', 'A', 'B', 'C', '.',
                     '.', '.', 'D', '.', '.']

        self.index = 10

    def move(self, direction):
        if direction == "U":
            if (self.index > 4) and (self.keys[self.index - 5] != '.'):
                self.index -= 5

        elif direction == "D":
            if (self.index < 20) and (self.keys[self.index + 5] != '.'):
                self.index += 5

        elif direction == "L":
            if (self.index % 5 != 0) and (self.keys[self.index - 1] != '.'):
                self.index -= 1

        elif direction == "R":
            if (self.index % 5 != 4) and (self.keys[self.index + 1] != '.'):
                self.index += 1

def main():
    
    filestr = "aoc_ii_input.txt"
    with open(filestr, "r") as f:
        data = f.read().split("\n")

    kp = FunkyKeypad()
    code = ""

    for line in data:
        if line:
            for char in line:
                kp.move(char)
            code += str(kp.keys[kp.index])

    print code

main()

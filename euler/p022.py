import string

values = {letter: index for index, letter in enumerate(string.ascii_uppercase, start = 1)}

def rank_word(i, w):
    return i * sum([values[l] for l in w])

with open('p022_names.txt', 'r') as name_file:
    names = sorted([name.strip() for name in
                        name_file.readline().replace("\"", "").split(",")])
    total = sum([rank_word(i, name) for i, name in enumerate(names, start = 1)])

    print(total)

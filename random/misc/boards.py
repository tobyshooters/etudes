# Printing a "n" x "m" sized board
# n = lines, m = columns

# size = input("What size board would you like?: ")
n = 2
m = 12

for i in range(n):
    print(" ---" * m)
    print("|   " * (m+1))
print(" ---" * m)

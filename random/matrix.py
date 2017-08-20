def createMatrix(m,n,name):
    name = []
    for i in range(m):
        temp = []
        for j in range(n):
            print("Esta é a %da linha. Insera o %do numero" %(m+1,n+1))
            temp.append(int(input("> ")))
        name.append(temp)

def printMatrix(matrix):
    for i in matrix:
        print(i)

def multiplyMatrixes(m1, m2):
    m = len(m1)
    n = len(m1[0])
    p = len(m2[0])
    res = []
    if len(m1[0]) != len(m1):
        print("Essas matrizes não são multiplicáveis")
    else:
        for i in range(m):
            line = []
            for k in range(p):
                temp = 0
                for j in range(n):
                    temp += m1[i][j] * m2[j][k]
                line.append(temp)
            res.append(line)
        printMatrix(res)

def detMatrix(matrix):
    m = len(matrix)
    n = len(matrix[0])
    copy = matrix
    res = 0

    def cofactor(num):
        if m == 1 and n == 1:
            return matrix[0][0]
        else:
            for i in range(m):
                copy[i].remove(copy[i][num])
            copy.remove(copy[0])
            return detMatrix(copy)

    for num in range(n):
        res += matrix[0][num] * (-1**num) * cofactor(num)

detMatrix([[1,2],[2,1]])

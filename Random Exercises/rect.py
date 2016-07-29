a = [1,5]
b = [2,4]
c = [3,4]
d = [4,3]

def find_int(a,b,c,d):
    coord_x = [a[0],b[0],c[0],d[0]]
    coord_y = [a[1],b[1],c[1],d[1]]

    if a[0]<b[0]<c[0]<d[0] or c[0]<d[0]<a[0]<b[0] or a[1]>b[1]>c[1]>d[1] or c[1]>d[1]>a[1]>b[1]:
        print ("Nao ha interseccao")

    else:
        sorted_x = []
        sorted_y = []

        for i in range(0,4):
            sorted_x.append(min(coord_x))
            coord_x.remove(min(coord_x))
        for j in range(0,4):
            sorted_y.append(min(coord_y))
            coord_y.remove(min(coord_y))

    l = [sorted_x[1],sorted_y[2]]
    r = [sorted_x[2],sorted_y[1]]

    print ("As coords das diagonais sao ")
    print l
    print r

find_int(a,b,c,d)


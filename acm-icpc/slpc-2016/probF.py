import sys
import math

T = int(sys.stdin.readline())

while T > 0:
    T -= 1
    lat1, long1, lat2, long2 = [int(i) for i in sys.stdin.readline().split(' ')]
    delta_lat = (lat2 - lat1) if lat2 >= lat1 else lat1 - lat2
    delta_long = (long2 - long1) if long2 >= long1 else long1 - long2

    correct = 6371 * angle * math.pi / 180
    bugged = 6371 * (delta_lat + delta_long) * math.pi / 180
    print(str(correct) + ' ' + str(bugged))

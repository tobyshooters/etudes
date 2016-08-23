# 1 Jan 1900 was a Monday
# Sunday: 6, Monday: 0, ...
import math

class Date:

    def __init__(self, month, day, year):
        self.month = month
        self.day = day
        self.year =  year

    def __str__(self):
        return '{:2d}/{:2d}/{}'.format(month, day, year)

    def isLeap(self):
        if self.year % 4 == 0 and (self.year % 400 == 0) == (self.year % 100 == 0):
            return True
        else:
            return False

def dayOfWeek(date):
    # Returns number of days since 01-01-1900
    # The result mod 7 gives the day of the week
    count = 0
   
    for year in range(1900, date.year):
        if year % 4 == 0 and (year % 400 == 0) == (year % 100 == 0):
            count += 366
        else:
            count += 365

    for num in range(1, date.month):
        if num == 2:
            count += 29 if date.isLeap() else 28 
        elif num in [4, 6, 11]:
            count += 31
        else:
            count += 30

    count += date.day - 1
    return count % 7

def main():
    count = 0
    for year in range(1901, 2001):
        for month in range(1, 13):
            day = Date(month, 1, year)
            if dayOfWeek(day) == 6:
                count += 1

    print(count)

main()

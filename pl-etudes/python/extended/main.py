# -*- coding: utf-8 -*-
import os, sys
import re
# Imports translation dictionary from file
from num_dict import dictionary as num_dict

def readFile(filename):
    with open(filename, 'r') as f:
        return [line.strip() for line in f]

def writeFile(filename, array):
    with open(filename, 'w') as f:
        for line in array:
            f.write(line + '\n')

def recoverNumbers(line):
    regex = re.compile(r'(US\$|R\$)(\d+)\,(\d+)')
    content = regex.findall(line)
    return content

def convertValue(value):

    def convertNumber(num):
        num_string = ''

        if num >= 2000:
            num_string += num_dict[(num - num % 1000) / 1000] + ' mil '
        elif num >= 1000:
            num_string += ' mil '

        num = num % 1000
        if num >= 200:
            num_string += num_dict[num - num % 100] + ' e '
        elif num >= 100:
            num_string += 'cento e '

        num = num % 100
        if num >= 20:
            num_string += num_dict[num - num % 10]
            if num % 10 != 0:
                num_string += ' e ' + num_dict[num % 10]
        else:
            num_string += num_dict[num]

        return num_string

    # Set Up of Variables
    unit, num, dec = value[0], int(value[1]), int(value[2])
    trans_num = convertNumber(num)
    trans_dec = convertNumber(dec)
    if unit == 'US$':
        unit = 'dolar' if num == 1 else 'dólares'
    elif unit == 'R$':
        unit = 'real' if num == 1 or (num == 0 and dec == 1) else 'reais'
    cents = 'centavos' if dec != 1 else 'centavo'

    # Building Number
    response = ''
    if num == 0 and dec != 0:
        response += trans_dec + " " + cents + " de " + unit
    else:
        response += '{} {}'.format(trans_num, unit)
        response += ' e {} {}'.format(trans_dec, cents)

    return response


def main():
    in_file, out_file = sys.argv[1], sys.argv[2]
    f = readFile(in_file)
    # Executes REGEX on every line, returning numbers
    lines = [recoverNumbers(line) for line in f]
    # Flattens "lines" list and converts each number to extended form
    numbers = [convertValue(num) for line in lines for num in line]
    # Adds each line to the resulting file
    new_file = writeFile(out_file, numbers)

main()

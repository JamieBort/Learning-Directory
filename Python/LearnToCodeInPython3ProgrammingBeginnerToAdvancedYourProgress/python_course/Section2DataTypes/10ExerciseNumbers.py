import math
number = float(input("Enter a number for the radius: "))
area = round(number*number*math.pi)
circumfrince = 2 * math.pi * number
print("The area is: ", area)
print("The circumfrince is: ", circumfrince)
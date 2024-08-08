# https://projecteuler.net/problem=1

# If we list all the natural numbers below 10 that are multiples of 3 or 5, 
# we get 3, 5, 6, and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

# Using recursive
# Base case: 

list_of_multiples = []
def test_if_multiple(param):
    print('param:',param)
    if param % 3==0 or param % 5==0:
        print("Yes")
        list_of_multiples.append(param)
        # print(param % 3)
        # print(param % 3==0)
    else: print("No")

# test_if_multiple(1)
# test_if_multiple(2)
# test_if_multiple(3)
# test_if_multiple(4)
# test_if_multiple(5)
# test_if_multiple(6)
# test_if_multiple(7)
# test_if_multiple(8)
# test_if_multiple(9)
# # test_if_multiple(10)

# number = 9
number = 999
for x in range(number):
  x=x+1
  print("x:",x)
  test_if_multiple(x)

print(list_of_multiples)
Sum = sum(list_of_multiples)
print(Sum)
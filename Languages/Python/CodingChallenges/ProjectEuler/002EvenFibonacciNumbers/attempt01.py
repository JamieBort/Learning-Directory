# 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

# a = 1
a = int(1)
print("a:", a)

# b = 2
b= 2 * a
print("b:", b)

# c = 3
c = a + b
print("c:", c)

# d  = 5
d = c + b
print("d:", d)

# evens = [b]
total = int(2)

## 4 + (n - 1) terms
# n = 2 # 5 terms ((5 - 4) + 1)
# n = 7 # 10 terms ((10 - 4) + 1)
n = 3999997 # 4 million terms ((4000000 - 4) + 1)
i = 1
while i < n:
  # print(i)
  b = c
  # print("b:", b)
  c = d
  # print("c:", c)
  d = c + b
  # print("d:", d)
  if d%2==0:
    total += d
  i += 1

# print((4000000 - 4) + 1)
print("total:", total)
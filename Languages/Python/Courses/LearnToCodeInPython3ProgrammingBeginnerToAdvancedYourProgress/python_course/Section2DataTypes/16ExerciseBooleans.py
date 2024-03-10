age = 16
guess = int(input("What is my age? "))
print(age)
print(guess)
if age>guess:
    print("I am older than you.")
elif age<guess:
    print("You are older than me.")
else:
    print("We have the same age.")
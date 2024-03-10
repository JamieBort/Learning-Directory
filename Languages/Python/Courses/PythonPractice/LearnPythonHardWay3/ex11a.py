print("This is code to solicit information.\n Enter an integer?", end=' ')
age = input()
print('''How tall are you in feet?''', end=' ')
height = input()
print("How much do you weighj in pounds?", end=' ')
weight = input()

print("This is an integer. %r. You are %r feet tall. And you weigh %r lbs." % (
age, height, weight
))

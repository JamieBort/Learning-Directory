# Started. Not finished.

# mylist = ["one", "two", "three"]
monthTuble = ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
# print("Please enter your birthdate in the formate of MM-DD-YYYY.")

def week(i):
    switcher={0:'Sunday', 1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday',6:'Saturday'}
    return switcher.get(i,"Invalid day of week")

print(week(0))
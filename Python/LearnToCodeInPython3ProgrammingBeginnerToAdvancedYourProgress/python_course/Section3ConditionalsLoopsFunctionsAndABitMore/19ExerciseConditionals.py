weight = 0
height = 1
bmi_metric = weight/(height * height) # weight in kg. height in meteres
bmi_imperial = (weight/(height * height)) * 703 # weight in pounds. height in inches
which_unit=""

def unit_question():
    which_unit = int(input(""))

def my_function():
    print("Hello from a function")
    print("Which unit do you want to use?")
    print("Enter 1 for 'imperial'.")
    print("And enter 2 for 'metric'.")
    which_unit = int(input(""))
    # unit_question()
    print("You've chosen: ", which_unit)

while which_unit!=1 and which_unit!=2:
    my_function()


# print("Which unit do you want to use?")
# print("Enter 1 for 'imperial'.")
# print("And enter 2 for 'metric'.")
# which_unit = int(input(""))
# print(which_unit)

# while which_unit!=1 and which_unit!=2:
#     print("which unit is not 1 or 2")
#     which_unit = int(input(""))
#     print("which unit is not 1 or 2")
#     if which_unit==1:
#         print("Imperial was chosen.")
#     elif which_unit==2:
#         print("Metric was chosen.")
#     else:
#         print("Neither was chosen. Please choose again.")

# while which_unit!=1 and which_unit!=2: # don't use this.
# print("which unit is not 1 or 2") # don't use this.

# if which_unit==1:
#     print("Imperial was chosen.")
# elif which_unit==2:
#     print("Metric was chosen.")
# else:
#     print("Neither was chosen. Please choose again.")

print("we are out of the loop")
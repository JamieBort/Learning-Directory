weight = 0
height = 1
bmi_metric = weight/(height * height) # weight in kg. height in meteres
bmi_imperial = (weight/(height * height)) * 703 # weight in pounds. height in inches
which_unit=0

def selecting_a_unit():
    print("Which unit? Kilograms or pounds?")
    print("Select 1 for kilograms.")
    print("Select 2 for pounds.")
    which_unit = int(input(""))
    if(which_unit == 1):
        print("Kilograms was selected.")
    if(which_unit == 2):
        print("Pounds was selected.")
    if(which_unit != 1 and which_unit != 2):
        print("Kilograms nor pounds were selected. Please choose again by selecting either 1. Or 2. But nothing else.")
selecting_a_unit()
# print("which unit was selected? ", which_unit)

weight = 0
height = 1
bmi_metric = weight/(height * height) # weight in kg. height in meteres
bmi_imperial = (weight/(height * height)) * 703 # weight in pounds. height in inches
unit=0

# function asking the user to choose metric units or imperial units
def selecting_a_unit():
    which_unit=0
    print("Which unit? Kilograms or pounds?")
    print("Select 1 for kilograms.")
    print("Select 2 for pounds.")
    which_unit = int(input(""))
    if(which_unit != 1 and which_unit != 2):
        print("Kilograms nor pounds were selected. Please choose again by selecting either 1. Or 2. But nothing else.")
    print("=============================")
    return which_unit

def prompting_for_height():
    print("Please enter your height.")
    print("It must be greater than 2")
    height = int(input(""))
    # height = 1
    return height

def prompting_for_weight():
    print("Please enter your weight.")
    print("It must be greater than 1")
    weight = int(input(""))
    # weight = 1
    return weight

while unit != 1 and unit != 2:
    unit = selecting_a_unit()
    if unit == 1:
        print(unit, " was selected. IT'S KILO")

    if unit == 2:
        print(unit, " was selected. IT'S POUNDS!!")

while height < 2:
    height = prompting_for_height()
    print("The height is: ", height)

while weight < 1:
    weight = prompting_for_weight()
    print("The weight is: ", weight)

def calculating_BMI(unit, weight, height):
    bmi = 0
    if unit == 1:
        bmi = weight/(height*height)
        print("The bmi is calculated in metric units and is ", bmi,"[put units here]")
    if unit == 2:
        bmi = 703*weight/(height*height)
        print("The bmi is calculated in imperial units and is ", bmi,"[put units here]")

calculating_BMI(unit, weight, height)
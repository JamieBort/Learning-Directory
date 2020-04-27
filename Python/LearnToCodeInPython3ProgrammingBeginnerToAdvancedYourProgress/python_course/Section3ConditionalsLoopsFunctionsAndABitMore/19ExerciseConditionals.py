weight = 0
height = 1
bmi_metric = weight/(height * height) # weight in kg. height in meteres
bmi_imperial = (weight/(height * height)) * 703 # weight in pounds. height in inches
variable=0

def selecting_a_unit():
    which_unit=0
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
    print("=============================")
    return which_unit
# selecting_a_unit()
# print("which unit was selected? ", which_unit)

while variable != 1 and variable != 2:
    variable = selecting_a_unit()
    print("which unit is : ", variable)
    # bmi = 0
    if variable == 1:
        print("IT'S KILO")
        # bmi=calculate_BMI_metric()
    if variable == 2:
        print("IT'S POUNDS!!")
        # bmi = calculate_BMI_imperial()
    # return bmi
    # return variable

def calculating_BMI(variable, weight, height):
    bmi = 0
    if variable == 1:
        bmi = weight/(height*height)
    if variable == 2:
        bmi = 703*weight/(height*height)
    print("the bmi is: ", bmi)
calculating_BMI(variable, 1,1)
# def calculate_BMI_metric():
#     return weight/(height*height)

# def calculate_BMI_imperial():
#     return 703*weight/(height*height)

# print("the bmi is: ", bmi)
print("the variable is :", variable)
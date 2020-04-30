print("The program calculates your body mass index.")
weight = float(input("Type your weight in kilograms: "))
height = float(input("Type your height in meters: "))
bmi = weight / (height ** 2)
print("Your BMI is: ", round(bmi, 2))
if (bmi <= 18.5):
    classification = "Underweight"
elif (bmi > 18.5 and bmi <= 24.9):
    classification = "Normal weight"
elif (bmi > 24.9 and bmi < 29.9):
    classification = "Over weight"
else:
    classification = "Obesity"
    
print("The classification of your BMI is: ", classification)
# For this exercise the file was first copied from ..LearningDirectory/Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section3ConditionalsLoopsFunctionsAndABitMore/23DataValidation.py

# number = input("Type a number: ")
# try:
#     number = float(number)
#     print("The number is: ", number)
# except:
#     print("Invalid number")

data_valid = False
while data_valid == False:
    try:
        grade1 = float ( input("Type the grade of the first test.\nThe grade must be between 0 and 10: ") )
        if grade1 < 0 or grade1 > 10:
            print("** Please make sure the grade is between 0 and 10. **")
            continue
        else:
            data_valid = True
    except:
        print("**** There was an error.\nPlease make sure that you enter a number. And that the grade is between 0 and 10. ****")

data_valid = False
while data_valid == False:
    try:
        grade2 = float ( input("Type the grade of the second test.\nThe grade must be between 0 and 10: ") )
        if grade2 < 0 or grade2 > 10:
            print("** Please make sure the grade is between 0 and 10. **")
            continue
        else:
            data_valid = True
    except:
        print("**** There was an error.\nPlease make sure that you enter a number. And that the grade is between 0 and 10. ****")

data_valid = False
while data_valid == False:
    try:
        total_classes = int ( input("Type the total number of classes: ") )
        if total_classes <= 0:
            print("** Please make sure the total number of classes is greater than 0. **")
            continue
        else:
            data_valid = True
    except:
        print("**** There was an error.\nPlease make sure that you enter an integer.\nAnd that it is at least greater than 0. ****")

data_valid = False
while data_valid == False:
    try:
        absences = int ( input("Type the number of absences: ") )
        if absences < 0 or absences > total_classes:
            print("** Please make sure the total number of absences is greater than 0 and less than the number of classes. The number of classes is/are: ", total_classes, " **")
            continue
        else:
            data_valid = True
    except:
        print("**** There was an error.\nPlease make sure that you enter an integer.\nAnd that it is at least greater than 0.\nAnd that it is no more than the number of classes. ****")

avg_grade = (grade1 + grade2)/2
attendance = (total_classes - absences)/ total_classes

print("Average grade: " , round(avg_grade,2))
print("Attendance rate: ", str(round((attendance*100),2)) + "%")

if(avg_grade >= 6 and attendance >= 0.8):
    print("The student has been approved")
elif(avg_grade < 6 and attendance < 0.8):
    print("The student has failed due to an average grade lower than 6.0. and an attendance rate lower than 80%.")
elif(attendance >= 0.8):
    print("The student has failed due to an average grade lower than 6.0.")
else:
    print("The student has failed due to an attendance  rate lower than 80%.")
# Started.
# From https://www.udemy.com/course/learn-python-programming-a-step-by-step-course-to-beginners/learn/lecture/13131584#questions/9460970
# Return to this for more experience. More to learn.

import pandas as pd
file = pd.ExcelFile("./Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section5FileHandling/original.xlsx")
# print(file.sheet_names)
sheet = file.parse('sales')
print("The entire sheet: ")
print(sheet)
print("The sum of the column 'Amount': ", sheet.Amount.sum())
print("The sum of the column 'Invoice': ", sheet.Invoice.sum())
# type(sheet) # this isn't working for me.
atype = type(sheet)
print("The type of file: ", atype)
print("The 'Date' column of sheet: ")
print(sheet.Date)

# Print a specific line of the sheet.
print("First")
print(sheet.loc[0])
print("Second")
print(sheet.loc[0, "Amount"])

# Search for a specific customer.
print("Third")
sheet.set_index("Customer", inplace=True) #set the index first.
print(sheet.loc["MMC Inc."])

# Resetting the index:
sheet = sheet.reset_index()


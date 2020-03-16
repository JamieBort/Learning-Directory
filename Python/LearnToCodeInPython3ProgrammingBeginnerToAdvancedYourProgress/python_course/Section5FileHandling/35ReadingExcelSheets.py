import pandas as pd
file = pd.ExcelFile("./Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section5FileHandling/original.xlsx")
# print(file.sheet_names)
sheet = file.parse('sales')
# print(sheet)
type(sheet) # this isn't working for me.
print(sheet.Date)
sheet.Amount.sum()
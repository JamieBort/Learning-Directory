# Started. Come back to finish.

# NOTE: downloaded the original.xlsx file from course site for this file.

import pandas as pd # A popular module for data analysis. NOTE: to install type 'pip install pandas' in Terminal. It was already on my machine so I dind't install it.

# NOTE: for this file we also need the 'xlrd' module. To install type 'pip install xlrd' in Terminal. Again it was already on my machine.

file = pd.ExcelFile("./Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section5FileHandling/sales.xlsx") # NOTE: make sure the ExcelFile() method has proper capitalization.

# Reading the sheet names
print("Reading the sheet names:\n",file.sheet_names,"\n-----------------------")

# Reading the individual sheet
sales_sheet = file.parse('sales')
print("Reading the individual sheet:\n",sales_sheet,"\n-----------------------")

# 
print(type(sales_sheet),"\n-----------------------") # Is a pandas dataframe

# Print the date column
print("Print the date column:\n",sales_sheet.Date,"\n-----------------------")

# Print the sum of a column
print("Print the sum of a column:\n",sales_sheet.Amount.sum(),"\n-----------------------")

# Print a single record/row
print("Print a single record/row:\n",sales_sheet.loc[0],"\n-----------------------")

# Print a single cell
print("Print a single cell:\n",sales_sheet.loc[0,"Customer"],"\n-----------------------")

# Search for all sales made to a specific customer
sales_sheet.set_index("Customer", inplace=True) # Set the index to the Customer column. 
print("Search for all sales made to a specific customer:\n",sales_sheet.loc["MMC Inc."],"\n-----------------------") # Now locate a value in the customer column. In this case we'll use MMC Inc.
# Next you can choose another index using set_index() again.
sales_sheet = sales_sheet.reset_index() # Or you can reset the index using reset_index()
print("Print a single cell after the index has been reset:\n",sales_sheet.loc[0,"Date"],"\n-----------------------")
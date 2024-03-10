print("------------------")
print("This program is going to ask for your name. And then print the intials.")
print("------------------")
firstName = input("Please enter your first name. ")
middleName = input("Please enter your middle name. ")
lastName = input("Please enter your last name. ")
print("Your initials are: ", firstName[0], middleName[0], lastName[0])


print("------------------")
print("------------------")
print("------------------")
print("This program is going to print sections of this part number:")
number = "037-00901-00027"
print(number)
print("------------------")
print("Country code: ", number[0:3])
print("Product code: ", number[4:9])
print("Batch number: ", number[10:15])
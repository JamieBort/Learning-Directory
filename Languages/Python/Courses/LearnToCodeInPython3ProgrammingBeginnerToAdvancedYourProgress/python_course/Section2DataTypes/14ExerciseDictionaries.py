personTemplate = ["name", "gender", "age", "address", "phone"]
person = {"name":"Jim", "gender":"Female", "age":"3", "address":"Elm Street", "phone":"0987654321"}
print(person.get("gender"))
for x in range(0, 4):
    print("The ", personTemplate[x], " is: ", person.get(personTemplate[x]), ".")
data=input("Please enter the info you'd like to know. ")
print("The information you requested: ", person.get(data, "That information is not available."))
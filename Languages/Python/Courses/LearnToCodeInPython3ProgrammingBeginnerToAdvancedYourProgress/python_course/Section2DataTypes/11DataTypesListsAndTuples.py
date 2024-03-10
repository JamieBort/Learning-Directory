students = "John, Mary, Steve"
print("The type of students: ", type(students))
print("A string: ", students)
print("----------------------")
students = ["John", "Mary", "Steve"]
print("The type of students now: ", type(students))
print("A list: ", students)
students.append("Dave")
print("A list: ", students)
students.pop()
print("A list: ", students)
students.pop()
print("A list: ", students)

print("----------------------")
students = ("John", "Mary", "Steve")
print("The type of students now: ", type(students))
print("Name: ")
print(type(students).__name__)

name = type(students).__name__
print("Name variable: ", name)
print("A tuple: ", students)
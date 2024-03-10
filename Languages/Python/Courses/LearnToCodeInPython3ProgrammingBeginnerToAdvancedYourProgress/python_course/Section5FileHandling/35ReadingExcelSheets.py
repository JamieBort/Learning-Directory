# NOTE: before writing in this file I created a text.txt file in the same directory.

# Reading
f = open("./Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section5FileHandling/test.txt", "r") # "r" for read mode.

# f = open("./test.txt") # NOTE: Since the read mode is the default mode,  "r" can be ommited.

print(f.read())
# ------------------

# Writing
f = open("./Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section5FileHandling/test.txt", "w") #NOTE" the write mode, "w" will overwrite text that is already written in the file. Also, this mode will create the file if it does not already exist.

f.write("This text will overwrite the content of our file.")

f = open("./Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section5FileHandling/test.txt") # Using default syntaxt by ommiting the "r".

print(f.read()) # NOTE: the read method will return an error if the file does not exist.
# ------------------

# Appending
f = open("./Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section5FileHandling/test.txt", "a") #NOTE" the apend mode, "a" will append text to what is already written in the file. Also, this mode will create the file if it does not already exist.

f.write("\nThis text will be appended to the file.")

f = open("./Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section5FileHandling/test.txt", "r")

print(f.read())
# ------------------

# Create
# f = open(<file path>, "x") # NOTE: The create mode, "x" creates a file. If the file already exists it returns an error.

# open(<file path>, "x") # NOTE: If all you want to do is create the file, you do not need to assign the statement to a vairable.
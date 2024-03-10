from sys import argv

script, first, second, third = argv

print "The script is called:", script
script = raw_input("How does this work? ")
print "Your first variable is:", first
first = raw_input("And how does THIS work? ")
print "Your second variable is:", second
print "Your third variable is:", third

# The above is is a module

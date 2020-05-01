# NOT DONE - COME BACK TO

# Exercise:
# Create a program to help the user type faster. 
# Give them a word and ask them to write it five times.
# Check how many seconds it took them to type the word at each round.
# In the end, tell the user how many mistakes were made.
# And show a chart with the typing speed evolution during the 5 rounds.

# Solution:
import time as t

word_to_practice = input("Please type a word that you would like to practice typing more quickly:\n") # does not have correct validation - crashes if a string is not entered
print("The word is: ", word_to_practice)
number_of_attempts = int(input("Please enter an integer for the number of attemps you'd like to try.\n")) # does not have correct validation - crashes if an integer is not entered
print("The number of attempts is: ", number_of_attempts)

def measure_elapsed_time(word):
    my_list = []
    print("The word to practice is: ", word)
    before = t.time() # the amount of time since the epoch.
    attempt = input("Please attempt to type that word again.\n")
    after = t.time() # the amount of time since the epoch.
    my_list.append(attempt)
    my_list.append(after-before)
    return my_list

# this is not needed
def check_spelling(thelist):
    if word_to_practice == thelist:
        print("they're the same")
    else:
        print("They're not the same")

def master_function(wordToPractice): # this function calls measure_elapsed_time()
    my_dictionary = {}
    i=0
    while i < number_of_attempts:
        myList = measure_elapsed_time(wordToPractice)
        my_dictionary[i] = myList
        i += 1

    for key in my_dictionary:
        print("The ", key + 1, " attempt was ", round(my_dictionary[key][1], 4), " seconds long.")
    
    talley = 0
    for key in my_dictionary:
        if my_dictionary[key][0] != word_to_practice:
            talley += 1
    print("There were ", talley, "mistakes made.")
    # my_dictionary["Number of incorrect spellings"] = talley
    # print("my_dictionary: ", my_dictionary)
    
master_function(word_to_practice)
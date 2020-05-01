# NOT DONE - COME BACK TO

# Exercise:
# Create a program to help the user type faster. 
# Give them a word and ask them to write it five times.
# Check how many seconds it took them to type the word at each round.
# In the end, tell the user how many mistakes were made.
# And show a chart with the typing speed evolution during the 5 rounds.

# Solution:
import time as t
dictionary = {} # declare dictionary.
theWord = ""
word = ""

def solicitWord():
    theWord = input("Please type a word you'd like to practice typing more quickly.\n")
    print("The word you've chosen is: ", theWord)
    print("--------------------------------")
    return theWord
# theWord = solicitWord()
# print("First time: ", theWord)

def measuringWordTime(some): # calculates the elapsed time. 
    # print("Again ", some)
    # print("The word you've chosen is: ", some)
    beforeWordIsEntered = t.time()
    bean = input("PLEASE TYPE THAT WORD FIVE TIMES\n")
    print("bean ", bean)
    afterWordIsEntered = t.time()
    return afterWordIsEntered-beforeWordIsEntered # elapsed time.

def masterFunction():
    word = solicitWord()
    # print("word: ", word)
    # a = 0
    # dictionary.update({a: measuringWordTime(word)})
    # print("The dictionary: ", dictionary)
    # print("The dictionary length: ", len(dictionary))

    t=0
    while len(dictionary)<5:
        dictionary.update({t: measuringWordTime(word)})
        t+=1

    # print("The dictionary: ", dictionary)
    # print("The dictionary length: ", len(dictionary))

masterFunction()

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

def timeMeasure(): # measures the time
    since_beginning_of_time = t.time()
    # print(since_beginning_of_time)
    return since_beginning_of_time

def measuringWordTime(): # calculates the elapsed time. 
    beforeWordIsEntered=timeMeasure()
    word = input("PLEASE TYPE THE WORD 'RUN' ")
    afterWordIsEntered=timeMeasure()
    elapsed=afterWordIsEntered-beforeWordIsEntered
    myObject= {"The Word": word, "the time to type the word":elapsed} # creates an object of the elapsed time and the word.
    return myObject

def masterFunction():
    print("The dictionary length: ", len(dictionary))
    t=0
    while len(dictionary)<5:
        dictionary.update({t: measuringWordTime()})
        t+=1
    print("The dictionary: ", dictionary)
    print("The dictionary length: ", len(dictionary))

# timeMeasure()
masterFunction()
# measuringWordTime()
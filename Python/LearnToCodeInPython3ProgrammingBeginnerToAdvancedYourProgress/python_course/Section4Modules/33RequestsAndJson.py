# Not done yet. it works. But it needs to be cleaned up.

# NOTE: used ../LearningDirectory/Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section4Modules/32WorkingWithJSON.py for this exercise.

#Exercise
# Create a quizzing game. Make an HTTP request to the Open Trivia API at each round of the game to get a new question.
# Present that question to the user for that person to answer.
# Let the user know if they got the answer correct.
# At the end of each round ask the user if they want to play again.
# Keep playing until the user types 'quit'.

# Solution
import requests
import json
import pprint # This allows us to print the json in a more readable format.
import random
r = requests.get("https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple")
quit = False
t=0

while(quit != True):

# while(!quit):
    # while t<20:
    #     print("t: ", t)
    #     t+=1
    # import requests
    # r = requests.get("https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple")

    # try:
    #     print("The response/status code:")
    #     print(r.status_code)
    # except:
    #     print("An exception occurred")

    if(r.status_code!=200):
        print("The response wasn't 200: ", r.status_code)
    else:
        print("The response/status code is: ", r.status_code)
        theEntireObject = json.loads(r.text) # the loads() method converst json/string into a python dictionary.
        # print("The Entire Object: ", theEntireObject)
        theQuestion = theEntireObject["results"][0]["question"]
        print("The question is: ", theQuestion)
        
        theCorrectAnswer = theEntireObject["results"][0]["correct_answer"]
        # print("THE Correct Answer: ", theCorrectAnswer)
        theIncorrectAnswer = theEntireObject["results"][0]["incorrect_answers"]
        # print("THE Incorrect Answers: ", theIncorrectAnswer)

        # guess = input("Please type your answer: ")
        # print("You guessed: ", guess)

        # if(guess==theCorrectAnswer):
        #     print("You are correct! The answer is ", theCorrectAnswer)
        #     quit=True
        # else:
        #     print("That is not correct. Please guess again.")

        # print("The type of the correct answer: ", type(theCorrectAnswer))

        # print("The type of the incorrect answer: ", type(theIncorrectAnswer))


        # print(random.choice(theIncorrectAnswer))

        # Add the correct answer to the list of incorrect answers.
        theIncorrectAnswer.append(theCorrectAnswer)

        # Populate a different list randomly from the new list of incorrect answers.
        completeList = []
        for i in range(len(theIncorrectAnswer)):
            first = random.choice(theIncorrectAnswer)
            completeList.append(first)
            theIncorrectAnswer.remove(first)

        # Share that list with the user for them to guess from.
        print("These are your choices to guess from:\n", completeList)

        # Have them guess which one is correct.
        guess = input("Please type your answer. Keep in mind, it has to be spelled correctly. Typos will be treated as incorrect: ")
        print("You guessed: ", guess)

        # When they guess correctly, game over.
        if(guess==theCorrectAnswer):
            print("You are correct! The answer is ", theCorrectAnswer)
            quit=True
        else:
            print("That is not correct. Please guess again.")
        
        # When they guess incorrectly, they need to try again.
    
    # quit = True

# print("Answered Correctly/out of while loop.")
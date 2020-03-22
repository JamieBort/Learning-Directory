#Exercise
# Create a quizzing game. Make an HTTP request to the Open Trivia API at each round of the game to get a new question.
# Present that question to the user for that person to answer.
# Let the user know if they got the answer correct.
# At the end of each round ask the user if they want to play again.
# Keep playing until the user types 'quit'.

import requests
import json
import pprint # This allows us to print the json in a more readable format.
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

    print("The response/status code:")
    print(r.status_code)
    print("The body of the response:")
    # print(r.text)
    question = json.loads(r.text) # the loads() method convers json/string into a python dictionary.
    print(question)

    print("-----------------------")
    print(question["results"][0]["category"])

    print("-----------------------")
    print(question["results"][0]["incorrect_answers"])

    print("-----------------------")
    person = {"name": "john", "age" : 30}
    person_json = json.dumps(person) # converting a dictionary into a json/string using the dumps() method
    pprint.pprint(person_json)
    # print(type(person_json))
    # print(type(person))

    # print("***Quit:" , quit)
    print("in the while statement")
    # quit= input("Type true. ")
    quit=True
    # print("Quit***:" , quit)

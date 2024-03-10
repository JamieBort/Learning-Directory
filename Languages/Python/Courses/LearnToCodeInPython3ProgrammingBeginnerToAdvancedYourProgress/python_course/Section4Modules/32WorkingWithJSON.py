# NOTE: The files
# ./LearningDirectory/Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section4Modules/30Requests.py
# ./LearningDirectory/Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section4Modules/31SendingHTTPRequestsToAPIs.py
# and
# ./LearningDirectory/Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section4Modules/32WorkingWithJSON.py
# are related - they should be kept together/learned together/etc.

# Also, used pprint library in this video. I didn't have it. So I installed it following the instructors instruction using 'pip install pprint'.

import requests
r = requests.get("https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple")

print("The response/status code:")
print(r.status_code) # Hoping for a 200 response.
# The following is the response: 
# 200

print("The body of the response:")
print(r.text)
# The following is the response: 
# {"response_code":0,"results":[{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"Which of these is NOT the name of an album released by English singer-songwriter Adele?","correct_answer":"12","incorrect_answers":["19","21","25"]}]}

print("-----------------------")
print(type(r.text))
# The following is the response:
# <class 'str'>
# It's a string.

print("-----------------------")
import json
question = json.loads(r.text) # the loads() method convers json/string into a python dictionary.
print(question)
print(type(question))

print("-----------------------")
import pprint # This allows us to print the json in a more readable format.
pprint.pprint(question)

print("-----------------------")
print(question["results"][0]["category"])

print("-----------------------")
print(question["results"][0]["incorrect_answers"])

# converting a dictionary into a json/string using the dumps() method
print("-----------------------")
person = {"name": "john", "age" : 30}
person_json = json.dumps(person)
pprint.pprint(person_json)
print(type(person_json))
print(type(person))
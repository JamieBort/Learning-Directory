# Matplotlib is an external module.
# External modules need to be installed.
# to install this requests library type 'pip install requests' in the commnand line.
# it was already installed. I didn't update it.

# we'll be using these libraries in other lessons:
# https://matplotlib.org/
# https://scikit-learn.org/stable/
# https://www.pygame.org/news
# https://www.scipy.org/
# https://www.sqlalchemy.org/
# https://wxpython.org/
# https://requests.readthedocs.io/en/master/

# Did not write any code for htis video. Just navigated to this url 
# https://opentdb.com/
# to genearate this endpoint: https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple
# We then navigated to that url in a new tab/page.
# Chrome rendered this json:

# {"response_code":0,"results":[{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"What was the name of singer Frank Ocean&#039;s second studio album, which was released on August 20, 2016?","correct_answer":"Blonde","incorrect_answers":["Brunette","Black","Burgundy"]}]}

# here's the same json:

# {
#     "response_code": 0,"results": [
#         {
#             "category": "Entertainment: Music",
#             "type": "multiple",
#             "difficulty": "easy",
#             "question": "What was the name of singer Frank Ocean&#039;s second studio album, which was released on August 20, 2016?",
#             "correct_answer": "Blonde",
#             "incorrect_answers": [
#                 "Brunette",
#                 "Black",
#                 "Burgundy"
#             ]
#         }
#     ]
# }

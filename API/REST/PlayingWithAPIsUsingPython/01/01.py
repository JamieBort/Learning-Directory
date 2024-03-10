import requests

try:
    r = requests.get("https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple")
    # r = requests.get("")
    print("The response/status code:")
    print(r.status_code) # Hoping for a 200 response.
    # The following is the response: 
    # 200
    # print(x)
except NameError:
    print("Variable x is not defined.") # This will print if a NameError error occurs.
except:
    # print("Something else went wrong.") # This will print if a different error occurs.
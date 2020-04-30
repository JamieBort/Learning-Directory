# First of two.
# Create a program that asks a user for 8 names of people.
# Store them in a list.
# When all the names have been given, pick a random one and print it.

# Second of two.
# Create a guess game with the names of colors.
# At each round pick a random color and let the user guess it.
# After a successful guess, ask the user if they want to play again.
# Keep playing until the user types "no"

import random #used for both

# First of two.
mylist = []
while len(mylist) < 8:
    another = input("One by one, please type the name of a person.\n")
    mylist.append(another)
print("Your list of people is: ", mylist)
print("Here is the name from your list that has been picked randomly: ", random.choice(mylist))

# Second of two.
guess = "yes"
listOfColors = ["red", "orange", "blue", "green"]
while guess != "no":
    guess = input("Make a guess. Type 'red', 'orange', 'blue', or 'green'. If it matches the computer, you win. The game will be over. If not, guess again.\n")
    print("You guessed: ", guess)
    if random.choice(listOfColors) == guess:
        print("They guessed correctly. Game over.")
        break
    else:
        print("They guessed incorectly. Guess again.")
print("Out of while loop.")
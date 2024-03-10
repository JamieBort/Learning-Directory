assignment from: https://newline.theironyard.com/cohorts/15/courses/10/projects/78

**Build a game with Node and Express**
Use Node, Express, and sessions to build Mystery Word

You will implement the game Mystery Word as a web application. In your game, you will be playing against the computer.

When a user that is not in a current game arrives at your root page, your app must select a word at random from the list of words in the file /usr/share/dict/words. This file exists on your computer already. You will have to read it with Node. The following line will read it and split it into words:

const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");

Store the word the user is trying to guess in a session.

On the page, show the number of letters in the word like so:

"_ _ _ _ _ _ _ "

Ask the user to supply one guess (i.e. letter) at a time, using a form. This form should be validated to make sure only 1 letter is sent. This letter can be upper or lower case and it should not matter. If a user enters more than one letter, tell them the input is invalid and let them try again.

Let the user know if their guess appears in the computer's word. You will have to store the user's guesses in the session.

Display the partially guessed word, as well as letters that have not been guessed. For example, if the word is BOMBARD and the letters guessed are a, b, and d, the screen should display:

B _ _ B A _ D

A user is allowed 8 guesses. Remind the user of how many guesses they have left after each round. The guesses they have left will be determined by what you have in the session.

A user loses a guess only when they guess incorrectly. If they guess a letter that is in the computer's word, they do not lose a guess.

If the user guesses the same letter twice, do not take away a guess. Instead, display a message letting them know they've already guessed that letter and ask them to try again.

The game should end when the user constructs the full word or runs out of guesses. If the player runs out of guesses, reveal the word to the user when the game ends.

When a game ends, ask the user if they want to play again. The game begins again if they reply positively.

**Mockups**

You do not have to use these mockups. They are only a suggested way to lay out your application. Using them can let you focus on the programming parts of this assignments without worrying about layout, however.

The game at the start:

![First](/public/images/mockup/02abe9b4-start.png)

Mid-game:

![Second](/public/images/mockup/a307cd99-midgame.png)

At the end of the game:

![Third](/public/images/mockup/0026d5d2-endgame.png)

**Hard Mode**

* Let the user choose a level of difficulty at the beginning of the program. Easy mode only has words of 4-6 characters; normal mode only has words of 6-8 characters; hard mode only has words of 8+ characters.

* If a user wins, ask for their name and create a page that shows all the winners so far.

* If a user wins, ask for their name and optionally an image to upload. Show their image on the winners page.

=====================
Revisit this assignment after the class is over. Make the following changes:

1. Check to see if the guessed letter is in fact a letter. If not post the statment: "your guess was not a letter. Please guess a letter." And do not deduct from the 8 incorrect guesses.

2. Add styling.

3. 

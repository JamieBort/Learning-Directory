from: https://newline.theironyard.com/cohorts/15/courses/7/projects/71

**Assignment**

Model a game piece:

* In the src directory create a GamePiece Java class
* Add the following required instance variables
  * int positionX
  * int positionY
  * boolean frozen

* Add a couple String instance variables (e.g. name, color)
* Add an empty constructor (no parameters). (IntelliJ can generate these for you)
* In the constructor set the position variables to zero and frozen to false.
* Add get and set methods for the other variables (IntelliJ can generate these for you)

Add some behavior to the game piece:

* Add a move() method (returns void) that takes a new x and y position. Set the instance variables to the parameters.
* Add a freeze() method (returns void) and set frozen to true
* Add a unfreeze() method (returns void) and set frozen to false
* Change move() so that that when frozen the piece does not move

Test the freeze, unfreeze and move methods in the public static void main(String[] args) method of Main.java.

* Create a GamePiece object.
* Only call the methods on the object, do not access the instance variables directly.
* Verify that if the game piece is not frozen then the call to freeze sets the frozen varable to true.
* Verify that if the game piece is frozen then the call to unfreeze sets the frozen varable to false.
* Verify that if the game piece is not frozen then the call to move results in the new position.
* Verify that if the game piece is frozen then the call to move does not change the position.

**Extras**

Use the [Random.nextInt](https://docs.oracle.com/javase/8/docs/api/java/util/Random.html#nextInt-int-) method to randomly get values for x and y when calling move.

**More Extras**

Add four instance variables (minX, maxX, minY, maxY) to define the bounds of a grid confining the game piece (e.g. x is bounded by zero and 100 and y is bounded by zero and 500). Set the values in the constructor. Add getter methods.

Refactor the move() method to not allow the game piece to move outside the grid (move the piece to the border of the grid but not beyond).

Test the movement in the main method of Main.java.

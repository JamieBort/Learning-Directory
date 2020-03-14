from: https://newline.theironyard.com/cohorts/15/courses/7/activities/202

**Activity: Smartphone Interfaces - Pair Programming**

You've just spent some time learning about interfaces. For this assignment, you will create a class and implement several interfaces. If you're having trouble thinking of an example, consider using a smartphone with interfaces like Camera, and AudioPlayer, or TextMessaging. Pair up with a partner and execute the following:

* Create your base class and a Runner class
* Implement at least three interfaces for your class. See "Defining Interfaces" below
* Each interface you create should include at least three methods
* Define each those methods in your base class
* Test through the Runner class

**Definining Interfaces**

Your class (Smartphone, for example) must implement three interfaces. One of those will be Comparable. You get to decide how your class is compared, and what against. Refer back to the lecture if you are unsure.

The other two interfaces you implement should be ones that you define yourself (AudioPlayer, TextMessaging, etc. if you chose something like Smartphone).

**Implementing Methods**

When you go to implement methods, you should feel free to have them just produce "sound effects". For example:

public void playMusic() {
  System.out.println("Doot dah doot");
}

Make sure at least a few methods interact with the class variables:

public void takePicture() {
  totalPictures += 1;
  System.out.println("Shutter sound"); //Optional
}

**Getting Started**

Open up a new IntelliJ project and create your base class. Then, design the interfaces.

**Your role as a student**

Articulate their ideas as best you can. Try to facilitate effective collaboration with your paired student. Be willing to debate strategies for how best to approach your challenge, but don’t allow endless debate to keep you from making progress. Keep your eye on the clock and try to work yourself through the challenge at a reasonable pace. You and your partner should share the responsibility for authoring ideas and code. Finish your challenge and make certain that you call talk someone through the logic and strategies implemented by your group.
from: https://newline.theironyard.com/cohorts/15/courses/7/activities/194

Activity: Backpack Class Variables - Pair Programming

For this assignment you will be writing a Backpack class, which will contain a list of "items". It can contain any type of item (represented as a String) but certain items (namely "Pen", "Pencil" and "Folder") are considered "tracked". This means that we want to have class variables to keep track of the total quantity of these items across all backpacks. The Backpack class will keep a list of all the tracked types (for now, just the three above).

All of Backpack's variables and methods must be private except for getter methods, the constructor, and the addItem(String item) method.

Add a main() method to create at least two backpacks, add several items, and print out accurate counts of the total number of each tracked item.

**Getting Started**

Open up a new IntelliJ project. Start by defining the Backpack class (feel free to give it your own name as long as it is containerish).

**Extras**

Add a removeItem(String item) to your Backpack class that will update the "tracked" item counts properly.

**Super Triple Difficult Epic Mode Extra++**

Rewrite the backpack class to support dynamic tracking of different types of objects. So for example, you would need to add a Backpack class function to addTrackedType(String type). So I could call addTrackedType("Apple") to see how many apples are in all backpacks. You will need to use a Map<String, Integer> to accomplish this. Good luck - don't get bogged down in this!

**Your role as a student**

Articulate their ideas as best you can. Try to facilitate effective collaboration with your paired student. Be willing to debate strategies for how best to approach your challenge, but don’t allow endless debate to keep you from making progress. Keep your eye on the clock and try to work yourself through the challenge at a reasonable pace. You and your partner should share the responsibility for authoring ideas and code. Finish your challenge and make certain that you call talk someone through the logic and strategies implemented by your group.
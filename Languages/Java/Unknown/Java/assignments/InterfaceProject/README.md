from: https://newline.theironyard.com/cohorts/15/courses/7/projects/81

**Interface Project**

Form contractual behavior by implementing interfaces.

For this activity you will be creating, extending and implementing interfaces.

**Getting Started**

Open up a new project in IntelliJ.

**Assignment**

Imagine that you are coding the base code for a gaming software company. The Java library you create will be used by other developers to use your framework that their games will run on.

You are tasked with writing the code for the mindless (and under appreciated) common soldiers.

Write an abstract Soldier class with a few instance variables (e.g. name, rank, serialNumber). Write a few common methods for the behavior (e.g. sleep, eat, walk) and just return a String for something meaning (e.g. "snore", "chew", "trudge").

Write an abstract method speak which returns a String. Each class that extends the FootSoldier class will have to implement the method (e.g. Marines could return "oohrah", Army could return "Hooah", Navy could return "Hooyah", ...). All of the methods you're writing will work this way; you can think of them as sound effects (punch => "Blamo!" or whatever you pick).

The way the soldier fights is by implementing interfaces. Create a couple different interfaces with appropriate methods for different kind of fighting. Have the methods return String.

Of course you have to test your code. Create a couple classes that extend Soldier and implement one or more interfaces. When implementing methods return something appropriate for the method. In the main method of Main call the methods all the method of the Soldier class and the interface(s). Simply write to the console the Strings that are returned.

Note that you can use IntelliJ to generate the interface methods in a class that implements an interface.

**Extend an Interface**

As the software matures interfaces will probably need to change. One way to add methods to an interface is to extend it. Write an interface that extends one of the existing interfaces and add a method to it. Have the method return a new Bomb class (the Bomb class should have a toString method).

In main create a class that extends Soldier and implements the new interface. Call the method that returns a Bomb and write the console the String return by the toString method.

**Default Methods**

Your company is now working on "Version 3.0" of the game framework. What you really want to do in version 3.0 of your software is add a new method to an existing interface. The problem is that you cannot do this because you would be breaking the code of all the companies that use your software until they implement the new method(s).

What you decide to do in version 3.0 is to introduce a default method in the interface. A default method has the keyword default at the beginning and a method body.

Go ahead and introduce a default method in an interface. Your main method should run fine without any changes. Now call the method on a class that implements the interface.

Go ahead and override the default method in a class that implements the interface. Call the method in main.

You can find more information about default methods in interfaces here if you are having difficulty.

**Extras**

Create two new interfaces such that each defines the identical method. Create a new class that extends Soldier and implements these interfaces. This is allowed.

Now add another identical method except the return types are different. Uh oh, this is not allowed. Comment out the two new methods.

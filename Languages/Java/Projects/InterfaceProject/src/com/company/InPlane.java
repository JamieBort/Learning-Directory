package com.company;

public interface InPlane {
    //    The way the soldier fights is by implementing interfaces. Create a couple different interfaces with appropriate methods for different kind of fighting. Have the methods return String.

    public String Bomb();

    public String Shoot();

//  Your company is now working on "Version 3.0" of the game framework. What you really want to do in version 3.0 of your software is add a new method to an existing interface. The problem is that you cannot do this because you would be breaking the code of all the companies that use your software until they implement the new method(s).

//  What you decide to do in version 3.0 is to introduce a default method in the interface. A default method has the keyword default at the beginning and a method body.

//  Go ahead and introduce a default method in an interface. Your main method should run fine without any changes.

    default public void newDefaultMethod() {
        System.out.println("New default metho is added in interface");
    }

}

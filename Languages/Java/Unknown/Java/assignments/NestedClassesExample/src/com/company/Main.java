package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here

        /*
            Create a new instance of the Outer class. This class also defines
            a private inner class (Inner) and a static nested class
            (StaticNested).
         */
        Outer outer = new Outer();

        /*
            Run the doSomething() method to demonstrate how inner and static
            nested classes relate to the outer class.
         */
        outer.doSomething();

    }
}

package com.company;

/**
 * This is a contrived class that demonstrates how inner and static nested
 * classes relate to their outer class.
 */
public class Outer {

    /*
        This is a static variable. It doesn't belong to any instance of the
        Outer class. The StaticNested class can access this because this class
        is, itself, static. the Inner class can access this because it has
        access to the private properties of the Outer class.
     */
    private static int INDEX;

    /*
        This is a normal instance variable. Note that the Inner class can access
        this property, even though it's private. However, the StaticNested class
        can't access this property because the StaticNested class is static and
        non-static properties and methods can't be accessed from a static
        context.
     */
    private int count;

    /**
     * This is the constructor for the Outer class. It sets the Outer class's
     * count property to 1, but it doesn't set the INDEX. Since INDEX is an int
     * it defaults to 0;
     */
    public Outer() {
        // default count to 1
        this.count = 1;
    }

    /**
     * The doSomething() method creates new instances of the Inner and
     * StaticNested classes. Both of these classes' constructors have code to
     * change properties of Outer. The are print statements show the state of
     * Outer before and after each new instance is created.
     */
    public void doSomething() {
        /*
            Print the initial state of this Outer instance.

            Note that before we create a new Inner() the count is 1. This is set
            in the Outer class' constructor. INDEX is 0 because it is a
            primitive and it's value has not yet been set by anything.
         */
        System.out.println("Before new Inner(): count=" + count + " and INDEX=" + INDEX);

        /*
            Create a new instance of the Inner class. Note that the Inner class
            does not define a property for count, but it can still set count=2.
            This is because inner classes have access to the outer class'
            private properties and methods.
         */
        Inner inner = new Inner();

        /*
            Print the current state of this Outer instance.

            Because the Inner() constructor sets count to 2, the Outer class
            instance's count property is now set to 2.

         */
        System.out.println("After new Inner(): count=" + count + " and INDEX=" + INDEX);

        /*
            Create a new instance of the static nested class, StaticNested.
            Because StaticNested is static it does not have access to non-static
            properties of the Outer class instance. It can, however, access and
            modify non-final static properties of the Outer class.
         */
        StaticNested staticNested = new StaticNested();

        /*
            Print the current state of this Outer instance.

            Because the StaticNested class changes the value of INDEX, the Outer
            class static INDEX property is now set to 4.
         */
        System.out.println("After new StaticNested(): count=" + count + " and INDEX=" + INDEX);
    }

    /**
     * This is an example of an Inner class. Inner classes are defined within
     * the body of an "outer" class and have access to the outer class's private
     * data.
     */
    private class Inner {
        /**
         * This is the constructor for the Inner class. When invoked it sets
         * count = 2. Note that the Inner class doesn't define a property or
         * variable named count. What it's setting is the count property of the
         * Outer class.
         */
        Inner() {
            // Set the Outer class's count property to 2.
            count = 2;
        }
    }

    /**
     * The StaticNested class is an example of a static nested class. As with
     * inner classes, static nested classes are defined inside an Outer class.
     */
    private static class StaticNested {
        StaticNested() {
            // we can't access count from a static context
            // count = 123;

            // note that this class doesn't define INDEX, Outer does.
            INDEX = 4;
        }
    }


}
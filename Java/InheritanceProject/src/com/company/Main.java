package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here

        EmailNotification emailNotification = new EmailNotification( "Touching base",  "It's been a while since we last takled.","Jim", "t-mobile");
        TextNotification textNotification = new TextNotification( "Where have you been?",  "Please text us back.", "Bob", "at&t");

//        In the main method of Main.java create an EmailNotification and a TextNotification object and call the transport() method.
        emailNotification.transport();
        textNotification.transport();

        emailNotification.toPrint();

//        In Main call the clone method on the instance of the EmailNotification and save the new instance in a variable as follows: Object emailNotificationClone = emailNotification.clone();

        Object emailNotificationClone = emailNotification.clone();

//        Now in main check of the clone and the original instance are equal by calling the equals() method on one and passing the other as an argument.

        emailNotificationClone.equals(emailNotification);

        System.out.println(emailNotificationClone.equals(emailNotification));

    }
}

//To be done at a later date:

// Change the transport() method in Notification to public abstract void transport();
// The purpose of making this method abstract is that the subclasses have to implement it.
// Oh by the way you will now also have to change the class declaration to public abstract class Notification
// If a class has at least one abstract method the class must be declared abstract as well.

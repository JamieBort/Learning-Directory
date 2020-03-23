The following is the assingment from: https://newline.theironyard.com/cohorts/15/courses/7/projects/67

**Inheritance Project**

Use inheritance to transport a notification via different protocols.



For this activity you will be creating a Notification class which will be extended by classes that know how to send the notification.

**Getting Started**

Open up a new project in IntelliJ.

**Assignment**

NoTransportException class

Create a NoTransportException class that extends RuntimeException. This class will be thrown in the Notification class.

Notification class

Create a Notification class with the following instance variables

* private LocalDateTime createdAt
* private String subject;
* private String body;

The Notification constructor takes the subject and body as parameters and sets the instance variables (use IntelliJ to generate the constructor and pick subject and body).

In the body of the constructor set the createdAt variable to be the current time (i.e. LocalDateTime.now()).

Do not have an empty constructor.

Provide getter methods for all the instance variables.

In the Notification class, add a public transport method that has a void return type, has no parameters and throws a NoTransportException. The purpose of this method is to be overridden by a subclass that has a transport mechanism.

**EmailNotification class**

Create an EmailNotification class that extends the Notification class. The instance variables are:

* private String recipient
* private String smtpProvider

Food for thought: The compiler will complain about the fact that there is no default constructor in Notification. Can you answer why this is happening? What constructor is there in the EmailNotification class? Think about this for a few minutes, write down any explaination you come up with on a piece of paper or electronically and move on.

The EmailNotification constructor has to set not only its instance variables but also the instance variables in the constructor of the Notification class. See what happens when you let IntelliJ generate the constructor and pick both variables in the EmailNotification class in the constructor pop-up dialog.

Provide getter methods for the instance variables.

Override the transport() method. Again you can let IntelliJ generate the overridden method (notice that IntelliJ adds the @Override annotation. This annotation is used by the compiler to make sure the method has the correct signature to override a method of one of its ancestors).

If you let IntelliJ override the method replace the call to super.tranport() with code that simply writes to the console the values of all the instance variables in EmailNotification and all the variable in Notification (use the getters provided by Notification to get subject, body and createdAt).

**TextNotification class**

Create an TextNotification class that extends the Notification class. The instance variables are:

* private String recipient
* private String smsProvider

The same instructions for the construct and overriding transport() for EmailNotification apply to TextNotification.

**Main class**

In the main method of Main.java create an EmailNotification and a TextNotification object and call the transport() method.

**Protected Variable**

As we've seen the subclasses do not have direct access to the private variables (createdAt, subject and body) in the Notification super class. The protected keyword for a variable will give the subclass access to the variable.

* Add a protected instance variable (e.g. String status) to the Notification class and give it a default value.
* Add a public method that prints out (System.out.println) the protected variable (e.g. showStatus())
* Set the protected variable in one of the subclasses but do not set it in the other. This shows that a subclass has direct access to the protected variable.
* Add a call to the method for EmailNotification and TextNotification in the main() method of Main.

**Protected Methods**

The protected keyword for a method will give the subclass access to the method.

Add a protected method to Notification that prints out some text.

A subclass can call the method in its constructor or in any instance method. Go ahead and give it a try in the constructor of TextNotification.

Run main and you will see the text from the method when the constructor of TextNotification is run.

In EmailNotification override the method AND make it public (again you can have IntelliJ generate it for you). When you override a method you can keep the visibility the same or make it more visible. The compiler will give an error if you make it less visible.

In the overridden method print out some more text after the original text from the method in Notification is printed out. DO NOT copy the text from the method in Notification into EmailNotification but instead call the method in Notification first and then print out some other text after the call returns.

In main call the method on the instance of EmailNotification.

**Other Methods to Override**

All object hierarchies have java.lang.Object as their parent.

Have IntelliJ generate equals() and hashCode() for you in EmailNotification (take all the defaults in the generation wizard).

IntelliJ will generate clone() for you but it does not really clone your object. Go ahead and have IntelliJ generate the clone() method in EmailNotification. Remove the call to super.clone() and replace it with code that actually makes a copy. Also remove the throws CloneNotSupportedException from the method signature.

In Main call the clone method on the instance of the EmailNotification and save the new instance in a variable as follows: Object emailNotificationClone = emailNotification.clone();

Now in main check of the clone and the original instance are equal by calling the equals() method on one and passing the other as an argument.

**Extras**

Change the transport() method in Notification to public abstract void transport();

The purpose of making this method abstract is that the subclasses have to implement it.

Oh by the way you will now also have to change the class declaration to public abstract class Notification

If a class has at least one abstract method the class must be declared abstract as well.

Run main.
from: https://newline.theironyard.com/cohorts/15/courses/7/activities/193

**Activity: Fun With Exceptions - Pair Programming**

Below you will find three functions whose logic has already been written. Your assignment is to make these three functions "safe" using your new exception handling skills.

* For divideInts() your program should recover even if we try to divide by zero (hint: there is already an Exception in Java associated with this behavior). Print the exception.
* For getSafeInt() the method should always return an int. If the user enters something else, the function should call itself again.
* For sumOfNumbers() the method should throw an exception with an explanatory String message up if the array is NOT of the length specified (note that it doesn't really make sense to pass in the length of an array since we can always find this out for ourselves). The exception thrown should be one that you define. Print the exception and its message.

To print the exception you can do something like this:

    try {
    //Code that throws a BlargException
    } catch (BlargException ex) {
      System.out.println("A BlargException was caught");
    }


Next, in the main() function, call each of your three functions. You should test them with inputs that you don't expect to throw an exception and with inputs you DO expect to throw an exception. Use try/catch to recover from all exceptions that are thrown. Leave the println() in main() as the last line and use it to make sure all exceptions were caught.

**Getting Started**  

Copy the class below into a new IntelliJ project.



    import java.util.Scanner;
    public class ExceptionRunner {
    public static void main(String[] args) {
        System.out.println("\n****\nI'm done!!!\n****\n");
    }

    public static int divideInts (int a, int b) {
        return a/b;
    }

    public static int getSafeInt () {
        return Integer.parseInt(new Scanner(System.in).nextLine());
    }

    public static int sumOfNumbers (int[] numbers, int length) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
}

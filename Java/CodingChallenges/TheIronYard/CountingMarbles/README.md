# CountingMarbles

## Status
Completed with attempt02.

from: https://newline.theironyard.com/cohorts/15/courses/7/activities/195

**Activity: Counting Marbles - Pair Programming**

For this assignment you will be creating a MarbleBag class. It will track the number of red, green, and blue marbles. You will need to add three methods:

* getTotalNumberOfMarbles() which returns the total
* printInfo() which prints each variable and the total number of marbles
* removeAllGreenMarbles()

You will also need to write a constructor which accepts three ints (note: the order matters here: RGB).

**Getting Started**  

Start a new IntelliJ project and copy the following main() method into a Runner class:



    public static void main(String[] args) {
        MarbleBag marbleBag = new MarbleBag(3, 1, 2);
        
        marbleBag.printInfo();

    marbleBag.numBlueMarbles = 5;

    if (marbleBag.getTotalNumberOfMarbles() == 9) {
        System.out.println("Total is 9, as expected");
    } else {
        System.out.println("PANIC!!!");
        throw new AssertionError(); //Crashes the program
    }

    marbleBag.removeAllGreenMarbles();

    if (marbleBag.getTotalNumberOfMarbles() == 8) {
        System.out.println("Total is 8, as expected");
    } else {
        System.out.println("Panic even more!!!");
        throw new AssertionError();
    }
    }


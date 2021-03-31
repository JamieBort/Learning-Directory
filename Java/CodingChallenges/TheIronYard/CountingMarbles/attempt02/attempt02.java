package attempt02;

public class attempt02 {
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
}
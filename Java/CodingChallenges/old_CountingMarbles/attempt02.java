public class attempt02 {

    public static void main(String[] args) {
        MarbleBag marbleBag = new MarbleBag(3, 1, 2);

        marbleBag.printInfo();

        marbleBag.numBlueMarbles = 5;

        // if (marbleBag.getTotalNumberOfMarbles() == 9) {
        //     System.out.println("Total is 9, as expected");
        // } else {
        //     System.out.println("PANIC!!!");
        //     throw new AssertionError(); // Crashes the program
        // }

        // marbleBag.removeAllGreenMarbles();

        // if (marbleBag.getTotalNumberOfMarbles() == 8) {
        //     System.out.println("Total is 8, as expected");
        // } else {
        //     System.out.println("Panic even more!!!");
        //     throw new AssertionError();
        // }

    }

    public class MarbleBag {

        int numRedMarbles;
        int numGreenMarbles;
        int numBlueMarbles;

        public MarbleBag(int numRedMarbles, int numGreenMarbles, int numBlueMarbles) {
            this.numRedMarbles = numGreenMarbles;
            this.numGreenMarbles = numGreenMarbles;
            this.numBlueMarbles = numBlueMarbles;
        }

        public void printInfo(){
            System.out.print("the number of red marbles");
        }

        // printinfo method printInfo() which prints each variable and the total number
        // of marbles
        // getTotalNumberOfMarbles method
        // removeAllGreenMarbles method
        // getTotalNumberOfMarbles method
    }

    // public static void main(String[] args) {
    // // twoSum [1, 2, 3] 4 === (0, 2)

    // twoSum(new int[]{1,2,3}, 4); // (0, 2)

    // }

    // public static void MarbleBag(int[] numbers, int target)
    // {
    // int[] a = new int[]{0,2};
    // // System.out.println(a);
    // System.out.println("a");
    // return a;
    // // return null; // Do your magic!
    // }
}
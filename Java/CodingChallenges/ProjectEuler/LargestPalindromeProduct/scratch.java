// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
public class scratch {
    public static void main(String[] args) {
        int integer = 0;
        // int theLength = 3;
        // int theLength = 4;
        // int theLength = 5;
        int theLength = 6;

        while (integer<=theLength/2) {
            System.out.println(integer);
            System.out.println(theLength - integer);
            System.out.println("=======");
            integer++;
            // theLength--;
        }

    }
}
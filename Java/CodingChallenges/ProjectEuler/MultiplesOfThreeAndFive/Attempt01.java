import java.util.stream.IntStream;

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
public class Attempt01 {
    public static void main(String[] args) {
        int[] MultiplesOf3And5Through10;
        int count = 10;
        for (int i = 1; i < count + 1; i++) { // want multipls of 3 and 5.
            if (3%i==0) {
                System.out.println(i);
            }
        }

        // int[] b = new int[]{3,5,6,9};
        // int sumb = IntStream.of(b).sum();
        // System.out.println("The sum is " + sumb);

        // twoSum(new int[]{1,2,3}, 4); // (0, 2)

    }

    public static void twoSum(int[] numbers, int target) {
        int[] a = new int[] { 0, 2 };
        System.out.println("a");
    }
}
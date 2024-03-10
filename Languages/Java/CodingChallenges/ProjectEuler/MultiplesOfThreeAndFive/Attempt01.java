// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
public class Attempt01 {
    public static void main(String[] args) {
        int total = 0;
        int count10 = 10;
        int count1000 = 1000;
        // int count = count10;
        int count = count1000;
        for (int i = 1; i < count; i++) { // want multipls of 3 and 5.
            if (i%3==0 || i%5==0) {
                // System.out.println(i);
                total += i;
            }
        }
        System.out.println(total);
    }
}
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
import java.util.Arrays;
public class Attempt02 {
    public static void main(String[] args) {
        int k = 99;
        // int k = 999;
        int[] holder = new int[k*k];
        // String[] holder = new String[k*k];

        for (int i = k; i > 0; i--) {
            for (int j = k; j > 0; j--) {
                int integer = 0;
                String str = String.valueOf(j * i);
                int theLength = str.length();
                // System.out.println(str);
                
                while (integer <= theLength / 2) {
                    if (str.charAt(integer) == str.charAt(theLength - integer - 1)) {
                        // System.out.println("integer: " + integer + " and str.charAt(integer): " +
                        // str.charAt(integer));
                        // System.out.println("integer: " + integer + " and str.charAt(theLength -
                        // integer - 1): "
                        // + str.charAt(theLength - integer - 1));
                        // System.out.println("=======");
                System.out.println(str);
                        holder[integer] = Integer.parseInt(str);
                    }
                    integer++;
                }
            }
        }
        int max = Arrays.stream(holder).max().getAsInt();
        System.out.println("Max = " + max);


        // int[] tab = {12, 1, 21, 8};
        // int max2 = Arrays.stream(tab).max().getAsInt();
        // System.out.println("Max = " + max2);


        // System.out.println("the array:");
        // for (int i = 0; i < holder.length; i++) {
        //     if(i!= null){
        //         System.out.println(holder[i]);}
        // }
        // System.out.println(holder[0]);
        // System.out.println(holder[1]);
    }
}
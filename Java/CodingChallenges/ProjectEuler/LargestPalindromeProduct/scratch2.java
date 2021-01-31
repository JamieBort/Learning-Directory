import java.util.Arrays;
import java.util.Collections;
import java.util.List;

// import org.apache.commons.lang.ArrayUtils;

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
public class scratch2 {
    public static void main(String[] args) {

        int[] tab = {12, 1, 21, 8};
        int min = Arrays.stream(tab).min().getAsInt();
        int max = Arrays.stream(tab).max().getAsInt();
        System.out.println("Min = " + min);
        System.out.println("Max = " + max);

        // char[] a = {'3', '5', '1', '4', '2'};
        // List b = Arrays.asList(ArrayUtils.toObject(a));
        // System.out.println(Collections.min(b));
        // System.out.println(Collections.max(b));

    }
}
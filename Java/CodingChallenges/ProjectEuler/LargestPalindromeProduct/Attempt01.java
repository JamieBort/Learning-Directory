// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
public class Attempt01 {
    public static void main(String[] args) {
        int k = 99;
        // int k = 999;
        for (int i = k; i > 90; i--) {
            for (int j = k; j > 98; j--) {
                // int product = j * i;
                // String str = String.valueOf(product);
                String str = String.valueOf(j * i);
                // System.out.println(j + "*" + i + "=\n" + product);
                // System.out.println(j + "*" + i + "=\n" + str);
                System.out.println(str);
                // if (product == 9009) {
                // int l = 0;
                // System.out.println(str.length());
                if (str.charAt(3) == str.charAt(0)) {
                    System.out.println("YES");
                }
                // }
            }
        }

        // String str = "9009";
        // System.out.println(str);
        // System.out.println(str.charAt(0));
        // System.out.println(str.charAt(3));
        // if (str.charAt(3) == str.charAt(0)) {
        // System.out.println("YES");
        // }

        // int x = Integer.parseInt("9");
        // double c = Double.parseDouble("5");
        // int b = Integer.parseInt("444", 16);

        // System.out.println(x);
        // System.out.println(c);
        // System.out.println(b);

    }
}
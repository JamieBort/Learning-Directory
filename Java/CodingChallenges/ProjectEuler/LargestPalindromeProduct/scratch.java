// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
public class scratch {
    public static void main(String[] args) {
        int l = 0;
        String m = "9009";
        int count = m.length();
        while (count > m.length() / 2) {
            if (m.charAt(l) == m.charAt(m.length() - 1 - l)) {
                System.out.println(m.charAt(l));
                System.out.println(m.charAt(m.length() - 1));
                l++;
            } else {
                System.out.println("return");
            }
            count--;
        }

    }
}
public class scratch {
    public static void main(String[] args) throws Exception {
        my_test(":-)", ":-("); // returns false
        String a = ":-)";
        String b = ":-("; 
        // System.out.println(a);
        // System.out.println(b);
        // System.out.println(a.substring(2));
        // System.out.println(b.substring(2));
        // System.out.println(b.substring(2).equals(a.substring(2)));
        // System.out.println(str.substring(str_i - 1, str_i).equals(ending.substring(ending_j - 1, ending_j)));
    }

    static boolean my_test(String str, String ending) {
        boolean status = false;
        int str_i = str.length();
        int ending_j = ending.length();
        try {
            if (str_i < ending_j) {
                System.out.println("false");
                return false;
            }
            if (ending == "") {
                System.out.println("true");
                return true;
            }
            while (ending_j > 0) {
                if (str.substring(str_i - 1, str_i).equals(ending.substring(ending_j - 1, ending_j))) {
                    status = true;
                } else {
                    // status = false;
                System.out.println("false");
                    return false;
                }
                ending_j--;
                str_i--;
            }
        } catch (StringIndexOutOfBoundsException e) {
            System.out.println("Exception occurred . . . . . . . . ");
        }

        System.out.println(status);
        return status;
    }
}
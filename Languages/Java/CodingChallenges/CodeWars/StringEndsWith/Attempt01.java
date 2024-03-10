// Might end up using this:
// String upToNCharacters = s.substring(0, Math.min(s.length(), n));
// from: 
// https://stackoverflow.com/a/1583968/8210460
// and
// org.apache.commons.lang.StringUtils.substring(String s, int start, int len)

// This might be helpful too:
// https://stackoverflow.com/a/513839/8210460

public class Attempt01 {
    public static void main(String[] args) throws Exception {
        // my_test("abc", "bc"); // returns true
        // my_test("abc", "d"); // returns false
        // my_test("samurai", "ra"); // returns false
        my_test("sumo", "omo"); // returns false
        // my_test("expected", "actual");
    }

    // this works except I'm getting an java.lang.StringIndexOutOfBoundsException: error.
    static boolean my_test(String str, String ending) {
        boolean status = false;

        // int i = 0;
        // int j = 0;
        int str_i = str.length();
        int ending_j = ending.length();
        // System.out.println("the lenght of str: " + str_i);
        // System.out.println("the lenght of ending: " + ending_j);

        // we need to check letter by letter for the length of "ending".
        while (ending_j > 0) {
            if (str.substring(str_i - 1, str_i).equals(ending.substring(ending_j - 1, ending_j))) {
                // System.out.println("they're equal");
                status = true;
            } else {
                status = false;
            }
            // System.out.println(ending_j);
            ending_j--;
            str_i--;
        }

        System.out.println(status);
        return status;
    }
}
public class Attempt01 {
    public static void main(String[] args) throws Exception {
        solve("11000"); // Output/expected: 1
    }

    public static int solve(String s) {
        int length=s.length();



        check(s.charAt(0),s.charAt(1));
        return length;
    }

    public static void check(char int1, char int2){
        System.out.println("first: "+int1);
        System.out.println("second: "+ int2);
    }
}
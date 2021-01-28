public class scratch01 {
    public static void main(String[] args) throws Exception {
        String line01 = "37107287533902102798797998220837590246510135740250";
        String line02 = "46376937677490009712648124896970078050417018260538";

        // String upToNCharacters = s.substring(0, Math.min(s.length(), n));
        String upTo3Characters01 = line01.substring(0, Math.min(line01.length(), 2));
        String upTo3Characters02 = line02.substring(0, Math.min(line02.length(), 2));


        // System.out.println(upTo3Characters01);
        // System.out.println(upTo3Characters02);
        // System.out.println(upTo3Characters01 + upTo3Characters02);

        // Integer.parseInt(a) + Integer.parseInt(b)

        String first = "3";
        String second = "5";
        // System.out.println(first+second);

        int a =         Integer.parseInt(upTo3Characters01);
        int b =         Integer.parseInt(upTo3Characters02);
        System.out.println(a);
        System.out.println(b);
        System.out.println(a+b);

    }
}
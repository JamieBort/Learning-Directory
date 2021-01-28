public class Attempt02 {
    public static void main(String[] args) throws Exception {
        int total=0;
        String line01 = "37107287533902102798797998220837590246510135740250";
        String line02 = "46376937677490009712648124896970078050417018260538";
        String line03 = "74324986199524741059474233309513058123726617309629";
        String line04 = "91942213363574161572522430563301811072406154908250";
        String line05 = "23067588207539346171171980310421047513778063246676";

        String upTo06_10Characters01 = line01.substring(5, Math.min(line01.length(), 10));
        String upTo06_10Characters02 = line02.substring(5, Math.min(line02.length(), 10));
        String upTo06_10Characters03 = line03.substring(5, Math.min(line03.length(), 10));
        String upTo06_10Characters04 = line04.substring(5, Math.min(line04.length(), 10));
        String upTo06_10Characters05 = line05.substring(5, Math.min(line05.length(), 10));
        
        int upTo06_10Integer01 = Integer.parseInt(upTo06_10Characters01);
        int upTo06_10Integer02 = Integer.parseInt(upTo06_10Characters02);
        int upTo06_10Integer03 = Integer.parseInt(upTo06_10Characters03);
        int upTo06_10Integer04 = Integer.parseInt(upTo06_10Characters04);
        int upTo06_10Integer05 = Integer.parseInt(upTo06_10Characters05);

        total += upTo06_10Integer01;
        total += upTo06_10Integer02;
        total += upTo06_10Integer03;
        total += upTo06_10Integer04;
        total += upTo06_10Integer05;
           
        // System.out.println(total);



        String upTo01_05Characters01 = line01.substring(0, Math.min(line01.length(), 5));
        String upTo01_05Characters02 = line02.substring(0, Math.min(line02.length(), 5));
        String upTo01_05Characters03 = line03.substring(0, Math.min(line03.length(), 5));
        String upTo01_05Characters04 = line04.substring(0, Math.min(line04.length(), 5));
        String upTo01_05Characters05 = line05.substring(0, Math.min(line05.length(), 5));

        int upTo01_05Integer01 = Integer.parseInt(upTo01_05Characters01);
        int upTo01_05Integer02 = Integer.parseInt(upTo01_05Characters02);
        int upTo01_05Integer03 = Integer.parseInt(upTo01_05Characters03);
        int upTo01_05Integer04 = Integer.parseInt(upTo01_05Characters04);
        int upTo01_05Integer05 = Integer.parseInt(upTo01_05Characters05);

        total += upTo01_05Integer01;
        // total += upTo01_05Integer02;
        // total += upTo01_05Integer03;
        // total += upTo01_05Integer04;
        // total += upTo01_05Integer05;

        System.out.println(total);

        System.out.println("================");

        // String first10 = line01.substring(0, Math.min(line01.length(), 10));
        // System.out.println(first10);
    }
}
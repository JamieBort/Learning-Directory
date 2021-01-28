public class Attempt03 {
    public static void main(String[] args) throws Exception {

        // 37107287533902102798797998220837590246510135740250 // 37107 // 28753
        // 46376937677490009712648124896970078050417018260538 // 46376 // 93767
        // 74324986199524741059474233309513058123726617309629 // 74324 // 98619
        // 91942213363574161572522430563301811072406154908250 // 91942 // 21336
        // 23067588207539346171171980310421047513778063246676 // 23067 // 58820

        String str = "3710728753390210279879799822083759024651013574025046376937677490009712648124896970078050417018260538743249861995247410594742333095130581237266173096299194221336357416157252243056330181107240615490825023067588207539346171171980310421047513778063246676";
        int total = 0;
        // 0-210
        String parsed_string01 = str.substring(5, Math.min(str.length(), 10));
        String parsed_string02 = str.substring(55, Math.min(str.length(), 60));
        String parsed_string03 = str.substring(105, Math.min(str.length(), 110));
        String parsed_string04 = str.substring(155, Math.min(str.length(), 160));
        String parsed_string05 = str.substring(205, Math.min(str.length(), 210));

        // 0-205
        String parsed_string06 = str.substring(0, Math.min(str.length(), 5));
        String parsed_string07 = str.substring(50, Math.min(str.length(), 55));
        String parsed_string08 = str.substring(100, Math.min(str.length(), 105));
        String parsed_string09 = str.substring(150, Math.min(str.length(), 155));
        String parsed_string10 = str.substring(200, Math.min(str.length(), 205));

        int int01 = Integer.parseInt(parsed_string01);
        int int02 = Integer.parseInt(parsed_string02);
        int int03 = Integer.parseInt(parsed_string03);
        int int04 = Integer.parseInt(parsed_string04);
        int int05 = Integer.parseInt(parsed_string05);
        int int06 = Integer.parseInt(parsed_string06);
        int int07 = Integer.parseInt(parsed_string07);
        int int08 = Integer.parseInt(parsed_string08);
        int int09 = Integer.parseInt(parsed_string09);
        int int10 = Integer.parseInt(parsed_string10);

        total += int01;
        total += int02;
        total += int03;
        total += int04;
        total += int05;
        total += int06;
        total += int07;
        total += int08;
        total += int09;
        total += int10;

        // System.out.println(int01);
        // System.out.println(int02);
        // System.out.println(int03);
        // System.out.println(int04);
        // System.out.println(int05);
        // System.out.println(int06);
        // System.out.println(int07);
        // System.out.println(int08);
        // System.out.println(int09);
        // System.out.println(int10);

        System.out.println(total);
    }
}
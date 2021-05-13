package Section05ControlFlowStatements;

public class Section05Methods {

    public void The_Switch_Statement_Challenge_Exercise_63(){
        System.out.println("inside insdie");
        The_Switch_Statement_Challenge_Exercise_63 example01 = new The_Switch_Statement_Challenge_Exercise_63();
        example01.switchValue(1);
        example01.switchValue(4);
        example01.switchValue(9);
    }

    public void Coding_Exercise_16_First_And_Last_Digit_Sum(){
        Coding_Exercise_16_First_And_Last_Digit_Sum sum = new Coding_Exercise_16_First_And_Last_Digit_Sum();
        // sum.sumFirstAndLastDigit(252); // 4
        // sum.sumFirstAndLastDigit(-2532); // 4
        // sum.sumFirstAndLastDigit(25982732); // 4
        // sum.sumFirstAndLastDigit(257); // 9
        // sum.sumFirstAndLastDigit(0); // 0
        sum.sumFirstAndLastDigit(5); // 0
    }

    public void Coding_Exercise_15_Number_Palindrome(){
        Coding_Exercise_15_Number_Palindrome palindrome = new Coding_Exercise_15_Number_Palindrome();
        // palindrome.isPalindrom(11212); // false
        // palindrome.isPalindrom(707); // true
        palindrome.isPalindrom(-1221); // true
        // palindrome.isPalindrom(13); // false
        // palindrome.isPalindrom(1331); // true
        // palindrome.isPalindrom(1324); // false
    }

    public void Coding_Exercise_27_Input_Calculator(){
        Coding_Exercise_27_Input_Calculator input_Calculator = new Coding_Exercise_27_Input_Calculator();
        input_Calculator.inputThenPrintSumAndAverage();
    }

}
package Section05ControlFlowStatements;

public class Coding_Exercise_15_Number_Palindrome {
    public boolean isPalindrom(int number) {
        number = Math.abs(number);
        int temp = number;
        boolean status = false;
        System.out.println("the original temp: " + temp);
        System.out.println("the original number: " + number);
        String stringOriginal = Integer.toString(number);
        System.out.println("the stringOriginal: " + stringOriginal);
        String builtString="";
        System.out.println("the builtString: " + builtString);
        while(temp >0 ){

            builtString += temp % 10;
            System.out.println("the builtString: " + builtString);
            temp = (temp - (temp % 10))/10;
            System.out.println("the new number: " + temp);
        }

        int newInt = Integer.parseInt(builtString);

        if(number==newInt){
            System.out.println("yes");
            status = true;
        } else {System.out.println("no");}

        System.out.println("the status: " + status);
        return status;
    }

}
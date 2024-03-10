package Section05ControlFlowStatements;

public class Coding_Exercise_16_First_And_Last_Digit_Sum {
    public int sumFirstAndLastDigit(int number) {
        int sum;
        System.out.println("Original number: " + number);
        if (number < 0) {
            sum = -1;
        } else {
            int tmp = number % 10;
            sum = tmp;
            number = (number - tmp) / 10;
            System.out.println("tmp: " + tmp);
            System.out.println("number: " + number);
            while (number > 0) {
                tmp = number % 10;
                number = (number - tmp) / 10;
                System.out.println("tmp: " + tmp);
                System.out.println("number: " + number);
            }
            sum += tmp;
        }
        System.out.println("sum: " + sum);
        return sum;
    }
}
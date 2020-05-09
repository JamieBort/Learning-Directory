package com.company;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number:");
        Double operand1 = Double.parseDouble(scanner.nextLine());
        System.out.print("Enter a different number:");
        Double operand2 = Double.parseDouble(scanner.nextLine());

        double sum = operand1+operand2;
        double difference = operand1-operand2;
        double division= operand1/operand2;
        double multiplication= operand1*operand2;
        double remainder = operand1%operand2; //modulo

        showResults(sum,  difference,  division,  multiplication,  remainder);
    }

    public static void showResults(double sum, double difference, double division, double product, double remainder) {
        // write your code here
        System.out.print("The sum is ");
        System.out.println(sum);
        System.out.print("The difference is ");
        System.out.println(difference);
        System.out.print("The division is ");
        System.out.println(division);
        System.out.print("The product is ");
        System.out.println(product);
        System.out.print("The remainder is ");
        System.out.println(remainder);
    }
}

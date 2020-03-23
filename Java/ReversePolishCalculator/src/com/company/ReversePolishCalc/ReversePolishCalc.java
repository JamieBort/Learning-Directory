package com.company.ReversePolishCalc;

public class ReversePolishCalc {

    // You'll need a variable here to keep track of the top of the stack

    // My comment: the data type may change to allow for the fact that it's either a number, mathematical operator, or array?
    int top;

    // The array of the input string split up
    // My comment: tokens is a variable and it is an array of strings.
    // My comment: This is the array that will receive the math problem.
    private String[] tokens;

    // The stack
// My comment: stack is a variable and it is an array of strings.
// My comment: This is the array that will receive the math solution.
    private String[] stack;

    public double calculate(String input) {

        // 1. Use the String split method to split the string into tokens at the commas
        // My comment: This method will parse the string by the commas.
        tokens = input.split(",");

        // 2. Allocate a stack as big as the number of tokens
        // My comment: stack is an array of strings. In order to allocate memory to it java requires 'new <data type>[<size of array>]
        stack = new String[tokens.length];

        // 3. write the algorithm
        for (int i = 0; i < tokens.length; ++i) {
            // calls to push() and pop() and do the math here
//            String single = tokens[i];
            if (tokens[i].equals("+")) {
//                perform addition
                double firstNumber = pop();
                double secondNumber = pop();
                double operation = firstNumber + secondNumber;
                push(operation);

            } else if (tokens[i].equals("-")) {
//                perform subtraction
                double firstNumber = pop();
                double secondNumber = pop();
                double operation = firstNumber - secondNumber;
                push(operation);

            } else if (tokens[i].equals("*")) {
//                perform multiplication
                double firstNumber = pop();
                double secondNumber = pop();
                double operation = firstNumber * secondNumber;
                push(operation);

            } else if (tokens[i].equals("/")) {
//                perform division
                double firstNumber = pop();
                double secondNumber = pop();
                double operation = firstNumber / secondNumber;
                push(operation);

            } else {
                push(tokens[i]);
            }
        }

        // 4. return the result
        return pop();
    }

    private void push(String number) {
        // push on the stack

        stack[top] = number;
        top++;
    }

    private void push(double d) {
        // change the double to a string and then push it on the stack

        String pushToString = String.valueOf(d);
        push(pushToString);
    }

    private double pop() {
        // remove the string from the top of the stack and convert it to a double and return it

        top -= 1;
        return Double.parseDouble(stack[top]);
    }

}

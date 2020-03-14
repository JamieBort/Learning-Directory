package com.ironyard;


public class ReversePolishCalc {

    private int top = 0;
    // The array of the input string split up
    private String[] tokens;
    // The stack
    private String[] stack;

    public double calculate(String input) {

        tokens = input.split(",");
        stack = new String[tokens.length];

        //for each token in the reversed prefix expression:
        for (int i = 0; i < tokens.length; ++i) {
            // if token is an operator:
            String token = tokens[i];
            if (token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/")) {
                //push token onto the operator stack
                double num1 = pop();
                double num2 = pop();
                if (token.equals("+")) {
                    push(num1 + num2);
                } else if (token.equals("*")) {
                    push(num1 * num2);
                } else if (token.equals("-")) {
                    push(num1 - num2);
                } else if (token.equals("/")) {
                    push(num1 / num2);
                }
            }
            // else if token is an operand:
            else {
                push(token);
            }
        }
        return pop();
    }


    private void push(String number) {
        stack[top] = number;
        top++;
    }

    private void push(double d) {
        String pushString = String.valueOf(d);
        push(pushString);
    }

    private double pop() {
        top -= 1;
        return Double.parseDouble(stack[top]);
    }
}


//        if pending_operand is True:
//        while the operand stack is not empty:
//        operand_1 ← pop from the operand stack
//        operator ← pop from the operator stack
//        operand ← evaluate operator with operand_1 and operand
//        push operand onto the operand stack
//        pending_operand ← True
//        result ← pop from the operand stack
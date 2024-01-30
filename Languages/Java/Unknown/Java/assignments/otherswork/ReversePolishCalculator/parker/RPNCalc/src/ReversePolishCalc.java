public class ReversePolishCalc {

    // You'll need a variable here to keep track of the top of the stack
    private int top = 0;
    // The array of the input string split up
    private String[] tokens;

    // The stack
    private String[] stack;

    public double calculate(String input) {

        // 1. Use the String split method to split the string into tokens at the commas
        tokens = input.split(",");

        // 2. Allocate a stack as big as the number of tokens
        stack = new String[tokens.length];

        // 3. write the algorithm
        for (int i = 0; i < tokens.length; ++i) {
            // calls to push() and pop() and do the math here
            String single = tokens[i];
            if (single.equals("+")) {
                double number2 = pop();
                double number1 = pop();
                double sum = (number1 + number2);
                push(sum);
            } else if (single.equals("-")) {
                double number2 = pop();
                double number1 = pop();
                double subtract = (number1 - number2);
                push(subtract);
            } else if (single.equals("/")) {
                double number2 = pop();
                double number1 = pop();
                double divide = (number1 / number2);
                push(divide);
            } else if (single.equals("*")) {
                double number2 = pop();
                double number1 = pop();
                double multiply = (number1 * number2);
                push(multiply);
            } else {
                push(single);
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
        String pushString = String.valueOf(d);
        push(pushString);

    }

    private double pop() {
        // remove the string from the top of the stack and convert it to a double and return it
        top -= 1;
        return Double.parseDouble(stack[top]);
    }
}

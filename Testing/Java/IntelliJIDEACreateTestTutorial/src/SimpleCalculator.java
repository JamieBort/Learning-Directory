//package com.javacodegeeks.intellij.test;

public class SimpleCalculator {

    /**
     * n1 + n2.
     *
     * @param n1 First number.
     * @param n2 Second number.
     * @return n1 + n2.
     */
    public float add(float n1, float n2) {
        return n1 + n2;
    }

    /**
     * n1 - n2.
     *
     * @param n1 First number.
     * @param n2 Second number.
     * @return n1 - n2.
     */
    public float subtract(float n1, float n2) {
        return n1 - n2;
    }

    /**
     * n1 * n2.
     *
     * @param n1 First number.
     * @param n2 Second number.
     * @return n1 * n2.
     */
    public float multiply(float n1, float n2) {
        return n1 * n2;
    }

    /**
     * n1 / n2.
     *
     * @param n1 First number.
     * @param n2 Second number (divisor).
     * @return n1 / n2.
     * @throws ArithmeticException If the divisor is 0.
     */
    public float divide(float n1, float n2) throws ArithmeticException {
        if ((int)n2 == 0) {
            throw new ArithmeticException("Cannot divide by zero.");
        }

        return n1 / n2;
    }

}
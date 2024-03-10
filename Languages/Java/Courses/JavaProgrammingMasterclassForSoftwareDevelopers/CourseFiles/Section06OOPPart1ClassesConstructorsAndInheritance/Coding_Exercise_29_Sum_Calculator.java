package Section06OOPPart1ClassesConstructorsAndInheritance;

public class Coding_Exercise_29_Sum_Calculator { // Name should be SimpleCalculator.
    private double firstNumber;
    private double secondNumber;

    /**
     * @param firstNumber the firstNumber to set
     */
    public void setFirstNumber(double firstNumber) {
        this.firstNumber = firstNumber;
    }

    /**
     * @param secondNumber the secondNumber to set
     */
    public void setSecondNumber(double secondNumber) {
        this.secondNumber = secondNumber;
    }

    /**
     * @return double return the firstNumber
     */
    public double getFirstNumber() {
        return firstNumber;
    }

    /**
     * @return double return the secondNumber
     */
    public double getSecondNumber() {
        return secondNumber;
    }

    public double getAdditionResult() {
        return firstNumber + secondNumber;
    }

    public double getSubtractionResult() {
        return firstNumber - secondNumber;
    }

    public double getMultiplictionResult() {
        return firstNumber * secondNumber;
    }

    public double getDivisionResult() {
        // return firstNumber / secondNumber;

        return secondNumber / firstNumber;
    }

}
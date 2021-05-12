package Section06OOPPart1ClassesConstructorsAndInheritance;

public class Section06Methods {

    public void Coding_Exercise_29_Sum_Calculator() { // Name should be SimpleCalculator.
        Coding_Exercise_29_Sum_Calculator calculator = new Coding_Exercise_29_Sum_Calculator();
        calculator.setFirstNumber(5.0);
        calculator.setSecondNumber(4);
        System.out.println("add: " + calculator.getAdditionResult());
        System.out.println("subtract: " + calculator.getSubtractionResult());
        calculator.setFirstNumber(5.25);
        calculator.setSecondNumber(0);
        System.out.println("Multiply: " + calculator.getMultiplictionResult());
        System.out.println("Divide: " + calculator.getDivisionResult());
    }

    // public void generalMethod() {
    // CodingExercise29SumCalculator calculator = new
    // CodingExercise29SumCalculator();
    // calculator.setFirstNumber(5.0);
    // calculator.setSecondNumber(4);
    // System.out.println("add: " + calculator.getAdditionResult());
    // System.out.println("subtract: " + calculator.getSubtractionResult());
    // calculator.setFirstNumber(5.25);
    // calculator.setSecondNumber(0);
    // System.out.println("Multiply: " + calculator.getMultiplictionResult());
    // System.out.println("Divide: " + calculator.getDivisionResult());
    // }
}
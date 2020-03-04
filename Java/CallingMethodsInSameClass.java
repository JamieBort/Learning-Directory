// from: https://www.cs.utexas.edu/~scottm/cs307/javacode/codeSamples/CallingMethodsInSameClass.java

public class CallingMethodsInSameClass {
    public static void main(String[] args) {
        printOne();
        printTwo();
        // printThree();
    }

    public static void printOne() {
        System.out.println("Hello World");
    }

    public static void printTwo() {
        printOne();
        printOne();
        // printThree();
    }
}
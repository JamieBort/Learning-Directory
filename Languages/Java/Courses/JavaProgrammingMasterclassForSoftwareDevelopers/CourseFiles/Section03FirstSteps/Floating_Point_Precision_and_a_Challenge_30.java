package Section03FirstSteps;

public class Floating_Point_Precision_and_a_Challenge_30 {
    public void Floating_Point_Precision_and_a_Challenge() {
        // int myIntValue = 5;
        // float myFloatValue = 5f;
        // double myDoubleValue = 5.25d;

        // int myIntValue = 5/2;
        // float myFloatValue = 5f/2f;
        // double myDoubleValue = 5d/2d;

        // int myIntValue = 5/2f; // doesn't work
        // float myFloatValue = 5f/2;
        // double myDoubleValue = 5d/2;

        // int myIntValue = 5/3;
        // float myFloatValue = 5f/3f;
        // double myDoubleValue = 5d/3d;

        // int myIntValue = 5/3;
        // float myFloatValue = 5f/3;
        // double myDoubleValue = 5d/3;

        // System.out.println("myIntValue = " + myIntValue);
        // System.out.println("myFloatValue = " + myFloatValue);
        // System.out.println("myDoubleValue = " + myDoubleValue);

        // challenge, convert given number of pounds to kilograms
        // 1. create a variable with teh appropriate type to store the nubmer of pounds to be convererted to kilograms.
        // 2. calculate the result.
        // 3. print out the result.

        double pounds = 200d;
        double kilograms = 0.45359237d * pounds;
        System.out.println(pounds + " pounds is equal to " + kilograms + " kilograms.");

    }
}
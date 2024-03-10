package Section03FirstSteps;

public class float_and_double_Primitive_Types_29 {
    public void float_and_double_Primitive_Types() {
        // notes from video 29
        float myMinFloatValue = Float.MIN_VALUE;
        float myMaxFloatValue = Float.MAX_VALUE;
        System.out.println("Foat minimum value = " + myMinFloatValue);
        System.out.println("Foat maximum value = " + myMaxFloatValue);

        // notes from video 29
        double myMinDoubleValue = Double.MIN_VALUE;
        double myMaxDoubleValue = Double.MAX_VALUE;
        System.out.println("Double minimum value = " + myMinDoubleValue);
        System.out.println("Double maximum value = " + myMaxDoubleValue);

        int myIntValue = 5;
        float myFloatValue = (float) 5.25; // casting here
        // float myFloatValue = 5.25f; // being explicit.
        double myDoubleValue = 5.25d;
    }
}
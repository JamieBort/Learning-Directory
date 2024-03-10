package Section03FirstSteps;

public class Primitive_Types_25 {
    
    public Primitive_Types_25(){
        System.out.println("Inside constructor of Primitive_Types_25 class.");
    }

    public void primitiveTypes(){
        int myValue = 10000;

        int myMinIntValue = Integer.MIN_VALUE;
        int myMaxIntValue = Integer.MAX_VALUE;
        System.out.println("Integer Minimum Value = " + myMinIntValue); // Integer Minimum Value = -2147483648
        System.out.println("Integer Maximum Value = " + myMaxIntValue); // Integer Maximum Value = 2147483647

        // An `overflow` occurred. Because we exceded the max value of this variable/type.
        System.out.println("Busted MAX value = " + (myMaxIntValue + 1)); // Busted MAX value = -2147483648
        
        // An `underflow` occurred. Because we exceded the max value of this variable/type.
        System.out.println("Busted MIN value = " + (myMinIntValue - 1)); // Busted MIN value = 2147483647

        int myMaxIntTest = 2_147_483_647;
        // int myMaxIntTestToLarge = 2_147_483_648; // NOTE: we've exceded the max value allowed.

    }
    
}
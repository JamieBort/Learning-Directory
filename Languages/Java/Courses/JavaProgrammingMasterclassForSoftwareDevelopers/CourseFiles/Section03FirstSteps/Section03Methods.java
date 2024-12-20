package Section03FirstSteps;

public class Section03Methods {

    public void Primitive_Types_25(){
        System.out.println("Inside Primitive_Types_25() method of Section03Methods class.");
        Primitive_Types_25 primitive_Types_25 = new Primitive_Types_25();
        primitive_Types_25.primitiveTypes();
    }

    public void Casting_In_Java_27() {
        System.out.println("Inside Casting_In_Java_27() method of Section03Methods class.");
        Casting_In_Java_27 casting_In_Java_27 = new Casting_In_Java_27();
        casting_In_Java_27.castingMethod();
    }

    public void Primitive_Types_Challenge_28() {
        // byte byteValue = 127;
        byte byteValue = 10;
        // short shortValue = 32767;
        short shortValue = 20;
        // int intValue=214748364;
        int intValue = 50;
        long longValue = 50000;
        // Long longValue = 50000L;

        Primitive_Types_Challenge_28 threeParameterVariable = new Primitive_Types_Challenge_28();
        Primitive_Types_Challenge_28 fourParameterVariable = new Primitive_Types_Challenge_28();
        threeParameterVariable.primative_types_challenge(byteValue, shortValue, intValue);
        fourParameterVariable.primative_types_challenge(byteValue, shortValue, intValue, longValue);

    }

    public void float_and_double_Primitive_Types_29() {
        System.out.println("float_and_double_Primitive_Types_29()");
        float_and_double_Primitive_Types_29 Example01 = new float_and_double_Primitive_Types_29();
        Example01.float_and_double_Primitive_Types();
    }

    public void Floating_Point_Precision_and_a_Challenge_30() {
        System.out.println("Floating_Point_Precision_and_a_Challenge_30()");
        Floating_Point_Precision_and_a_Challenge_30 Example01 = new Floating_Point_Precision_and_a_Challenge_30();
        Example01.Floating_Point_Precision_and_a_Challenge();
    }

    public void Ternary_Operator_39() {
        System.out.println("Inside Ternary_Operator_39");
        Ternary_Operator_39 ternaryOperator = new Ternary_Operator_39();
        // ternaryOperator.myPrint();
        ternaryOperator.ternaryMethod();
    }

}
public class Main {

    public static void main(String[] args) {
        // byte byteValue = 127;
        byte byteValue = 10;
        // short shortValue = 32767;
        short shortValue = 20;
        // int intValue=214748364;
        int intValue=50;
        long longValue=50000L;

        Primitive_Types_Challenge_28 aVariable_4 = new Primitive_Types_Challenge_28();
        Primitive_Types_Challenge_28 aVariable_3 = new Primitive_Types_Challenge_28();
        aVariable_3.primative_types_challenge(byteValue, shortValue, intValue);
        aVariable_4.primative_types_challenge(byteValue, shortValue, intValue,longValue);
    }
}
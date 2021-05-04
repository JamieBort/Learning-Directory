public class Primitive_Types_Challenge_28 {

    public static void primative_types_challenge() {
        byte aByte = 126;
        short aShort = 32766;
        int aInt = 2147483646;
        long aLong = 50000L + (10L * (aByte + aShort + aInt));
        System.out.println("aLong: " + aLong);
    }
}
public class Primitive_Types_Challenge_28 {

    static void primative_types_challenge(byte byteParameter,short shortParameter, int intParameter) {
        long result = (10L * (byteParameter + shortParameter + intParameter));
        System.out.println("result with three parameters: " + result);
    }

    static void primative_types_challenge(byte byteParameter,short shortParameter, int intParameter, long longParameter) {
        long result = longParameter + (10L * (byteParameter + shortParameter + intParameter));
        System.out.println("longParameter: " + longParameter);
        System.out.println("byteParameter: " + byteParameter);
        System.out.println("shortParameter: " + shortParameter);
        System.out.println("intParameter: " + intParameter);
        // long longParameter = 50000L + (10L * (byteParameter + shortParameter + intParameter));
        System.out.println("result with four parameters: " + result);
    }

}
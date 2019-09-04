import org.junit.Test;

import static org.junit.Assert.*;

//import org.junit.*;

public class ConversionTest {

    @Test
    public void tempConversion() throws Throwable {
        // Given
        Conversion underTest = new Conversion();

//        When
        double temperature = 80.0d;
        String unit = "";
        double result = underTest.tempConversion(temperature, unit);

//        Then - assertions for result of method tempConversion(temperature, unit).
        assertEquals(176.0d, result, 0.0);
    }
}
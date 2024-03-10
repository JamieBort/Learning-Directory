public class Conversion {



    public double tempConversion(double temperature, String unit) {
        if (unit.equals("F"))
            return (temperature - 32) * (5.0 / 9.0);
        else
            return (temperature * (9.0 / 5.0)) + 32;
    }

}
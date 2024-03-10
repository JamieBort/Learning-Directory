package Section04JavaTutorialExpressionsStatementsCodeBlocksMethodsAndMore;

public class Coding_Exercise_1_Speed_Converter {
    // 1 mph = 1.606 kph
    public static long toMilesPerHour(double kilometersPerHour) {
        // return rounded value of caluclation
        if (kilometersPerHour < 0) {
            return -1;
        }
        // long temp = Math.round(1.11);
        // long rounded = Math.round(printConversion(kilometersPerHour));
        return Math.round(printConversion(kilometersPerHour));
    }
    
    public static double printConversion(double kilometersPerHour) {
        double milesPerHour= kilometersPerHour/1.606;
        System.out.println(kilometersPerHour + " km/h = " + milesPerHour + " mi/h");
        return milesPerHour;
    }
}
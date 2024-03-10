import java.util.Scanner;

public class Main {


    public static void main(String[] args) {
//create instance of scanner to get information from user for new vehicle
        Scanner scanner = new Scanner(System.in);
        //use scanner to grab the VIN number
        System.out.println("What is your vehicle's VIN?");
        int userVIN = scanner.nextInt();
        System.out.println("Now what's the current odometer reading?");
        //exception handling: "the long number on your dashboard"
        double userOdometer = scanner.nextDouble();
        System.out.println("How many gallons of gas have been consumed?");
        double userConsumption = scanner.nextDouble();
        System.out.println("What was the odometer reading for the most recent oil change?");
        double userLastReading = scanner.nextDouble();
        System.out.println("What is the engine size in liters?");
        double userEngineSize = scanner.nextDouble();

        VehicleInfo newVehicle = new VehicleInfo();
        newVehicle.setVIN(userVIN);
        newVehicle.setOdometer(userOdometer);
        newVehicle.setConsumption(userConsumption);
        newVehicle.setLastReading(userLastReading);
        newVehicle.setEngineSize(userEngineSize);

        //here we use the report method in the telematics class
        TelematicsService.report (newVehicle);


    }
}


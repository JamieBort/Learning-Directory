package com.company;
import java.util.Scanner;


public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Vehicle vehicleInfo = new Vehicle();

        System.out.println("VIN (Vehicle Identification Number)");
        String VIN = scanner.nextLine();
        vehicleInfo.setVin(VIN);


        System.out.println("odometer (miles traveled)");
        Double userOdometer = scanner.nextDouble();
        vehicleInfo.setOdometer(userOdometer);


        System.out.println("consumption (gallons of gas consumed)");
        Double userGasConsumed = scanner.nextDouble();
        vehicleInfo.setGalGasConsumed(userGasConsumed);


        System.out.println("odometer reading for last oil change");
        Double userLastOilOdometer = scanner.nextDouble();
        vehicleInfo.setLastOilOdometer(userLastOilOdometer);


        System.out.println("engine size in liters (e.g. 2.0, 4.5)");
        Double userEngineSize = scanner.nextDouble();
        vehicleInfo.setEngineSize(userEngineSize);


        TelematicsService telematicsService = new TelematicsService();
        telematicsService.report(vehicleInfo);

    }
}

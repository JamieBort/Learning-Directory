package com.ironyard;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        VehicleInfo newVehicle = new VehicleInfo();
        Scanner scanner = new Scanner(System.in);


        System.out.println("Please enter the VIN: ");
        String vin = scanner.nextLine();
        newVehicle.setVIN(vin);

        System.out.println("Please enter the Odometer mileage");
        double odometer = scanner.nextDouble();
        newVehicle.setOdometer(odometer);

        System.out.println("Please enter the gallons of gas your car consumes on one tank");
        double consumption = scanner.nextDouble();
        newVehicle.setConsumption(consumption);

        System.out.println("Please enter the odometer reading for last oil change");
        double odReadingLastOilChange = scanner.nextDouble();
        newVehicle.setOdReadingLastOilChange(odReadingLastOilChange);

        System.out.println("Please enter the engine size in liters");
        double engineSize = scanner.nextDouble();
        newVehicle.setEngineSize(engineSize);


        ArrayList<VehicleInfo> list = new ArrayList<>();

        try {
            TelematicsService.report(newVehicle);
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            list = TelematicsService.convertJSONToObj();
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            TelematicsService.updateDashboard(list);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

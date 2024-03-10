package com.company;

import java.util.Scanner;
import java.io.IOException;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        VehicleInfo car = new VehicleInfo();
        System.out.print("Enter the VIN: ");
        car.setVIN(input.nextLong());
        System.out.print("Enter the odometer: ");
        car.setOdometerMiles(input.nextDouble());
        System.out.print("Enter the number of gallons of fuel: ");
        car.setConsumption(input.nextDouble());
        System.out.print("Enter the odometer reading of your last oil change: ");
        car.setOdometerOil(input.nextDouble());
        System.out.print("Enter the engine size: ");
        car.setEngineSize(input.nextDouble());

        ArrayList<VehicleInfo> list = new ArrayList<>();

        try {
            TelematicsService.report(car);
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

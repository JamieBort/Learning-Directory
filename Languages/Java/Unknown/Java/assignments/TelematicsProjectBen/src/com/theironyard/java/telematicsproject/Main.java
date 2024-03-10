package com.theironyard.java.telematicsproject;

import java.util.Scanner;
import java.io.IOException;
import java.util.ArrayList;


public class Main {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        VehicleInfo car = new VehicleInfo();
        System.out.print("Enter a new VIN: ");
        car.setVIN(input.nextLong());
        System.out.print("Enter an odometer reading: ");
        car.setOdometer(input.nextDouble());
        System.out.print("Enter the number of gallons of fuel used: ");
        car.setConsumption(input.nextDouble());
        System.out.print("Enter an odometer reading of your last oil change: ");
        car.setLastOilChng(input.nextDouble());
        while (car.getLastOilChng() > car.getOdometer()) {
            System.out.print("Enter an odometer reading of your last oil change (it can't be higher than your odometer reading of " + car.getOdometer() + ": ");
            car.setLastOilChng(input.nextDouble());
        }
        System.out.print("Enter the size of your engine in liters (e.g 2.2): ");
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

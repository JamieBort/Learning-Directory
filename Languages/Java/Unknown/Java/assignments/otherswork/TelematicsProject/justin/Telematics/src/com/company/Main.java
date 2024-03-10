package com.company;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static com.company.TelematicsService.convertToJava;
import static com.company.TelematicsService.report;


public class Main {

    public static void main(String[] args) {
        // write your code here
        Scanner userInput = new Scanner(System.in);

        VehicleInfo newCar = new VehicleInfo();

        // obtain input from the user and set values
        System.out.println("Please enter your vehicle's VIN:");
        newCar.setVIN(userInput.nextInt());

        System.out.println("Please enter your vehicle's current odometer:");
        newCar.setOdometer(userInput.nextDouble());

        System.out.println("Please enter how many gallons of gas your vehicle has consumed:");
        newCar.setConsumption(userInput.nextDouble());

        System.out.println("Please enter the odometer reading of your last oil change:");
        newCar.setOdometerSinceLastOilChange(userInput.nextDouble());

        System.out.println("Please enter your vehicle's engine size in liters:");
        newCar.setEngineSizeInLiters(userInput.nextDouble());

        //List<VehicleInfo> vehicles = new ArrayList<>();

        try {
            report(newCar);
            convertToJava();

        } catch (IOException error) {
            error.printStackTrace();
        }

    }
}

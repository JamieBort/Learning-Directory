package com.theironyard.java.telematicsproject;

//non-serialized javabean
public class VehicleInfo {
    private long VIN;//originally set as int per the assignment, but not large enough for realistic length VINs
    private double odometer; //total miles traveled
    private double consumption; //gallons of gas consumed
    private double lastOilChng; //odometer reading for last oil change
    private double engineSize; //engine size in liters
    private double milesPerGallon; //set via math, but needed when creating obj via json

    public VehicleInfo() {
    }

    public long getVIN() {

        return VIN;
    }

    public void setVIN(long VIN) {

        this.VIN = VIN;
    }

    public double getOdometer() {

        return odometer;
    }

    public void setOdometer(double odometer) {

        this.odometer = odometer;
    }

    public double getConsumption() {

        return consumption;
    }

    public void setConsumption(double consumption) {

        this.consumption = consumption;
    }

    public double getLastOilChng() {

        return lastOilChng;
    }

    public void setLastOilChng(double lastOilChng) {

        this.lastOilChng = lastOilChng;
    }

    public double getEngineSize() {

        return engineSize;
    }

    public void setEngineSize(double engineSize) {

        this.engineSize = engineSize;
    }

    public double getMilesPerGallon() {

        return this.getOdometer() / this.getConsumption();
    }
}

package com.ironyard;

public class VehicleInfo {

    private String VIN;
    private double odometer;
    private double consumption;
    private double odReadingLastOilChange;
    private double engineSize;

    public VehicleInfo() {
    }

    public String getVIN() {
        return VIN;
    }

    public void setVIN(String VIN) {
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

    public double getOdReadingLastOilChange() {
        return odReadingLastOilChange;
    }

    public void setOdReadingLastOilChange(double odReadingLastOilChange) {
        this.odReadingLastOilChange = odReadingLastOilChange;
    }

    public double getEngineSize() {
        return engineSize;
    }

    public void setEngineSize(double engineSize) {
        this.engineSize = engineSize;
    }
}

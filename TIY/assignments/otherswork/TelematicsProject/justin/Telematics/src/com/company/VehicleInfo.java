package com.company;

public class VehicleInfo {
    public int VIN;
    public double odometer;
    public double consumption;
    public double odometerSinceLastOilChange;
    public double engineSizeInLiters;

    // Javabean, so empty constructor for now

    public int getVIN() {
        return VIN;
    }

    public void setVIN(int VIN) {
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

    public double getOdometerSinceLastOilChange() {
        return odometerSinceLastOilChange;
    }

    public void setOdometerSinceLastOilChange(double odometerSinceLastOilChange) {
        this.odometerSinceLastOilChange = odometerSinceLastOilChange;
    }

    public double getEngineSizeInLiters() {
        return engineSizeInLiters;
    }

    public void setEngineSizeInLiters(double engineSizeInLiters) {
        this.engineSizeInLiters = engineSizeInLiters;
    }

    @Override
    public String toString() {
        return "VehicleInfo{" +
                "VIN=" + VIN +
                ", odometer=" + odometer +
                ", consumption=" + consumption +
                ", odometerSinceLastOilChange=" + odometerSinceLastOilChange +
                ", engineSizeInLiters=" + engineSizeInLiters +
                '}';
    }
}

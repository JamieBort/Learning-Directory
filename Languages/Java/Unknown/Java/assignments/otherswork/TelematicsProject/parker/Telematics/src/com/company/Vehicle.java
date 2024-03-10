package com.company;

public class Vehicle {
    private String VIN;
    private Double odometer;
    private Double gasConsumed;
    private Double oilChange;
    private Double engineSize;

    public Vehicle() {
    }

    public String getVIN() {
        return VIN;
    }

    public void setVIN(String VIN) {
        this.VIN = VIN;
    }

    public Double getOdometer() {
        return odometer;
    }

    public void setOdometer(Double odometer) {
        this.odometer = odometer;
    }

    public Double getGasConsumed() {
        return gasConsumed;
    }

    public void setGasConsumed(Double gasConsumed) {
        this.gasConsumed = gasConsumed;
    }

    public Double getOilChange() {
        return oilChange;
    }

    public void setOilChange(Double oilChange) {
        this.oilChange = oilChange;
    }

    public Double getEngineSize() {
        return engineSize;
    }

    public void setEngineSize(Double engineSize) {
        this.engineSize = engineSize;
    }
}
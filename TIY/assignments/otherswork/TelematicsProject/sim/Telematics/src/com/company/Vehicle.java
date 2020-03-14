package com.company;

public class Vehicle {
    private String vin;
    private Double odometer;
    private Double galGasConsumed;
    private Double lastOilOdometer;
    private Double engineSize;

    public Vehicle() {
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public Double getOdometer() {
        return odometer;
    }

    public void setOdometer(Double odometer) {
        this.odometer = odometer;
    }

    public Double getGalGasConsumed() {
        return galGasConsumed;
    }

    public void setGalGasConsumed(Double galGasConsumed) {
        this.galGasConsumed = galGasConsumed;
    }

    public Double getLastOilOdometer() {
        return lastOilOdometer;
    }

    public void setLastOilOdometer(Double lastOilOdometer) {
        this.lastOilOdometer = lastOilOdometer;
    }

    public Double getEngineSize() {
        return engineSize;
    }

    public void setEngineSize(Double engineSize) {
        this.engineSize = engineSize;
    }
}

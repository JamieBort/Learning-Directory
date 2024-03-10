package com.company;

//non-serialized javabean
public class VehicleInfo {
    private long VIN;
    private double odometerMiles;
    private double consumption;
    private double odometerOil;
    private double engineSize;
    private double milesPerGallon;

    public VehicleInfo() {
    }

    public long getVIN() {

        return VIN;
    }

    public void setVIN(long VIN) {

        this.VIN = VIN;
    }

    public double getOdometerMiles() {

        return odometerMiles;
    }

    public void setOdometerMiles(double odometerMiles) {

        this.odometerMiles = odometerMiles;
    }

    public double getConsumption() {

        return consumption;
    }

    public void setConsumption(double consumption) {

        this.consumption = consumption;
    }

    public double getOdometerOil() {

        return odometerOil;
    }

    public void setOdometerOil(double odometerOil) {

        this.odometerOil = odometerOil;
    }

    public double getEngineSize() {

        return engineSize;
    }

    public void setEngineSize(double engineSize) {

        this.engineSize = engineSize;
    }

    public double getMilesPerGallon() {

        return this.getOdometerMiles() / this.getConsumption();
    }
}

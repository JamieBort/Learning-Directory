public class VehicleInfo {
//
//    Write a VehicleInfo class that has the following information:

//    VIN (Vehicle Identification Number) - int
//    odometer (miles traveled) - double
//    consumption (gallons of gas consumed) - double
//    odometer reading for last oil change - double
//    engine size in liters (e.g. 2.0, 4.5) - double
//    The VehicleInfo class should be a JavaBean which means it has an empty constructor and get/set methods for all the variables.
//


    protected int VIN;
    protected double odometer;
    protected double consumption;
    protected double lastReading;
    protected double engineSize;

    public VehicleInfo(){


    }


    //getters and setters functions aka methods here

    public double getConsumption() {
        return consumption;
    }

    public void setConsumption(double consumption) {
        this.consumption = consumption;
    }

    public double getEngineSize() {
        return engineSize;
    }

    public void setEngineSize(double engineSize) {
        this.engineSize = engineSize;
    }

    public double getLastReading() {
        return lastReading;
    }

    public void setLastReading(double lastReading) {
        this.lastReading = lastReading;
    }

    public double getOdometer () {
        return odometer;
    }

    public void setOdometer(double odometer) {
        this.odometer = odometer;
    }

    public int getVIN() {
        return VIN;
    }

    public void setVIN(int VIN) {
        this.VIN = VIN;
    }




}

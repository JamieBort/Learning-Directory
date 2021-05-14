// JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section06OOPPart1ClassesConstructorsAndInheritance/InheritanceChallengePart1ChallengeExercise88

// package Section09InnerAndAbstractClassesAndInterfaces.PracticeInterface;
package Section06OOPPart1ClassesConstructorsAndInheritance.InheritanceChallengePart1ChallengeExercise88;

import java.util.Arrays;
import java.util.List;
import java.util.ListIterator;

// air, water, land

public class Vehicle {

    private int speedForward;
    private int speedUp;
    private int speedRight;
    private int fuelQuantity;
    private String fuelType; // choices: gasoline, diesel, kerosene, electrical
    private String[] fuelTypeOptions = {"zero", "one", "two"}; // should this be static? or assigned a different way?
    private int acceleration;
    private boolean dashboardWorking;
    private int engineTime;
    private int engineDistance;
    
    public Vehicle(int fuelQuantity, int acceleration) {
        this.speedForward=0;
        this.speedUp=0;
        this.speedRight=0;
        this.fuelQuantity = fuelQuantity; // needs to be instantiated with the class.
        this.fuelType=fuelTypeOptions[0]; // choices: gasoline, diesel, kerosene, electrical
        // this.fuelTypeOptions= {"zero", "one", "two"};
        this.acceleration = acceleration; // default acceleartion to be overridden by sub classes
        this.dashboardWorking = true; // speed indication on dashboard working/not working
        this.engineTime=0;
        this.engineDistance=0;
    }

    public Vehicle(int fuelQuantity) {
        this(fuelQuantity, 5); // `this` calls the constructor with two parameters.
    }

    /**
     * @return int return the speed
     */
    public int getSpeedForward() { // method reading out speed indication on dashboard indicates speed
        System.out.println("The current speed is: " + speedForward + "kilometers per hour.");
        System.out.println("If the value is negative, the vehicle is moving backwards.");
        return speedForward;
    }
    
    /**
     * @param speed the speed to set
     */
    public void setSpeedForward(int speedForward) {
        System.out.println("The speed forward is now: " + speedForward + "kilometers per hour.");
        this.speedForward = speedForward;
    }

    /**
     * @return int return the speed
     */
    public int getSpeedUp() { // method reading out speed indication on dashboard indicates speed
        System.out.println("The current speed is: " + speedUp + "kilometers per hour.");
        System.out.println("If the value is negative, the vehicle is moving down.");
        return speedUp;
    }
    
    /**
     * @param speed the speed to set
     */
    public void setSpeedUp(int speedUp) {
        System.out.println("The current speed moving Up is now: " + speedForward + "kilometers per hour.");
        this.speedUp = speedUp;
    }

    /**
     * @return int return the speed
     */
    public int getSpeedRight() { // method reading out speed indication on dashboard indicates speed
        System.out.println("The current speed is: " + speedRight + "kilometers per hour.");
        System.out.println("If the value is negative, the vehicle is moving/turning left.");
        return speedRight;
    }
    
    /**
     * @param speed the speed to set
     */
    public void setSpeedRight(int speedRight) {
        System.out.println("The current speed moving Right is now: " + speedRight + "kilometers per hour.");
        this.speedRight = speedRight;
    }

    /**
     * @return int return the fuelQuantity
     */
    public int getFuelQuantity() { // method reading out fuelQuantity quantity
        System.out.println("The amount of fuel is " + fuelQuantity + " litters.");
        return fuelQuantity;
    }

    /**
     * @param fuelQuantity the fuelQuantity to set
     */
    public void setFuelQuantity(int fuelQuantity) {
        System.out.println("The amount of fuel is now: " + fuelQuantity + " litters.");
        this.fuelQuantity = fuelQuantity;
    }

    /**
     * @return int return the fuelType
     */
    public String getFuelType() { // method reading out fuelType quantity
        System.out.println("The type of fuel is: " + fuelType + " .");
        return fuelType;
    }

    /**
     * @param fuelType the fuelType to set
     */
    public void setFuelType(String fuelType) {
        System.out.println("The type of fuel is now: " + fuelType + " .");
        this.fuelType = fuelType;
    }

    /**
     * @return int return the acceleration
     */
    public int getAcceleration() {
        System.out.println("This vehicle's acceleration is: " +acceleration);
        return acceleration;
    }

    /**
     * @param acceleration the acceleration to set
     */
    public void setAcceleration(int acceleration) {
        System.out.println("This vehicle's acceleration is updated to: " +acceleration);
        this.acceleration = acceleration;
    }

    /**
     * @return boolean return the dashboardWorking
     */
    public boolean isDashboardWorking() { // method reading out dashboard condition
        if(dashboardWorking==true){
            System.out.println("The dashboard is working." );
        } else {System.out.println("The dashboard is NOT working." );}
        return dashboardWorking;
    }

    /**
     * @param dashboardWorking the dashboardWorking to set
     */
    public void setDashboardWorking(boolean dashboardWorking) {
        this.dashboardWorking = dashboardWorking;
        if(dashboardWorking==true){
            System.out.println("The dashboard is now working." );
        } else {System.out.println("The dashboard is now NOT working." );}
    }

    /**
     * @return int return the engineTime
     */
    public int getEngineTime() {
        System.out.println("The total amount of time the engine has been running is: " + engineTime);
        return engineTime;
    }

    /**
     * @param engineTime the engineTime to set
     */
    public void setEngineTime(int engineTime) {
        System.out.println("The total amount of time the engine has been running is now set to: " + engineTime);
        this.engineTime = engineTime;
    }

    /**
     * @return int return the engineDistance
     */
    public int getEngineDistance() {
        System.out.println("The total amount of distance the engine has been running is: " + engineDistance);
        return engineDistance;
    }

    /**
     * @param engineTime the engineTime to set
     */
    public void setEngineDistance(int engineDistance) {
        System.out.println("The total amount of distance the engine has been running is now set to: " + engineDistance);
        this.engineDistance = engineDistance;
    }

}

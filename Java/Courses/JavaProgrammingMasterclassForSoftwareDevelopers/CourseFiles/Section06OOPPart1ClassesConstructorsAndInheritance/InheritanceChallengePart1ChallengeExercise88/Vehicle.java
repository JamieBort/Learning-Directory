// JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section06OOPPart1ClassesConstructorsAndInheritance/InheritanceChallengePart1ChallengeExercise88

// package Section09InnerAndAbstractClassesAndInterfaces.PracticeInterface;
package Section06OOPPart1ClassesConstructorsAndInheritance.InheritanceChallengePart1ChallengeExercise88;

public class Vehicle {

    private int speed;
    // moves forward OR backword (not at the same time.)
    private boolean directionForward;
    // if speed = 0 then foward and backward are false
    private boolean directionBackward;
    // if speed = 0 then foward and backward are false
    private boolean directionUp;
    // if speed = 0 then foward and backward are false
    private boolean directionDown;
    private boolean directionLeft;
    private boolean directionRight;
    // initial fuel not set to full nor zero. needs to be instantiated with the
    // class.
    private int fuel;
    // default acceleartion to be overridden by sub classes
    private int acceleration;
    // speed indication on dashboard working/not working
    private boolean dashboardWorking;

    public Vehicle(int fuel, int acceleration) {
        this.speed = 0;
        this.directionForward = false;
        this.directionBackward = false;
        this.directionUp = false;
        this.directionDown = false;
        this.directionLeft = false;
        this.directionRight = false;
        this.fuel = fuel;
        this.acceleration = acceleration;
        this.dashboardWorking = true;
    }

    public Vehicle(int fuel) {
        this(fuel, 5);
    }

    /**
     * @return int return the speed
     */
    public int getSpeed() { // method reading out speed indication on dashboard indicates speed
        System.out.println("The current speed is: " + speed + "miles per hour.");
        return speed;
    }

    /**
     * @param speed the speed to set
     */
    public void setSpeed(int speed) {
        this.speed = speed;
    }

    /**
     * @return boolean return the directionForward
     */
    public boolean isDirectionForward() {
        return directionForward;
    }

    /**
     * @param directionForward the directionForward to set
     */
    public void setDirectionForward(boolean directionForward) {
        this.directionForward = directionForward;
    }

    /**
     * @return boolean return the directionBackward
     */
    public boolean isDirectionBackward() {
        return directionBackward;
    }

    /**
     * @param directionBackward the directionBackward to set
     */
    public void setDirectionBackward(boolean directionBackward) {
        this.directionBackward = directionBackward;
    }

    /**
     * @return boolean return the directionUp
     */
    public boolean isDirectionUp() {
        return directionUp;
    }

    /**
     * @param directionUp the directionUp to set
     */
    public void setDirectionUp(boolean directionUp) {
        this.directionUp = directionUp;
    }

    /**
     * @return boolean return the directionDown
     */
    public boolean isDirectionDown() {
        return directionDown;
    }

    /**
     * @param directionDown the directionDown to set
     */
    public void setDirectionDown(boolean directionDown) {
        this.directionDown = directionDown;
    }

    /**
     * @return boolean return the directionLeft
     */
    public boolean isDirectionLeft() {
        return directionLeft;
    }

    /**
     * @param directionLeft the directionLeft to set
     */
    public void setDirectionLeft(boolean directionLeft) {
        this.directionLeft = directionLeft;
    }

    /**
     * @return boolean return the directionRight
     */
    public boolean isDirectionRight() {
        return directionRight;
    }

    /**
     * @param directionRight the directionRight to set
     */
    public void setDirectionRight(boolean directionRight) {
        this.directionRight = directionRight;
    }

    /**
     * @return int return the fuel
     */
    public int getFuel() { // method reading out fuel quantity
        System.out.println("the fuel amount is " + fuel + " gallons.");
        return fuel;
    }

    /**
     * @param fuel the fuel to set
     */
    public void setFuel(int fuel) {
        this.fuel = fuel;
    }

    /**
     * @return int return the acceleration
     */
    public int getAcceleration() {
        return acceleration;
    }

    /**
     * @param acceleration the acceleration to set
     */
    public void setAcceleration(int acceleration) {
        this.acceleration = acceleration;
    }

    /**
     * @return boolean return the dashboardWorking
     */
    public boolean isDashboardWorking() { // method reading out dashboard condition
        return dashboardWorking;
    }

    /**
     * @param dashboardWorking the dashboardWorking to set
     */
    public void setDashboardWorking(boolean dashboardWorking) {
        this.dashboardWorking = dashboardWorking;
    }

    public void allDirections() { // method reading out all current directions that are "true";
        System.out.println("is it turning right?" + isDirectionRight());
        // need to add logic and give more feedback.
    }

}

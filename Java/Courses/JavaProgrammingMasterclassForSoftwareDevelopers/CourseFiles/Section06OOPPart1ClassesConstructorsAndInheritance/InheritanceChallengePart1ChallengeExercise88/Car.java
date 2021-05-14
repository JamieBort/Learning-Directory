// JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section06OOPPart1ClassesConstructorsAndInheritance/InheritanceChallengePart1ChallengeExercise88

package Section06OOPPart1ClassesConstructorsAndInheritance.InheritanceChallengePart1ChallengeExercise88;

public class Car extends Vehicle {
    // have windows go up and down
    // default position is up
    // have headlights - headlights are on/off
    // which ones are not working
    // default headlights are on
    // has sound system - it's working or not?
    private int numStationaryWindows;
    private int numNonStationaryWindows;
    private boolean headLightOnStatus;
    private boolean headLightWorkingStatus;
    private boolean soundSystemWorkingStatus;
    private int numWheels;
    private int milageWheels;
    private boolean serviceEngine;
    private boolean tirePressureLow;
    
    public Car(int fuelQuantity, int acceleration, int numStationaryWindows, int numNonStationaryWindows,
            boolean headLightOnStatus, boolean headLightWorkingStatus, boolean soundSystemWorkingStatus, int numWheels,
            int milageWheels, boolean serviceEngine, boolean tirePressureLow) {
        super(fuelQuantity, acceleration);
        this.numStationaryWindows = numStationaryWindows;
        this.numNonStationaryWindows = numNonStationaryWindows;
        this.headLightOnStatus = headLightOnStatus;
        this.headLightWorkingStatus = headLightWorkingStatus;
        this.soundSystemWorkingStatus = soundSystemWorkingStatus;
        this.numWheels = numWheels;
        this.milageWheels = milageWheels;
        this.serviceEngine = serviceEngine;
        this.tirePressureLow = tirePressureLow;
    }
    public Car(int fuelQuantity, int numStationaryWindows, int numNonStationaryWindows, boolean headLightOnStatus,
            boolean headLightWorkingStatus, boolean soundSystemWorkingStatus, int numWheels, int milageWheels,
            boolean serviceEngine, boolean tirePressureLow) {
        super(fuelQuantity);
        this.numStationaryWindows = numStationaryWindows;
        this.numNonStationaryWindows = numNonStationaryWindows;
        this.headLightOnStatus = headLightOnStatus;
        this.headLightWorkingStatus = headLightWorkingStatus;
        this.soundSystemWorkingStatus = soundSystemWorkingStatus;
        this.numWheels = numWheels;
        this.milageWheels = milageWheels;
        this.serviceEngine = serviceEngine;
        this.tirePressureLow = tirePressureLow;
    }

    /**
     * @return int return the numStationaryWindows
     */
    public int getNumStationaryWindows() {
        return numStationaryWindows;
    }

    /**
     * @param numStationaryWindows the numStationaryWindows to set
     */
    public void setNumStationaryWindows(int numStationaryWindows) {
        this.numStationaryWindows = numStationaryWindows;
    }

    /**
     * @return int return the numNonStationaryWindows
     */
    public int getNumNonStationaryWindows() {
        return numNonStationaryWindows;
    }

    /**
     * @param numNonStationaryWindows the numNonStationaryWindows to set
     */
    public void setNumNonStationaryWindows(int numNonStationaryWindows) {
        this.numNonStationaryWindows = numNonStationaryWindows;
    }

    /**
     * @return boolean return the headLightOnStatus
     */
    public boolean isHeadLightOnStatus() {
        return headLightOnStatus;
    }

    /**
     * @param headLightOnStatus the headLightOnStatus to set
     */
    public void setHeadLightOnStatus(boolean headLightOnStatus) {
        this.headLightOnStatus = headLightOnStatus;
    }

    /**
     * @return boolean return the headLightWorkingStatus
     */
    public boolean isHeadLightWorkingStatus() {
        return headLightWorkingStatus;
    }

    /**
     * @param headLightWorkingStatus the headLightWorkingStatus to set
     */
    public void setHeadLightWorkingStatus(boolean headLightWorkingStatus) {
        this.headLightWorkingStatus = headLightWorkingStatus;
    }

    /**
     * @return boolean return the soundSystemWorkingStatus
     */
    public boolean isSoundSystemWorkingStatus() {
        return soundSystemWorkingStatus;
    }

    /**
     * @param soundSystemWorkingStatus the soundSystemWorkingStatus to set
     */
    public void setSoundSystemWorkingStatus(boolean soundSystemWorkingStatus) {
        this.soundSystemWorkingStatus = soundSystemWorkingStatus;
    }

    /**
     * @return int return the numWheels
     */
    public int getNumWheels() {
        return numWheels;
    }

    /**
     * @param numWheels the numWheels to set
     */
    public void setNumWheels(int numWheels) {
        this.numWheels = numWheels;
    }

    /**
     * @return int return the milageWheels
     */
    public int getMilageWheels() {
        return milageWheels;
    }

    /**
     * @param milageWheels the milageWheels to set
     */
    public void setMilageWheels(int milageWheels) {
        this.milageWheels = milageWheels;
    }

    /**
     * @return boolean return the serviceEngine
     */
    public boolean isServiceEngine() {
        return serviceEngine;
    }

    /**
     * @param serviceEngine the serviceEngine to set
     */
    public void setServiceEngine(boolean serviceEngine) {
        this.serviceEngine = serviceEngine;
    }

    /**
     * @return boolean return the tirePressureLow
     */
    public boolean isTirePressureLow() {
        return tirePressureLow;
    }

    /**
     * @param tirePressureLow the tirePressureLow to set
     */
    public void setTirePressureLow(boolean tirePressureLow) {
        this.tirePressureLow = tirePressureLow;
    }

}
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

    public Car(int fuel) {
        super(fuel);
        // TODO Auto-generated constructor stub
    }

    public Car(int fuel, int acceleration) { // is this redundant?
        super(fuel, acceleration);
        // TODO Auto-generated constructor stub
    }

}
// Modify the below to work with a Aircraft rather than a car.

// JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section06OOPPart1ClassesConstructorsAndInheritance/InheritanceChallengePart1ChallengeExercise88

package Section06OOPPart1ClassesConstructorsAndInheritance.InheritanceChallengePart1ChallengeExercise88;

public class Aircraft extends Vehicle {
// have windows go up and down
// default position is up
// have headlights - headlights are on/off
// which ones are not working
// default headlights are on
// has sound system - it's working or not?

    public Aircraft(int fuel) {
        super(fuel);
        //TODO Auto-generated constructor stub
    }

    public Aircraft(int fuel, int acceleration) { // is this redundant?
        super(fuel, acceleration);
        //TODO Auto-generated constructor stub
    }
    
}
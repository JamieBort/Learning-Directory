// JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section06OOPPart1ClassesConstructorsAndInheritance/InheritanceChallengePart1ChallengeExercise88

// package Section09InnerAndAbstractClassesAndInterfaces.PracticeInterface;
package Section06OOPPart1ClassesConstructorsAndInheritance.InheritanceChallengePart1ChallengeExercise88;

public class Vehicle {

 // Initial speed =0 (static?)
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
    // initial fuel not set to full nor zero. needs to be instantiated with the class.
    private int fuel; 
    // default acceleartion to be overridden by sub classes
    private int acceleration; 
    // speed indication on dashboard working/not working
    private boolean dashboardWorking; 
    
    // methods
    // method reading out speed indication on dashboard indicates speed
    // method reading out all current directions that are "true";
    // method reading out fuel quantity
    // method reading out dashboard condition
    
}

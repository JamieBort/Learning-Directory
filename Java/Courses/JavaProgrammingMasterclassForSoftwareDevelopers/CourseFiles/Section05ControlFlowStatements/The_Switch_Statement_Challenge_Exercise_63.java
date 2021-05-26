package Section05ControlFlowStatements;

public class The_Switch_Statement_Challenge_Exercise_63 {
    // public void someothername(){
    // System.out.println("Hello from The_Switch_Statement_Challenge_Exercise_63");
    // }

    public void switchValue(char switchValue) {
        System.out.println("Inside switchValue() method of The_Switch_Statement_Challenge_Exercise_63 class.");
        // int switchValue = 1;
        switch (switchValue) {
            case 'Z':
                System.out.println("Z was chosen");
                break;
            case 'S':
            System.out.println("S was chosen");
                break;
            case '@':
            case 4:
            case 5:
                System.out.println("The value was @, 4, or 5.");
                break;
            default:
                System.out.println("default was tripped");
                break; // this break is redundant/unecessary.
        }
    }
}
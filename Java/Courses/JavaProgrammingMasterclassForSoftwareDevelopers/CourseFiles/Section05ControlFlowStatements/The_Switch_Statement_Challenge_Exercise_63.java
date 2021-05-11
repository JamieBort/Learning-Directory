package Section05ControlFlowStatements;

public class The_Switch_Statement_Challenge_Exercise_63 {
    // public void someothername(){
    // System.out.println("Hello from The_Switch_Statement_Challenge_Exercise_63");
    // }

    public void switchValue(int switchValue) {
        // int switchValue = 1;
        switch (switchValue) {
            case 1:
                System.out.println("the value was 1");
                break;
            case 2:
                System.out.println("The value was 2");
                break;
            case 3:
            case 4:
            case 5:
                System.out.println("The value was 3, 4, or 5.");
                break;
            default:
                System.out.println("default was tripped");
                break; // this break is redundant.
        }
    }
}
package Section03FirstSteps;

public class Ternary_Operator_39 {
    // private boolean isCar = false;
    private boolean isCar = true;

    public void ternaryMethod() {
        System.out.println("Inside ternaryMethod");
        if (wasCar) {
            System.out.println("This is not supposed to happen");
        }
    }

    boolean wasCar = isCar ? true : false;

    // public void myPrint(){
    // boolean isCar = false;
    // if(isCar){System.out.println("yikes");}

    // System.out.println("yikes");
    // }
}
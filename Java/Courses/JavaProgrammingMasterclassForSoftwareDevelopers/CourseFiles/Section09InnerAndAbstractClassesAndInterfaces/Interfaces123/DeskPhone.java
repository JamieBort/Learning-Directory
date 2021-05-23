package Section09InnerAndAbstractClassesAndInterfaces.Interfaces123;

public class DeskPhone implements ITelephone {
    private int myNumber;
    private boolean isRinging;

    public DeskPhone(int i) {
        this.myNumber = i;
        System.out.println("Inside the DeskPhone class; which implements ITelephone.");
    }

    @Override
    public void powerOn() {
        // TODO Auto-generated method stub
        System.out.println("No action taken. Desk phone does not have a power button.");

    }

    @Override
    public void dial(int phoneNumber) {
        // TODO Auto-generated method stub
        System.out.println("Now calling " + phoneNumber + " .");

    }

    @Override
    public void answer() {
        // TODO Auto-generated method stub
        if (isRinging) {
            System.out.println("Answering the desk phone.");
            isRinging = false;
        }

    }

    @Override
    public boolean callPhone(int phoneNumber) {
        // TODO Auto-generated method stub
        if (phoneNumber == myNumber) {
            isRinging = true;
            System.out.println("Ring Ring");
        } else {
            isRinging = false;
            System.out.println("The number is different.");
        }
        return isRinging;
    }

    @Override
    public boolean isRinging() {
        // TODO Auto-generated method stub
        return isRinging;
    }

}
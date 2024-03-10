package Section09InnerAndAbstractClassesAndInterfaces.InterfacesPart2_124;

import Section09InnerAndAbstractClassesAndInterfaces.Interfaces123.*;

public class MobilePhone implements ITelephone {
    private int myNumber;
    private boolean isRinging;
    private boolean isOn = false;

    public MobilePhone(int i) {
        this.myNumber = i;
        System.out.println("Inside the MobilePhone class; which implements ITelephone.");
    }

    @Override
    public void powerOn() {
        // TODO Auto-generated method stub
        isOn = true;
        System.out.println("Mobile phone powered up.");

    }

    @Override
    public void dial(int phoneNumber) {
        // TODO Auto-generated method stub
        if (isRinging) {
            System.out.println("Now calling " + phoneNumber + " on mobile phone.");
        } else {
            System.out.println("Mobile phone is switched off.");
        }

    }

    @Override
    public void answer() {
        // TODO Auto-generated method stub
        if (isRinging) {
            System.out.println("Answering the mobile phone.");
            isRinging = false;
        }

    }

    @Override
    public boolean callPhone(int phoneNumber) {
        // TODO Auto-generated method stub
        if (phoneNumber == myNumber && isOn) {
            isRinging = true;
            System.out.println("Ring tone ringing.");
        } else {
            isRinging = false;
            System.out.println("Mobile phone not on. Or the number is different.");
        }
        return isRinging;
    }

    @Override
    public boolean isRinging() {
        // TODO Auto-generated method stub
        return isRinging;
    }

}
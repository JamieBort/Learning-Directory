package Section09InnerAndAbstractClassesAndInterfaces;

import Section09InnerAndAbstractClassesAndInterfaces.InnerClassesPart1_127.Gearbox;
import Section09InnerAndAbstractClassesAndInterfaces.Interfaces123.*;
import Section09InnerAndAbstractClassesAndInterfaces.InterfacesPart2_124.MobilePhone;

public class Section09Methods {

    public void Random_Class(){
        System.out.println("Inside Random_Class. Used for ### 123 - Interfaces");
        RandomClass randomClass = new RandomClass();
        randomClass.myFirstFunction();
        randomClass.mySecondFunction(false);
        randomClass.myThirdFunction(13);
    }

    public void An_Interface(){
        System.out.println("Inside An_Interface. Used for ### 123 - Interfaces");
        AnInterface anInterface = new RandomClass();
        anInterface.myFirstFunction();
        anInterface.mySecondFunction(true);
        anInterface.myThirdFunction(2);
    }

    public void Desk_Phone(){
        System.out.println("Inside Desk_Phone. Used for ### 123 - Interfaces");
        ITelephone iTelephone;
        iTelephone = new DeskPhone(123456);
        iTelephone.powerOn();
        iTelephone.callPhone(654321);
        iTelephone.answer();
        iTelephone.callPhone(123456);
        iTelephone.answer();
    }

    public void Mobile_Phone(){
        System.out.println("Inside Mobile_Phone. Used for ### 124 - Interfaces Part 2.");
        ITelephone iTelephone;
        iTelephone = new MobilePhone(24565);
        iTelephone.powerOn();
        iTelephone.callPhone(24565);
        iTelephone.answer();
        // iTelephone.callPhone(123456);
        // iTelephone.answer();
    }

    public void Gear_box(){
        // *** This one works as expected. ***
        Gearbox mcLaren = new Gearbox(6);
        // However once we changed Gear classs to private this ceased to work.
        Gearbox.Gear first = mcLaren.new Gear(1, 12.3);
        System.out.println(first.driveSpeed(1000));

        // // *** This one doesn't work. ***
        // Gearbox.Gear second = new Gearbox.Gear(1, 12.3);

        // // *** This one doesn't work. ***
        // Gearbox.Gear third = new mcLaren.Gear(1, 12.3);
    }
}
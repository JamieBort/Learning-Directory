package Section09InnerAndAbstractClassesAndInterfaces;

import java.util.Scanner;

import Section09InnerAndAbstractClassesAndInterfaces.InnerClassesPart1_127.Gearbox_127;
import Section09InnerAndAbstractClassesAndInterfaces.InnerClassesPart2_128.Gearbox_128;
import Section09InnerAndAbstractClassesAndInterfaces.InnerClassesPart2_128.Button;
import Section09InnerAndAbstractClassesAndInterfaces.Interfaces123.*;
import Section09InnerAndAbstractClassesAndInterfaces.InterfacesPart2_124.MobilePhone;

public class Section09Methods {

    public void Random_Class() {
        System.out.println("Inside Random_Class. Used for ### 123 - Interfaces");
        RandomClass randomClass = new RandomClass();
        randomClass.myFirstFunction();
        randomClass.mySecondFunction(false);
        randomClass.myThirdFunction(13);
    }

    public void An_Interface() {
        System.out.println("Inside An_Interface. Used for ### 123 - Interfaces");
        AnInterface anInterface = new RandomClass();
        anInterface.myFirstFunction();
        anInterface.mySecondFunction(true);
        anInterface.myThirdFunction(2);
    }

    public void Desk_Phone() {
        System.out.println("Inside Desk_Phone. Used for ### 123 - Interfaces");
        ITelephone iTelephone;
        iTelephone = new DeskPhone(123456);
        iTelephone.powerOn();
        iTelephone.callPhone(654321);
        iTelephone.answer();
        iTelephone.callPhone(123456);
        iTelephone.answer();
    }

    public void Mobile_Phone() {
        System.out.println("Inside Mobile_Phone. Used for ### 124 - Interfaces Part 2.");
        ITelephone iTelephone;
        iTelephone = new MobilePhone(24565);
        iTelephone.powerOn();
        iTelephone.callPhone(24565);
        iTelephone.answer();
        // iTelephone.callPhone(123456);
        // iTelephone.answer();
    }

    public void Gear_box_127() {
        System.out.println("Inside Gear_box_127() method of Section09Methods class.");
        // *** This one works as expected. ***
        Gearbox_127 mcLaren = new Gearbox_127(6);
        // However once we change Gear classs to private this will ceased to work.
        // NOTE: I think that proper nested classes should be private.
        // We'll make this change in the next video.
        // See `Gear_box_128()` below for working implementation.
        Gearbox_127.Gear_127 first = mcLaren.new Gear_127(1, 12.3);
        System.out.println(first.driveSpeed(1000));

        // // *** However this one doesn't work. ***
        // Gearbox_127.Gear second = new Gearbox_127.Gear(1, 12.3);

        // // *** And this one doesn't work. ***
        // Gearbox_127.Gear third = new mcLaren.Gearbox_127(1, 12.3);
    }

    public void Gear_box_128_a() {
        System.out.println("Inside Gear_box_128_a() method of Section09Methods class.");

        // Used up through 5:45 minutes.
        // *** No refernce to Gear class. Because Gear class is local to Gearbox class. ***
        Gearbox_128 mcLaren = new Gearbox_128(6);
        // mcLaren.addGear(1, 5.3); // this functionality is now being done in the constructor.
        // mcLaren.addGear(2, 10.6); // this functionality is now being done in the constructor.
        // mcLaren.addGear(3, 15.9); // this functionality is now being done in the constructor.
        mcLaren.operateClutch(true);
        mcLaren.changeGear(1);
        mcLaren.operateClutch(false);
        System.out.println(mcLaren.wheelSpeed(1000));
        mcLaren.changeGear(2);
        System.out.println(mcLaren.wheelSpeed(3000));
        mcLaren.operateClutch(true);
        mcLaren.changeGear(3);
        mcLaren.operateClutch(false);
        System.out.println(mcLaren.wheelSpeed(6000));

    }

    // Both of these are used in `Gear_box_128_b()` below.
    private static Scanner scanner = new Scanner(System.in);
    private static Button btnPrint = new Button("print");

    public void Gear_box_128_b() {
        System.out.println("Inside Gear_box_128_b() method of Section09Methods class.");

        // // used up through 11:50 minutes
        // class ClickListener implements Button.OnClickListener{
        //         public ClickListener() {
        //             System.out.println("I've been attached.");
        //         }

        //     @Override
        //     public void onClick(String title) {
        //         // TODO Auto-generated method stub
        //               System.out.println(title + " was clicked.");  
        //     }
            
        // }
        // btnPrint.setOnClickListener(new ClickListener());
        
        // created at 12:45 minutes.
        btnPrint.setOnClickListener(new Button.OnClickListener(){
            @Override
            public void onClick(String title){
                System.out.println(title + " was clicked.");  
            }
        });
        
        listen();
    }

    private static void listen(){
        System.out.println("Select 0 or 1.");
        boolean quit = false;
        while(!quit){
            int choice = scanner.nextInt();
            scanner.nextLine();
            switch(choice){
                case 0:
                System.out.println("You've selected 0.");
                quit = true;
                break;
                case 1:
                System.out.println("You've selected 1.");
                btnPrint.onClick(); 
                
            }
        }
    }

}
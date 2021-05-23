package Section09InnerAndAbstractClassesAndInterfaces;
// import Section09InnerAndAbstractClassesAndInterfaces.PracticeInterface.RandomClass;

import Section09InnerAndAbstractClassesAndInterfaces.PracticeInterface.*;

public class Section09Methods {

    public void Random_Class(){
        System.out.println("inside Random_Class");
        RandomClass randomClass = new RandomClass();
        randomClass.myFirstFunction();
        randomClass.mySecondFunction(false);
        randomClass.myThirdFunction(13);
    }

    public void An_Interface(){
        System.out.println("inside An_Interface");
        // AnInterface again;
        // again = new RandomClass();
        AnInterface again = new RandomClass();
        again.myFirstFunction();
        again.mySecondFunction(true);
        again.myThirdFunction(2);
    }

}
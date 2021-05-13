package Section09InnerAndAbstractClassesAndInterfaces;
import Section09InnerAndAbstractClassesAndInterfaces.PracticeInterface.myClass;

public class Section09Methods {

    public void printing(){
        // System.out.println("inside printing");
        myClass myclass = new myClass();
        myclass.myPrint();
        myclass.myFirstFunction();
        myclass.mySecondFunction(false);
        myclass.myThirdFunction(4);

    }

}
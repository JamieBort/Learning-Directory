package Section09InnerAndAbstractClassesAndInterfaces.PracticeInterface;

public class RandomClass implements AnInterface {

    // void myFirstFunction();
    // boolean mySecondFunction(boolean aBooleanVariable);
    // int myThirdFunction(int aIntVariable);

    @Override
    public void myFirstFunction() {
        // TODO Auto-generated method stub
        System.out.println("myFirstFunction() method in the RandomClass class that implements AnInterface interface");        
    }

    @Override
    public boolean mySecondFunction(boolean aBooleanVariable) {
        // TODO Auto-generated method stub
        System.out.println("mySecondFunction() method in the RandomClass class that implements AnInterface interface");
        return false;
    }

    @Override
    public int myThirdFunction(int aIntVariable) {
        // TODO Auto-generated method stub
        System.out.println("mySecondFunction() method in the RandomClass class that implements AnInterface interface");
        return 0;
    }

}
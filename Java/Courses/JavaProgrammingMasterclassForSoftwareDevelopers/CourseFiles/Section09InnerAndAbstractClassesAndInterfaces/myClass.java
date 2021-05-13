package Section09InnerAndAbstractClassesAndInterfaces;

public class myClass implements myInterface {
    public void myPrint(){
        System.out.println("Inside myClass. Inside myPrint");
    }

    @Override
    public void myFirstFunction() {
        // TODO Auto-generated method stub
        System.out.println("Inside myClass. Inside myFirstFunction");
        
    }

    @Override
    public boolean mySecondFunction(boolean aBooleanVariable) {
        // TODO Auto-generated method stub
        System.out.println("Inside myClass. Inside mySecondFunction");
        return false;
    }

    @Override
    public int myThirdFunction(int aIntVariable) {
        // TODO Auto-generated method stub
        System.out.println("Inside myClass. Inside myThirdFunction");
        return 0;
    }
}
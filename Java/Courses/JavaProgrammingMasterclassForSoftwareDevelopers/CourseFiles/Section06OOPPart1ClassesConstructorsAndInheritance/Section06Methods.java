package Section06OOPPart1ClassesConstructorsAndInheritance;

public class Section06Methods {

    public void Coding_Exercise_29_Sum_Calculator() { // Name should be SimpleCalculator.
        Coding_Exercise_29_Sum_Calculator calculator = new Coding_Exercise_29_Sum_Calculator();
        calculator.setFirstNumber(5.0);
        calculator.setSecondNumber(4);
        System.out.println("add: " + calculator.getAdditionResult());
        System.out.println("subtract: " + calculator.getSubtractionResult());
        calculator.setFirstNumber(5.25);
        calculator.setSecondNumber(0);
        System.out.println("Multiply: " + calculator.getMultiplictionResult());
        System.out.println("Divide: " + calculator.getDivisionResult());
    }

    public void     Coding_Exercise_30_Person() {
        Coding_Exercise_30_Person person = new Coding_Exercise_30_Person();
        // person.setAge(10);
        // person.setFirstName("Jamie");
        // person.setLastName("Bort");
        // person.getAge();
        // person.getFirstName();
        // person.getLastName();
        // System.out.println(person.getLastName());

        person.setFirstName("");
        person.setLastName("");
        person.setAge(10);
        System.out.println("full Name: " + person.getFullName());
        System.out.println("teen: " + person.isTeen());
        person.setFirstName("John");
        person.setAge(18);
        System.out.println("full Name: " + person.getFullName());
        System.out.println("teen: " + person.isTeen());
        person.setLastName("smith");
        System.out.println("full Name: " + person.getFullName());
    }
    
}
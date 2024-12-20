package Section06OOPPart1ClassesConstructorsAndInheritance;

// import Section06OOPPart1ClassesConstructorsAndInheritance.*;
// package Section09InnerAndAbstractClassesAndInterfaces;
import Section09InnerAndAbstractClassesAndInterfaces.*;
import Section06OOPPart1ClassesConstructorsAndInheritance.InheritanceChallengePart1ChallengeExercise88.Car;
import Section06OOPPart1ClassesConstructorsAndInheritance.InheritanceChallengePart1ChallengeExercise88.Mustang;
import Section06OOPPart1ClassesConstructorsAndInheritance.InheritanceChallengePart1ChallengeExercise88.Vehicle;

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

    public void Coding_Exercise_30_Person() {
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

    public void Constructors_Part_1_Challenge_Exercise_79() {
        Constructors_Part_1_Challenge_Exercise_79 account = new Constructors_Part_1_Challenge_Exercise_79();
        account.setBalance(100);
        account.getBalance();
        System.out.println(account.getBalance());
        account.setBalance(145);
        System.out.println(account.getBalance());
        account.withdraw(10);
        System.out.println(account.getBalance());
        account.deposit(1030);
        System.out.println(account.getBalance());
    }

    public void Constructors_Part_2_Challenge_Exercise_80() {
        System.out.println("Inside Constructors_Part_2_Challenge_Exercise_80() method of Section06Methods class.");

        // VipCustomer vipCustomer = new VipCustomer();
        // VipCustomer vipCustomer = new VipCustomer("Dave", "Dave@Dave.com");
        VipCustomer vipCustomer = new VipCustomer("Sam", 1500, "Sam@Sam.com");

        // vipCustomer.getCreditLimit();
        vipCustomer.printOutEveryting();
        vipCustomer.setCreditLimit(2);
        vipCustomer.setEmailAddress("new@email.com");
        vipCustomer.setName("newName");
        vipCustomer.printOutEveryting();
    }

    public void InheritanceChallengePart1ChallengeExercise88() {
        Vehicle vehicle1 = new Vehicle(2);
        Vehicle vehicle2 = new Vehicle(6, 9);
        // vehicle.abc();

        // Car car1 = new Car(4);
        // Car car2 = new Car(8, 9);
        // // car.abc();

        // Mustang mustang1 = new Mustang();
        // Mustang mustang2 = new Mustang();
        // mustang.abc();
    }

}
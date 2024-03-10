// Create a new class VipCustomer
// it should have 3 fields name, credit limit, and email address.
// create 3 constructors
// 1st constructor empty should call the constructor with 3 parameters with default values
// 2nd constructor should pass on the 2 values it receives and add a default value for the 3rd
// 3rd constructor should save all fields.
// create getters only for this using code generation of intellij as setters wont be needed
// test and confirm it works.

package Section06OOPPart1ClassesConstructorsAndInheritance;

// public class Constructors_Part_2_Challenge_Exercise_80 {
public class VipCustomer {
    private String name;
    private int creditLimit;
    private String emailAddress;

    // 1st constructor empty should call the constructor with 3 parameters with
    // default values
    public VipCustomer() {
        this("Jim", 800, "Jim@Jim.com");
        System.out.println("Inside VipCustomer() no-argument constructor.");
    }

    // 2nd constructor should pass on the 2 values it receives and add a default
    // value for the 3rd
    public VipCustomer(String name, String emailAddress) {
        this(name, 1000, emailAddress);
        System.out.println("Inside VipCustomer() two-argument constructor.");
    }

    // 3rd constructor should save all fields.
    public VipCustomer(String name, int creditLimit, String emailAddress) {
        this.name = name;
        this.creditLimit = creditLimit;
        this.emailAddress = emailAddress;
        System.out.println("Inside VipCustomer() three-argument constructor.");
    }

    /**
     * @return String return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return int return the creditLimit
     */
    public int getCreditLimit() {
        // System.out.println("The Credit Limit is: "+ creditLimit);
        return creditLimit;
    }

    /**
     * @param creditLimit the creditLimit to set
     */
    public void setCreditLimit(int creditLimit) {
        this.creditLimit = creditLimit;
    }

    /**
     * @return String return the emailAddress
     */
    public String getEmailAddress() {
        return emailAddress;
    }

    /**
     * @param emailAddress the emailAddress to set
     */
    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public void printOutEveryting(){
        System.out.println("The customer's name is\t\t\t: "+ getName()+"\nThe customer's credit limit is\t\t: $"+ getCreditLimit()+"\nAnd the customer's email addresss is: \t: "+getEmailAddress());
    }

}
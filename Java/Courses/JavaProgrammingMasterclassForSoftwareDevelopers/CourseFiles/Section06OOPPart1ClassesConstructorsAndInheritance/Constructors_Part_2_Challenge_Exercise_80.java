// Create a new class for a bank account
// Create fields for the account number, balance, customer name, email and phone number.
//
// Create getters and setters for each field
// Create two additional methods
// 1.  To allow the customer to deposit funds (this should increment the balance field).
// 2.  To allow the customer to withdraw funds.  This should deduct from the balance field,
// but not allow the withdrawal to complete if their are insufficient funds.
// You will want to create various code in the Main class (the one created by IntelliJ) to
// confirm your code is working.
// Add some System.out.println's in the two methods above as well.

//        Account bobsAccount = new Account(); // "12345", 0.00, "Bob Brown", "myemail@bob.com",
//              //  "(087) 123-4567");
//        System.out.println(bobsAccount.getNumber());
//        System.out.println(bobsAccount.getBalance());
//
//        bobsAccount.withdrawal(100.0);
//
//        bobsAccount.deposit(50.0);
//        bobsAccount.withdrawal(100.0);
//
//        bobsAccount.deposit(51.0);
//        bobsAccount.withdrawal(100.0);
//
//        Account timsAccount = new Account("Tim", "tim@email.com","12345");
//        System.out.println(timsAccount.getNumber() + " name " + timsAccount.getCustomerName());

// Create a new class VipCustomer
// it should have 3 fields name, credit limit, and email address.
// create 3 constructors
// 1st constructor empty should call the constructor with 3 parameters with default values
// 2nd constructor should pass on the 2 values it receives and add a default value for the 3rd
// 3rd constructor should save all fields.
// create getters only for this using code generation of intellij as setters wont be needed
// test and confirm it works.
        
package Section06OOPPart1ClassesConstructorsAndInheritance;
// System.out.println("Inside Constructors_Part_2_Challenge_Exercise_80() method of Section06Methods class.");

public class Constructors_Part_2_Challenge_Exercise_80 {
    // public class VipCustomer {
    private int number;
    private int balance;
    private String customerName;
    private String email;
    private String phoneNumber;

    /**
     * @return int return the number
     */
    public int getNumber() {
        return number;
    }

    /**
     * @param number the number to set
     */
    public void setNumber(int number) {
        this.number = number;
    }

    /**
     * @return int return the balance
     */
    public int getBalance() {
        return balance;
    }

    /**
     * @param balance the balance to set
     */
    public void setBalance(int balance) {
        this.balance = balance;
    }

    /**
     * @return String return the customerName
     */
    public String getCustomerName() {
        return customerName;
    }

    /**
     * @param customerName the customerName to set
     */
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    /**
     * @return String return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return String return the phoneNumber
     */
    public String getPhoneNumber() {
        return phoneNumber;
    }

    /**
     * @param phoneNumber the phoneNumber to set
     */
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void deposit(int depositAmount) { // 1. To allow the customer to deposit funds (this should increment the
                                             // balance field).
        setBalance(getBalance()+depositAmount);
    }

    public void withdraw(int withdrawAmount) { // 2. To allow the customer to withdraw funds. This should deduct from the balance field, but not allow the withdrawal to complete if their are insufficient funds.
        if (withdrawAmount <= getBalance()) {
            setBalance(getBalance()-withdrawAmount);
        } else {
            System.out.println("There is not enough funds to withdraw " + withdrawAmount +".");
        }

    }

}
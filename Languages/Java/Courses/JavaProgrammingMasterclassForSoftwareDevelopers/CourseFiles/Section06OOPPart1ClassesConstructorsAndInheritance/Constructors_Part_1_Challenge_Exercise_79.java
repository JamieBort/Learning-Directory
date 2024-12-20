// Create a new class for a bank account
// Create fields for the account number, balance, customer name, email and phone number.
//
// Create getters and setters for each field
// Create two additional methods
// 1. To allow the customer to deposit funds (this should increment the balance field).
// 2. To allow the customer to withdraw funds. This should deduct from the balance field,
// but not allow the withdrawal to complete if their are insufficient funds.
// You will want to create various code in the Main class (the one created by IntelliJ) to
// confirm your code is working.
// Add some System.out.println's in the two methods above as well.

package Section06OOPPart1ClassesConstructorsAndInheritance;
// System.out.println("Inside Constructors_Part_2_Challenge_Exercise_80() method of Section06Methods class.");

public class Constructors_Part_1_Challenge_Exercise_79 {
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
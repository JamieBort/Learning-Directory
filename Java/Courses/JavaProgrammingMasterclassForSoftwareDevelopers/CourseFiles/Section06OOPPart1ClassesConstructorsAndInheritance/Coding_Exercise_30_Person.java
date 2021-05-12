package Section06OOPPart1ClassesConstructorsAndInheritance;

public class Coding_Exercise_30_Person { // Name should be SimpleCalculator.
    private String firstName;
    private String lastName;
    private int age;

    /**
     * @return double return the firstName
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @param firstName the firstName to set
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * @return double return the lastName
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param lastName the lastName to set
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * @return int return the age
     */
    public int getAge() {
        return age;
    }

    /**
     * @param age the age to set
     */
    public void setAge(int age) {
        if (age < 0 || age > 100)
            this.age = 0;
        else
            this.age = age;
    }

    public boolean isTeen() {
        if (age > 12 && age < 20)
            return true;
        else
            return false;
    }

    public String getFullName() {
        if(this.firstName == "" && this.lastName=="") return "";
        else return this.firstName + " " + this.lastName;
    }

}
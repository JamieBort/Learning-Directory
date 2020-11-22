package com.company;

public class Person {
    String firstName;
    String lastName;
    int age;

//    public Person(String firstName, String lastName, int age) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.age = age;
//    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public int getAge() {
        return age;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setAge(int age) {
        if(age<0 || age>100){
            this.age = 0;
        }else {
            this.age = age;
        }
    }

    public boolean isTeen(){
        if(age>12 && age<20){
            return true;
        }
        return false;
    }
    public String getFullName(){
//        The following three if statements seem redundant.
//        if(getFirstName()=="" && getLastName()==""){
//            return "";
//        }
//
//        if(getLastName()==""){
//            return getFirstName();
//        }
//
//        if(getFirstName()==""){
//            return getLastName();
//        }

        return getFirstName() + " " + getLastName();

    }
}

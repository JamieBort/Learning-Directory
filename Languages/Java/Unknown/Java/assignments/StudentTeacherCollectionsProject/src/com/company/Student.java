package com.company;

//        Create a Student JavaBean (empty constructor and getters and setters)

//        firstName
//        lastName
//        id
//        grade


//from: https://newline.theironyard.com/cohorts/15/courses/7/objective_lessons/91

//A Java Bean, also sometimes referred to as a Plain Old Java Object ("POJO"). These terms refer to classes that meet the following qualifications:

//    Must have a public default constructor that takes no arguments (may have additional constructors)
//    Must have getters and setters for all variables which follow appropriate naming conventions (int numTigers -> getNumTigers())
//    Must be serializable. This is a term we'll discuss more later, but essentially it means that your class can be saved into a database or other format.


public class Student {
    String firstName;
    String lastName;
    int id;
    int  grade;



    public Student(String firstName, String lastName, int id, int grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.grade = grade;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }
}

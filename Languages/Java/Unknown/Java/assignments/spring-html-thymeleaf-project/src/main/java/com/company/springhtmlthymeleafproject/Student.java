package com.company.springhtmlthymeleafproject;

public class Student {
//    Create a Student JavaBean (empty constructor and getters and setters)
//    String firstName
//    String lastName
//    Grade grade (see Grade enum in starter files)
//    Generate empty constructor and getter and setters.

    private String firstName;
    private String lastName;
    private Grade grade;

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

    public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }

    public Student() {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
    }
}

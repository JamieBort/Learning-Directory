package com.company;

import java.time.LocalDate;

public class Employee {

    private String name;
    private LocalDate hireDate;
    private String department;

    public Employee(String name, LocalDate hireDate, String department) {
        this.name = name;
        this.hireDate = hireDate;
        this.department = department;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getHireDate() {
        return hireDate;
    }

    public void setHireDate(LocalDate hireDate) {
        this.hireDate = hireDate;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", hireDate=" + hireDate +
                ", department='" + department + '\'' +
                '}';
    }
}

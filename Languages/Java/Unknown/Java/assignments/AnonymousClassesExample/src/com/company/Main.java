//Anonymous classes are ones that are defined and instantiated at the same time. A common use case for this would be sorting ArrayLists. The ArrayList class has a method named sort(). The sort() method is used to sort the contents of an ArrayList. However, because an ArrayList can hold any type of data, there's no way to define ahead of time all of the possible ways to compare any type of data. For example, how would you sort a collection of Employee objects? By their name property? By seniority? It really doesn't matter because ArrayList doesn't decide this for you at all.

//        Instead, to sort an ArrayList you use a Comparator. Comparator is an interface that defines one method, compare(). Programmers create implementations of the Comparator interface to sort data in whatever way they prefer.

//        Typically comparison operations are only a few lines of code and only apply to a specific situation. It is sometimes overkill to define an entirely new class that will only be used in one place in a single class. Situations like this are where anonymous classes can be used.

package com.company;

import java.time.LocalDate;
        import java.time.Month;
        import java.util.ArrayList;
        import java.util.Comparator;

public class Main {

    public static void main(String[] args) {
        // write your code here
        ArrayList<Employee> employees = new ArrayList<>();
        employees.add(new Employee("Sarvesh Fathi", LocalDate.of(2017, Month.JANUARY, 31), "IT"));
        employees.add(new Employee("Gwenneg Akhmad", LocalDate.of(2010, Month.MARCH, 10), "HR"));
        employees.add(new Employee("Hunor Madhur", LocalDate.of(2016, Month.APRIL, 1), "Marketing"));
        employees.add(new Employee("Padma Andrea", LocalDate.of(1999, Month.JUNE, 8), "IT"));
        employees.add(new Employee("Linda Maialen", LocalDate.of(2005, Month.APRIL, 21), "HR"));

//        Anonymous Class No. 1
        // sort employees by their first names
        employees.sort(new Comparator<Employee>() {
            @Override
            public int compare(Employee emp1, Employee emp2) {
                return emp1.getName().compareTo(emp2.getName());
            }
        });

        // print the sorted list of employees
        System.out.println(employees);

        //        Anonymous Class No. 2
        // sort employees by their last names
        employees.sort(new Comparator<Employee>() {
            @Override
            public int compare(Employee emp1, Employee emp2) {
                return emp1.getName().split(" ")[1].compareTo(emp2.getName().split(" ")[1]);
            }
        });

        // print the sorted list of employees
        System.out.println(employees);

        //        Anonymous Class No. 3
        // sort employees by seniority
        employees.sort(new Comparator<Employee>() {
            @Override
            public int compare(Employee emp1, Employee emp2) {
                return emp1.getHireDate().compareTo(emp2.getHireDate());
            }
        });

        // print the sorted list of employees
        System.out.println(employees);


    }
}

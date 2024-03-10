//The ArrayList's sort() method expects a Comparator object to be provided. What we see being passed doesn't look like an instance of a Comparator, but it is.

//        If we look at the Comparator interface we can see that it defines only one method we must implement, compare(). Since this is the only method required, the Comparator interface is said to be functional.

//        The Java compiler will see the syntax above and reason that, because the Comparator interface only specifies one method and because lambdas are anonymous methods, it needs to effectively generate an anonymous class and implement the one method as specified by the lambda.

//        More simply put, the sort() method will run the code to the right of the -> symbol, providing arguments with the names specified to the left. You don't need to specify argument data types or method return types; that is all specified by the functional interface.

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

//        use of lambda
        // sort employees by their first names
        employees.sort((emp1, emp2) -> emp1.getName().compareTo(emp2.getName()));

        // print the sorted list of employees
        System.out.println(employees);

        //        use of lambda
        // sort employees by their last names
        employees.sort((emp1, emp2) -> emp1.getName().split(" ")[1].compareTo(emp2.getName().split(" ")[1]));

        // print the sorted list of employees
        System.out.println(employees);

        //        use of lambda
        // sort employees by seniority
        employees.sort((emp1, emp2) -> emp1.getHireDate().compareTo(emp2.getHireDate()));

        // print the sorted list of employees
        System.out.println(employees);


    }
}
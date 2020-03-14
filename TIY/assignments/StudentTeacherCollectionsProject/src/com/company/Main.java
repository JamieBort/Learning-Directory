package com.company;

import java.util.*;

public class Main {

    public static void main(String[] args) {
        // write your code here

        //        In the main() method of Main create an ArrayList of 15 students which represents all the 1st grade students at an elementary school. Make sure the ids are unique and set the grade to 1.


//        Instantiating my student array of objects
        ArrayList<Student> students = new ArrayList<Student>();


        //        adding to student: first name, last name, unique i.d. , and grade.
        Student student1 = new Student("Jessica", "Manning", 1, 1);
        students.add(student1);
        Student student2 = new Student("Guadalupe", "Copeland", 2, 1);
        students.add(student2);
        Student student3 = new Student("Maureen", "Schultz", 3, 1);
        students.add(student3);
        Student student4 = new Student("Chester", "Bailey", 4, 1);
        students.add(student4);
        Student student5 = new Student("Wanda", "Frank", 5, 1);
        students.add(student5);
        Student student6 = new Student("Lynda", "Zimmerman", 6, 1);
        students.add(student6);
        Student student7 = new Student("Valerie", "Saunders", 7, 1);
        students.add(student7);
        Student student8 = new Student("Krystal", "Mcdaniel", 8, 1);
        students.add(student8);
        Student student9 = new Student("Jared", "Parks", 9, 1);
        students.add(student9);
        Student student10 = new Student("Angela", "Mendez", 11, 1);
        students.add(student10);
        Student student11 = new Student("Linda", "Cain", 12, 1);
        students.add(student11);
        Student student12 = new Student("Ellen", "Morrison", 13, 1);
        students.add(student12);
        Student student13 = new Student("Tomas", "Padilla", 14, 1);
        students.add(student13);
        Student student14 = new Student("Delbert", "Love", 15, 1);
        students.add(student14);
        Student student15 = new Student("Blanca", "Hall", 10, 1);
        students.add(student15);
        System.out.println(students);


        //        Code a HashMap that takes a Teacher for a key and a Set of students for the value (not a List of students). Each Teacher will have 5 different students in a HashSet.

        //put the students into three groups
        Set<Student> classOne = new HashSet<>();
        classOne.add(student1);
        classOne.add(student2);
        classOne.add(student3);
        classOne.add(student4);
        classOne.add(student5);

        Set<Student> classTwo = new HashSet<>();
        classTwo.add(student6);
        classTwo.add(student7);
        classTwo.add(student8);
        classTwo.add(student9);
        classTwo.add(student10);

        Set<Student> classThree = new HashSet<>();
        classThree.add(student11);
        classThree.add(student12);
        classThree.add(student13);
        classThree.add(student14);
        classThree.add(student15);

        //create an array list of teachers
        ArrayList<Teacher> teachers = new ArrayList<>();

        Teacher teacher1 = new Teacher("Minerva", "Mcgonnagal", 1, 1);
        teachers.add(teacher1);

        Teacher teacher2 = new Teacher("Albus", "Dumbledore", 2, 1);
        teachers.add(teacher2);

        Teacher teacher3 = new Teacher("Professor", "Sprout", 3, 1);
        teachers.add(teacher3);


        System.out.println(teachers);


        //create a hashmap with teacher as the key and student as the value

        Map<Teacher, Set> roster = new HashMap<>();
        roster.put(teacher1, classOne);
        roster.put(teacher2, classTwo);
        roster.put(teacher3, classThree);

        //print out the map keys in a for each loop (use the keySet() method).

        for (Teacher key: roster.keySet()) {
            System.out.println(key);
        }
//Print out the map values in a for loop (use the values() method).
        for (Set value : roster.values()) {
            System.out.println(value);

        }

    }
}

//For this activity you will be assigning Students to Teachers using Lists, Sets and a Map

//    Getting Started

//    Open up a new project in IntelliJ.

//        Assignment

//        Create a Student JavaBean (empty constructor and getters and setters)

//        firstName
//        lastName
//        id
//        grade
//        In the main() method of Main create an ArrayList of 15 students which represents all the 1st grade students at an elementary school. Make sure the ids are unique and set the grade to 1.

//        Generate equals(), hashCode() and toString() using IntelliJ. Re-write equals() and hashCode() to use the id variable.

//        The Teacher class is the same as the Student class (Hint: you could use this fact to save yourself some time) Teacher

//        firstName
//        lastName
//        id
//        grade
//        Instantiate 3 Teachers just like you did for Students and add to an ArrayList of teachers.

//        Code a HashMap that takes a Teacher for a key and a Set of students for the value (not a List of students). Each Teacher will have 5 different students in a HashSet.

//        Print out the map keys in a for loop (use the keySet() method). Print out the map values in a for loop (use the values() method).

//Extras

//    Print out the map entries in a for loop (use the entrySet() method).







package com.ironyard;
import java.util.*;

public class Main {

    public static void main(String[] args) {

        //create an array list of 15 students
        ArrayList<Student> students = new ArrayList<>();

        Student student1 = new Student("Sevorous", "Snape", 1, 1);
        students.add(student1);

        Student student2 = new Student("Lord", "Voldemort", 2, 1);
        students.add(student2);

        Student student3 = new Student("Hermoine", "Granger", 3, 1);
        students.add(student3);

        Student student4 = new Student("Harry", "Potter", 4, 1);
        students.add(student4);

        Student student5 = new Student("Ron", "Weasley", 5, 1);
        students.add(student5);

        Student student6 = new Student("Ginny", "Weasley", 6, 1);
        students.add(student6);

        Student student7 = new Student("Draco", "Malfoy", 7, 1);
        students.add(student7);

        Student student8 = new Student("Nevil", "Longbottom", 8, 1);
        students.add(student8);

        Student student9 = new Student("Bill", "Weasley", 9, 1);
        students.add(student9);

        Student student10 = new Student("Lavender", "Brown", 10, 1);
        students.add(student10);

        Student student11 = new Student("Pavati", "Patel", 11, 1);
        students.add(student11);

        Student student12 = new Student("George", "Weasley", 12, 1);
        students.add(student12);

        Student student13 = new Student("Crab", "Doe", 13, 1);
        students.add(student13);

        Student student14 = new Student("Lucious", "Malfoy", 14, 1);
        students.add(student14);

        Student student15 = new Student("Collin", "Creevy", 15, 1);
        students.add(student15);

        System.out.println(students);

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

        //print out the map keys in a for each loop

        for (Teacher key: roster.keySet()) {
            System.out.println(key);
        }

        for (Set value : roster.values()) {
            System.out.println(value);

        }

    }
}

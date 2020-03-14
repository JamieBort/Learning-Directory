package com.company;

import java.util.*;

public class Main {

    public static void main(String[] args) {

        Student student1 = new Student("Bob", "Citizen", 1, 1);
        Student student2 = new Student("John", "Citizen", 2, 1);
        Student student3 = new Student("Jane", "Citizen", 3, 1);
        Student student4 = new Student("Ann", "Citizen", 4, 1);
        Student student5 = new Student("James", "Citizen", 5, 1);
        Student student6 = new Student("Dick", "Citizen", 6, 1);
        Student student7 = new Student("Lisa", "Citizen", 7, 1);
        Student student8 = new Student("Linda", "Citizen", 8, 1);
        Student student9 = new Student("Susan", "Citizen", 9, 1);
        Student student10 = new Student("Harrison", "Citizen", 10, 1);
        Student student11 = new Student("Rebecca", "Citizen", 11, 1);
        Student student12 = new Student("Matt", "Citizen", 12, 1);
        Student student13 = new Student("Gary", "Citizen", 13, 1);
        Student student14 = new Student("Reed", "Citizen", 14, 1);
        Student student15 = new Student("Sarah", "Citizen", 15, 1);

        Teacher teacher1 = new Teacher("Teacher", "One", 1, 1);
        Teacher teacher2 = new Teacher("Teacher", "two", 2, 1);
        Teacher teacher3 = new Teacher("Teacher", "three", 3, 1);


        ArrayList<Object> students = new ArrayList<>();
        ArrayList<Object> teachers = new ArrayList<>();

        students.add(student1);
        students.add(student2);
        students.add(student3);
        students.add(student4);
        students.add(student5);
        students.add(student6);
        students.add(student7);
        students.add(student8);
        students.add(student9);
        students.add(student10);
        students.add(student11);
        students.add(student12);
        students.add(student13);
        students.add(student14);
        students.add(student15);

        teachers.add(teacher1);
        teachers.add(teacher2);
        teachers.add(teacher3);


        Set<Student> One = new HashSet<>();
        One.add(student1);
        One.add(student2);
        One.add(student3);
        One.add(student4);
        One.add(student5);

        Set<Student> Two = new HashSet<>();
        Two.add(student6);
        Two.add(student7);
        Two.add(student8);
        Two.add(student9);
        Two.add(student10);

        Set<Student> Three = new HashSet<>();
        Three.add(student11);
        Three.add(student12);
        Three.add(student13);
        Three.add(student14);
        Three.add(student15);

        Set<Teacher> Teacher = new HashSet<>();
        Teacher.add(teacher1);
        Teacher.add(teacher2);
        Teacher.add(teacher3);


        Map<Teacher, Set> hm = new HashMap();

        hm.put(teacher1, One);
        hm.put(teacher2, Two);
        hm.put(teacher3, Three);


        for (Teacher key : hm.keySet()) {
            System.out.println("key" + key);
            for (Set value : hm.values()) {
                System.out.println("value" + value);


            }
        }
    }
}

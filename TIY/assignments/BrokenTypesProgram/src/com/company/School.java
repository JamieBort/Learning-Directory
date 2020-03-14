package com.company;


public class School {

    public static void main(String[] args) {

//        variables
    int numStudents;
    int numTeachers;
    double averageGPA;


    String name;
    String CityInWhichTheSchoolResides;
    boolean isPublic;
    String city;


    numStudents = 403;
    city = "Atlanta, GA";
    numTeachers = 62;
    averageGPA = 2.98;
    name = "Grady High School";
    isPublic = true;

        System.out.println("School: " + name);
        System.out.println("Teachers: " + numTeachers);

        Population(numStudents, numTeachers);
        Location(name, city);
    }


public static void Population(int numStudents, int numTeachers){

    if (numStudents > 10) {
        System.out.println("We have at least 10 students");
    } else if (numTeachers > 10) {
        System.out.println("We have at least 5 teachers");
    }
}


    public static void Location (String name, String city) {

    System.out.println(name + ", " + city);
    }
}


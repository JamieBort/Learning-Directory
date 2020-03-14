package com.herbie;

import com.herbie.common.Student;
import com.herbie.common.Teacher;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        ArrayList<Student> students = new ArrayList<>();
        ArrayList<Teacher> teachers = new ArrayList<>();

        HashSet<Student> studentSet1 = new HashSet<>();
        HashSet<Student> studentSet2 = new HashSet<>();
        HashSet<Student> studentSet3 = new HashSet<>();

        HashMap<Teacher, HashSet<Student>> teacherStudentMap = new HashMap<>();

        // Add 15 new students to the 'students' ArrayList and give them each a unique id.
        // Then add 5 students to each HashSet of students.
        for (int i = 0; i < 15; i++) {
            students.add(i, new Student());
            students.get(i).setId(i + 1);
            students.get(i).setGrade(1);

            if (i < 5) {
                studentSet1.add(students.get(i));
            } else if (i < 10) {
                studentSet2.add(students.get(i));
            } else if (i < 15) {
                studentSet3.add(students.get(i));
            }
        }

        // Add 3 new teachers to the 'teachers' ArrayList and give them each a unique id.
        for (int i = 0; i < 3; i++) {
            teachers.add(i, new Teacher());
            teachers.get(i).setId(i + 1);
            teachers.get(i).setGrade(1);
        }

        // Map each student set to each teacher.
        teacherStudentMap.put(teachers.get(0), studentSet1);
        teacherStudentMap.put(teachers.get(1), studentSet2);
        teacherStudentMap.put(teachers.get(2), studentSet3);

        for (Teacher teacher: teacherStudentMap.keySet()) {
            System.out.println(teacher);
        }

        System.out.println();

        for (HashSet studentSet: teacherStudentMap.values()) {
            System.out.println(studentSet);
        }

        System.out.println();

        for (Map.Entry studentSet: teacherStudentMap.entrySet()) {
            System.out.println(studentSet);
        }

        System.out.println();
    }
}

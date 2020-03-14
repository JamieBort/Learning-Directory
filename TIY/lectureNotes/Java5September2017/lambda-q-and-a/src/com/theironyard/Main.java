package com.theironyard;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.theironyard.foobar.Widget;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by doug on 8/25/17.
 */
public class Main {
    public static void main(String[] args) throws IOException {

        //Person.getFirstName()
        Person abe = new Person("Abe", "Lincoln", 213);
        Person belva = new Person("Belva", "Shanahan", 73);

        abe.getFirstName();
        abe.shoeSize = 9;
        belva.shoeSize = 6;

        System.out.println("abe " + abe.shoeSize);
        System.out.println("belva " + belva.shoeSize);

        System.out.println("abe " + abe.minimumAge);

        System.out.println("belva " + belva.minimumAge);

        System.out.println("Person " + Person.minimumAge);

        abe.minimumAge = -5;
        abe.shoeSize = 9.5;
        belva.shoeSize = 6.5;


        System.out.println("abe " + abe.minimumAge);

        System.out.println("belva " + belva.minimumAge);

        System.out.println("Person " + Person.minimumAge);


        System.out.println(Person.getAgeOfRetirement());
        System.out.println(abe.getAgeOfRetirement());
        System.out.println(belva.getAgeOfRetirement());

        LocalDate today = LocalDate.of(2017, 9, 5);




//        List<Person> people = Arrays.asList(new Person("Abe", "Lincoln", 213), new Person("George", "Washington", 333), new Person("Fred", "Fredson", 18));
//

//
//        String peopleAsJSON = new ObjectMapper().writeValueAsString(people);
//
//        Files.write(Paths.get("./something.json"), peopleAsJSON.getBytes());

        //System.out.println(personAsJSON);

        /*

        {
            "firstName": "Abe",
            "lastName": "Lincoln",
            "age": 213
        }

         */



//        List<Tupple> tupples = Arrays.asList(new Tupple(1, 9), new Tupple(7, 3), new Tupple(4, 1), new Tupple(374, 46));
//
//        // 10, 10, 5, 420
//
//        List<Integer> sums = tupples.stream()
//                // add each tupples numbers together
//                .map(tupple -> {
//                    if(tupple.a == 1) {
//                        return -1;
//                    } else {
//                        return tupple.a * tupple.b;
//                    }
//                })
//                .collect(Collectors.toList());
//
//        System.out.println(sums);

//        List<String> foo = new ArrayList<>();
//        foo.add("Banana");
//        foo.add("Aomato");
//        foo.add("aiwi");
//        foo.add("Aoll Pepper");
//        foo.add("Cucumber");
//        foo.add("Apples");
//
//        System.out.println(foo);
//
//        List<String> foosOfA =
//                // foo is a list of strings
//                foo
//                        // make a conveyor belt of the strings in foo so we can
//                        // work with string at a time
//                        .stream()
//                        // check each individual string to see if it starts with an A
//                        // if not, bye bye
//                        .filter(aParticularString -> aParticularString.substring(0, 1).equals("A"))
//                        // do another filter
//                        // check to see if each individual string contains
//                        .filter(aParticularString -> aParticularString.contains("o"))
//                        // take the stream and turn it into a list
//                        .collect(Collectors.toList());
//
//        System.out.println(foosOfA);
//
//        List<String> foosOfA2 =
//                // foo is a list of strings
//                foo
//                        // make a conveyor belt of the strings in foo so we can
//                        // work with string at a time
//                        .stream()
//                        // check each individual string to see if it starts with an A and contains an "o"
//                        // if not, bye bye
//                        .filter(aParticularString -> aParticularString.substring(0, 1).equals("A") && aParticularString.contains("o"))
//                        // take the stream and turn it into a list
//                        .collect(Collectors.toList());
//
//        System.out.println(foosOfA2);


//
//        List<Integer> foo = Arrays.asList(1, 3, 2 , 4, 5);
//
//        // old and busted
//        //foo.sort(new MyComparator());
//
//        // just old
//        foo.sort(new Comparator<Integer>() {
//            @Override
//            public int compare(Integer o1, Integer o2) {
//                return o1.compareTo(o2);
//            }
//        });
//
//        // new hotness
//        foo.sort((o1, o2) -> o1.compareTo(o2));
//
//        foo.sort(Comparator.naturalOrder());
//
//        System.out.println(foo);

    }
}

class Person {
    private String firstName;
    private String lastName;
    private int age;

    public double shoeSize;

    public static int minimumAge = 0;

    public Person(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public static int getAgeOfRetirement(){
        return 95;
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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

class Tupple{
    public int a;
    public int b;

    public Tupple(int a, int b) {
        this.a = a;
        this.b = b;
    }
}

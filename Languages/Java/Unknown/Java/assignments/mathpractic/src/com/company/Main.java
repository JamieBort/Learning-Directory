package com.company;

public class Main {

    public static void main(String[] args) {
        // write your code here

        class Animal {

            String name;
            Animal friend;

            public Animal(String name) {
                this.name = name;
            }

            public void speak() {
                System.out.println("WOOF?");
            }
        }

        public class Application {
            public static void main(String[] args) {

                //instantiate Animal
                Animal myAnimal = new Animal("Fred");

                //Accessing member method
                myAnimal.speak();

                //Accessing member variable
                System.out.println(myAnimal.name);
            }
        }
    }
}
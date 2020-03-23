package com.company;


public class RunnableDemo {
    public static void main(String[] args) {

        // !! - Write an anonymous Runnable class here
        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                System.out.println("I'm still learning this.");
            }
        };
        runnable.run();

        //It can just print out "Anonymous run" or similar


        // !! - Write a lambda function here
        //It can also print out something like "Lambda run"
        Runnable anonRun = () -> System.out.println("How does this work?");

        anonRun.run();
    }
}
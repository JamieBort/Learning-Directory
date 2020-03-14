package com.company;

    // The application class
    public class MapApplication{

        // The `main` function is the
        // entry point for the application
        // When Java runs this program
        // `main` is the first thing thats run
        public static void main(String[] args) {

            // Create two instances of Coordinate

            // A coordinate object for Columbia, SC
            Coordinate scCapital = new Coordinate( "34.0007° N", "81.0348° W", "Columbia, South Carolina" );
            // A coordinate object for Sacramento, CA
            Coordinate caCapital = new Coordinate( "38.5816° N", "121.4944° W", "Sacramento, California" );

            // Print the description for each instance
            System.out.println( scCapital.toString() );
            //If we don't call toString, the println function will call it for us
            System.out.println( caCapital );
        }
    }
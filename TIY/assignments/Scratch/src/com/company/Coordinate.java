package com.company;

public class Coordinate {


    // to define a class use the `class` keyword
// and give the class a name
// all of the class fields, methods
// and constructors go inside in between the curly braces


        // Class fields
        // Each instance will have these fields
        String latitude;
        String longitude;
        String label;

        // Class constructor function
        public Coordinate( String latitude, String longitude, String label ){

            // Assign values to the new instance fields
            this.latitude = latitude;
            this.longitude = longitude;
            this.label = label;
        }

        // Class method
        // This method is available to each instance
        public String toString(){
            return this.label + " is located at " + this.latitude + ", " + this.longitude + ".";
        }
    }
package com.company;

public class Circle {
    private double radius;

    public Circle(double radius) {
        if(radius<0){
            this.radius=0;
        } else {
            this.radius = radius;
        }
    }

    public double getRadius() {
        return radius;
    }

    public double getArea(){
//        return radius*radius*Math.PI; // Which of these to use?
        return getRadius()*getRadius()*Math.PI;
    }

}

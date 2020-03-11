package com.company;

public class Main {

    public static void main(String[] args) {
        Wall wall = new Wall(5,4);
        System.out.println("Area: " + wall.getArea());

        wall.setHeight(-1.5);
        wall.setWidth(2.2);
        System.out.println("Area: " + wall.getArea());
        System.out.println("Width: " + wall.getWidth());;
        System.out.println("Height: " + wall.getHeight());
    }
}

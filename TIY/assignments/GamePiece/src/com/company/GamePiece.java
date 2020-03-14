package com.company;

import java.util.Random;

public class GamePiece {

    //    my variables
    int positionX;
    int positionY;
    boolean frozen;
    String name;
    String color;
    int minX;
    int maxX;
    int minY;
    int maxY;

    //            my getters and setters

    public int getMinX() { return minX; }

    public int getMaxX() {
        return maxX;
    }

    public int getMinY() {
        return minY;
    }

    public int getMaxY() {
        return maxY;
    }

    public int getPositionX() {
        return positionX;
    }

    public int getPositionY() {
        return positionY;
    }

    public boolean isFrozen() {
        return frozen;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    //    my constructor
    public GamePiece() {
        this.positionX = 0;
        this.positionY = 0;
        this.frozen = false;
        this.name = name;
        this.color = color;
        this.minX = 0;
        this.maxX  = 30;
        this.minY = 0;
        this.maxY = 40;

    }

    public void move() {
//        Add a move()method(returns void)that takes a new x and y position.Set the instance variables to the parameters.
//        Change move()so that that when frozen the piece does not move
        if (frozen == true) {
            positionX = positionX;
            positionY = positionY;
//            System.out.println(positionX);
        } else {
            Random randomX = new Random();
            Random randomY = new Random();
            int x = randomX.nextInt(12);
            int y = randomY.nextInt(15);
            positionX += x;
            positionY += y;
//            if (positionX < 10 || positionX > 100 || positionY < 20 || positionY > 150) {
            if (positionX < 10) {
                int xx = randomX.nextInt(12);
                int yy = randomY.nextInt(12);
                positionX += xx;
                positionY += yy;
            }
//            System.out.println("This is my new x position: " + x);
//            System.out.println("This is my new y position: " + y);
        }
    }

    public void freeze() {
//        Add a freeze()method(returns void)and set frozen to true
        frozen = true;
    }

    public void unfreeze() {
//        Add a unfreeze()method(returns void)and set frozen to false
        frozen = false;
    }
}

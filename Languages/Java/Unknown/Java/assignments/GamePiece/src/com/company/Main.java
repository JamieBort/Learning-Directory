package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here

        GamePiece randomVariable = new GamePiece();

        randomVariable.move();
        System.out.println("The game piece is frozen: " + randomVariable.frozen);

        randomVariable.freeze();
        System.out.println("The game piece is frozen: " + randomVariable.frozen);

        randomVariable.unfreeze();
        System.out.println("The game piece is frozen: " + randomVariable.frozen);

        System.out.println("positionX before moving " + randomVariable.positionX);
        System.out.println("postitionY before moving " + randomVariable.positionY);
        randomVariable.move();
        System.out.println("positionX after moving " + randomVariable.positionX);
        System.out.println("postitionY after moving " + randomVariable.positionY);

        randomVariable.freeze();
        System.out.println("The game piece is frozen: " +randomVariable.frozen);

        randomVariable.move();
        System.out.println("positionX after moving again " + randomVariable.positionX);
        System.out.println("postitionY after moving again " + randomVariable.positionY);
    }
}

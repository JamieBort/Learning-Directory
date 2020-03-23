package com.company;

public class MarbleBag {

    int numRedMarbles;
    int numGreenMarbles;
    int numBlueMarbles;

    public MarbleBag(int numRedMarbles, int numGreenMarbles, int numBlueMarbles) {

        this.numRedMarbles = numRedMarbles;
        this.numGreenMarbles = numGreenMarbles;
        this.numBlueMarbles = numBlueMarbles;
    }

    public int getTotalNumberOfMarbles() {
//        which returns the total
        return numRedMarbles + numGreenMarbles + numBlueMarbles;
    }


    public void printInfo() {
//    which prints each variable and the total number of marbles

        System.out.println(numRedMarbles);
        System.out.println(numGreenMarbles);
        System.out.println(numBlueMarbles);

    }

    public void removeAllGreenMarbles(){
        numGreenMarbles = 0;
    }
}

package attempt02;

public class MarbleBag {
    int numRedMarbles;
    int numGreenMarbles;
    int numBlueMarbles;

    public MarbleBag(int numRedMarbles, int numGreenMarbles, int numBlueMarbles) {
        this.numRedMarbles = numRedMarbles;
        this.numGreenMarbles = numGreenMarbles;
        this.numBlueMarbles = numBlueMarbles;
    }

    public void printInfo(){ // which prints each variable and the total number of marbles
        System.out.println("The number of Red Marbles: "+ numRedMarbles);
        System.out.println("The number of Green Marbles:"+ numGreenMarbles);
        System.out.println("The number of Blue Marbles:"+ numBlueMarbles);
    }

    public int getTotalNumberOfMarbles(){ //which returns the total
        return numRedMarbles+numGreenMarbles+numBlueMarbles;
    }

    public void removeAllGreenMarbles(){
        this.numGreenMarbles=0;
    }
}
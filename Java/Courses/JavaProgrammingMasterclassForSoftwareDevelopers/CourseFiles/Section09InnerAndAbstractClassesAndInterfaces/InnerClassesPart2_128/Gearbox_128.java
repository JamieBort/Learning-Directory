package Section09InnerAndAbstractClassesAndInterfaces.InnerClassesPart2_128;

import java.util.ArrayList;

// Gearbox class is the top level class.
// Gear class is the inner class.
public class Gearbox_128 {
    private ArrayList<Gear> gears;
    private int maxGears;
    // NOTE: When an inner class has the same variable name as the outer class,
    // it is shaddowing the declaration of the/in the outer class.
    // So we've renamed it to `currentGear`.
    // private int gearNumber = 0;
    private int currentGear = 0;
    private boolean clutchIsIn;

    public Gearbox_128(int maxGears) {
        System.out.println("Inside Gearbox_128() constructor of Gearbox_128 class.");
        this.maxGears = maxGears;
        this.gears = new ArrayList<>();
        Gear neutral = new Gear(0, 0.0);
        this.gears.add(neutral);
        for (int i = 0; i < maxGears; i++) {
            addGear(i, i*5.3);
        }
    }

    public void operateClutch(boolean in) {
        this.clutchIsIn = in;
    }

    public void addGear(int number, double ratio) {
        if (number > 0 && number <= maxGears) {
            this.gears.add(new Gear(number, ratio));
        }
    }

    public void changeGear(int newGear) {
        if ((newGear >= 0) && (newGear < this.gears.size()) && this.clutchIsIn) {
            this.currentGear = newGear;
            System.out.println("Gear " + newGear + " selected.");
        } else {
            System.out.println("Grind!");
            this.currentGear = 0;
        }
    }

    public double wheelSpeed(int revs){
        if(clutchIsIn){
            System.out.println("Scream!!!");
            return 0.0;
        }
        return revs * gears.get(currentGear).getRatio();
    }

    // public class Gear {
    // changed this to private. So we have to change a few things now...
    private class Gear {
        // NOTE: the use of `this` refers to the scope of the Gear Class.
        // `this.gearNumber` (and `gearNumber`) in the Gear class
        // will NOT refer to `gearNumber` in the Gearbox class.
        // NOTE: while in Gear class, if you want to refer to the gearNumber outside of
        // it, you need to use `Gearbox.this.gearNumber`.
        private int gearNumber;
        private double ratio;

        public Gear(int gearNumber, double ratio) {
            System.out.println("Inside Gear() constructor of Gear class; which is inside Gearbox_128 class.");
            this.gearNumber = gearNumber;
            this.ratio = ratio;
        }

        public double driveSpeed(int revs) {
            return revs * (this.ratio);
        }

    /**
     * @return double return the ratio
     */
        public double getRatio(){
            return ratio;
        }

    }

}
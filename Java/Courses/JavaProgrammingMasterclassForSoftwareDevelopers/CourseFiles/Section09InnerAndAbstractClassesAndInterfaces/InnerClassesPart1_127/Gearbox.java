package Section09InnerAndAbstractClassesAndInterfaces.InnerClassesPart1_127;

import java.util.ArrayList;

// Gearbox class is the top level class.
// Gear class is the inner class.
public class Gearbox {
    private ArrayList<Gear> gears;
    private int maxGears;
    // NOTE: When an inner class has the same variable name as the outer class,
    // it is shaddowing the declaration of the/in the outer class.
    // So we've renamed it to `currentGear`.
    // private int gearNumber = 0;
    private int currentGear = 0;

    public Gearbox(int maxGears) {
        this.maxGears = maxGears;
        this.gears = new ArrayList<>();
        Gear neutral = new Gear(0, 0.0);
        this.gears.add(neutral);
    }

    // public class Gear {
        // changed this to private. So we have to change a few things now...
    private class Gear {
        // NOTE: the use of `this` refers to the scope of the Gear Class.
        // `this.gearNumber` (and `gearNumber`) in the Gear class
        // will NOT refer to `gearNumber` in the Gearbox class.
        // NOTE: while in Gear class, if you want to refer to the gearNumber outside of it,
        // you need to use `Gearbox.this.gearNumber`.
        private int gearNumber;
        private double ratio;

        public Gear(int gearNumber, double ratio) {
            this.gearNumber = gearNumber;
            this.ratio = ratio;
        }

        public double driveSpeed(int revs) {
            return revs * (this.ratio);
        }

    }

}
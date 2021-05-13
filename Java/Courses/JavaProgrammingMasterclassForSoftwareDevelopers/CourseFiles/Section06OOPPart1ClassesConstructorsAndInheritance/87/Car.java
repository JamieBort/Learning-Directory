// Challenge.
// Start with a base class of a Vehicle, then create a Car class that inherits from this base class.
// Finally, create another class, a specific type of Car that inherits from the Car class.
// You should be able to hand steering, changing gears, and moving (speed in other words).
// You will want to decide where to put the appropriate state and behaviours (fields and methods).
// As mentioned above, changing gears, increasing/decreasing speed should be included.
// For you specific type of vehicle you will want to add something specific for that type of car.

package com.company;

public class Car extends Vehicle {
    private boolean changingGears;
    private int gear;

    public boolean isChangingGears() {
        return changingGears;
    }

    public int getGear() {
        return gear;
    }

    public void setChangingGears(boolean changingGears) {
        this.changingGears = changingGears;
    }

    public void setGear(int gear) {
        this.gear = gear;
    }

}

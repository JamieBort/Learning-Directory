// Challenge.
// Start with a base class of a Vehicle, then create a Car class that inherits from this base class.
// Finally, create another class, a specific type of Car that inherits from the Car class.
// You should be able to hand steering, changing gears, and moving (speed in other words).
// You will want to decide where to put the appropriate state and behaviours (fields and methods).
// As mentioned above, changing gears, increasing/decreasing speed should be included.
// For you specific type of vehicle you will want to add something specific for that type of car.

package com.company;

public class Vehicle {
    private int speed;
    private int steer; // -1 for left, 0 for straight, 1 for right

    public int getSpeed() {
        return speed;
    }

    public int getSteer() {
        return steer;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public void setSteer(int steer) {
        this.steer = steer;
    }

}

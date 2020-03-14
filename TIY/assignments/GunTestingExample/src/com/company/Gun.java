package com.company;

public class Gun {

    private boolean loaded = false;
    private int capacity;
    private int bullets = 0;

    public Gun(int capacity) {
        this.capacity = capacity;
    }

    public Gun() {
        this(6);
    }

    public int countBullets() {
        return this.bullets;
    }

    public boolean shoot() throws NoBulletsException {
        if (isLoaded()) {
            bullets--;
            return true;
        }
        else {
            throw new NoBulletsException();
        }
    }

    public boolean isLoaded() {
        return this.bullets > 0;
    }

    public void load() {
        this.bullets = this.capacity;
    }
}
package com.ironyard;


//create abstract class Soldier
public abstract class Soldier implements HandToHand, Weapon {

    //declare variables
    public String name;
    public String rank;
    public int serialNumber;

    //create constructor
    public Soldier(String name, String rank, int serialNumber) {
        this.name = name;
        this.rank = rank;
        this.serialNumber = serialNumber;
    }

    //create methods sleep, eat, and walk
    public void sleep(){
        System.out.println("snore");
    }

    public void eat() {
        System.out.println("chew");
    }

    public void walk() {
        System.out.println("trudge");
    }

    //implement methods from Weapon and HandToHand interfaces
    public void punch() {
        System.out.println("Hiya!");
    }
    public void kick() {
        System.out.println("Smack!");
    }

    public void gun(){
        System.out.println("Shoot");
    }
    public void knife() {
        System.out.println("Slash");
    }

    //implement new interface method bomb that extends Weapon
    public String Bomb() {
        System.out.println("KABOOM!!");
       return "KABOOM!!!!";
    }

    //implement default method from Weapon interface
    @Override
    public void hammer(){
        System.out.println("Smash!");
    }

    //create abstract method speak
    public abstract void speak();
}

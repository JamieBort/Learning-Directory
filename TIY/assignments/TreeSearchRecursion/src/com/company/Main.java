package com.company;

public class Main {

    public static void main(String[] args) {
        // write your code here

        FamilyTree john = new FamilyTree("John");

        FamilyTree joe = new FamilyTree("Joe");
        FamilyTree jane = new FamilyTree("Jane");

        FamilyTree chris = new FamilyTree("Chris");
        FamilyTree kathy = new FamilyTree("Kathy");

        FamilyTree bob = new FamilyTree("Bob");
        FamilyTree bill = new FamilyTree("Bill");

        FamilyTree lois = new FamilyTree("Lois");
        FamilyTree clark = new FamilyTree("Clark");

        FamilyTree nancy = new FamilyTree("Nancy");
        FamilyTree nate = new FamilyTree("Nate");

        FamilyTree dom = new FamilyTree("Dom");
        FamilyTree rachel = new FamilyTree("Rachel");

        john.addChild(joe);
        john.addChild(jane);

        joe.addChild(chris);
        joe.addChild(kathy);

        chris.addChild(lois);
        chris.addChild(clark);

        kathy.addChild(nancy);
        kathy.addChild(nate);

        jane.addChild(bob);
        jane.addChild(bill);

        bob.addChild(dom);

        bill.addChild(rachel);

//        john.getChildren();
//        System.out.println("My first method. " + john.getChildren().equals(joe));

//        john.getNumChildren();
//        System.out.println("My second method. " + john.getNumChildren());

//        john.getNumDescendants();
        System.out.println("My third method. " + john.getNumDescendants());

    }
}

package Section07OOPPart2CompositionEncapulationAndPolymorphism;

import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.Dimensions;

public class Section07Methods {

    public void myDimensions(){
        System.out.println("I am in my myDimensions method.");
        Dimensions dimension = new Dimensions();
        dimension.myPrintMethod();
    }

    public void myPrintMethod(){
        System.out.println("I am in my print method.");
    }

}
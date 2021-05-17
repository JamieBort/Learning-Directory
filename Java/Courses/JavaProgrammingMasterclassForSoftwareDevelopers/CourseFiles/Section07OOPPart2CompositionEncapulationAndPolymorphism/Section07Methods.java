package Section07OOPPart2CompositionEncapulationAndPolymorphism;

import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.Case;
import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.Dimensions;
import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.Monitor;
import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.Motherboard;
import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.PC;
import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.Resolution;

public class Section07Methods {

    public void myPC() {
        // An example of composistion.
        System.out.println("I am in my myPC method.");

        Motherboard aMotherboard = new Motherboard(3, 123, "myMonitorModelNumber");
        aMotherboard.isLoading();

        Resolution theResolution = new Resolution(5, 9);
        Monitor aMonitor = new Monitor(456, "myMonitorModelNumber", theResolution);

        Dimensions aDimension = new Dimensions(20, 20, 6);
        Case aCase = new Case(789, "myCaseModelNumber", aDimension);

        PC pc = new PC(aCase, aMonitor, aMotherboard);

    }

    public void myPrintMethod() {
        System.out.println("I am in my print method.");
    }

}
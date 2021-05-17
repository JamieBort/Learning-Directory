package Section07OOPPart2CompositionEncapulationAndPolymorphism;

import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.*;

// import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.Case;
// import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.Dimensions;
// import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.Monitor;
// import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.Motherboard;
// import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.PC;
// import Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91.Resolution;

import Section07OOPPart2CompositionEncapulationAndPolymorphism.Polymorphism95.*;

public class Section07Methods {

    public void myPC() { // An example of Composition.
        System.out.println("I am in my myPC method.");

        Motherboard aMotherboard = new Motherboard(3, 123, "myMonitorModelNumber");
        // aMotherboard.isLoading();

        Resolution theResolution = new Resolution(5, 9);
        Monitor aMonitor = new Monitor(456, "myMonitorModelNumber", theResolution);

        Dimensions aDimension = new Dimensions(20, 20, 6);
        Case aCase = new Case(789, "myCaseModelNumber", aDimension);

        PC pc = new PC(aCase, aMonitor, aMotherboard); // "I have created a PC that has a Case class, has a Monitor
                                                       // class, and has a Motherboard class." prints out here.

        pc.getMonitor().drawPixel(1500, 1200); // "Drawing a pixel at 1500 and 1200 coordinates." prints out here.

        pc.getMotherboard().isLoading(); // "Program is loading..." prints out here.

        pc.getTheCase().powerButton(); // "The power button has been pushed." prints out here.

    }

    // An example of Encapuslation (has not been created yet).

    public void myPolymorphism() { // An example of Polymorphism.
        System.out.println("I am in my myPolymorphism method.");

        for (int i = 1; i < 11; i++) {
            Movie movie = randomMovie();
            System.out.println("Movie #: " + i + " : " + movie.getName() + "\n" + "Plot: " + movie.plot() + "\n");
        }

    }

    public static Movie randomMovie() { // used for Polymorphism video.
        int randomNumber = (int) (Math.random() * 5) + 1; // will return a number between 1 and 5.
        System.out.println("The random number generated is: " + randomNumber);
        switch (randomNumber) {
            case 1:
                return new Jaws();
            case 2:
                return new IndependenceDay();
            case 3:
                return new MazeRunner();
            case 4:
                return new StarWars();
            case 5:

                return new Forgetable();
            default:
                System.out.println("default");
        }
        return null;
    }

}
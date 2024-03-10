package Section07OOPPart2CompositionEncapulationAndPolymorphism.Polymorphism95;

public class StarWars extends Movie {

    public StarWars(){
        super("Star Wars");
    }

    @Override
    public String plot(){
        String thePlot="Imperial Forces try to take over the univers.";
        System.out.println(thePlot);
        return thePlot;
    }

}
package Section07OOPPart2CompositionEncapulationAndPolymorphism.Polymorphism95;

public class Jaws extends Movie {
    public Jaws(){
        super("Jaws");
    }
    
    @Override // not done in the video lesson.
    public String plot(){
        String thePlot="No movie here.";
        System.out.println(thePlot);
        return thePlot;
    }

}
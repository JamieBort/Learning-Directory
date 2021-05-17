package Section07OOPPart2CompositionEncapulationAndPolymorphism.Polymorphism95;

public class IndependenceDay extends Movie {

    public IndependenceDay() {
        super("Independence Day");
    }

    // @Override
    // public String plot() {
    //     // TODO Auto-generated method stub
    //     return super.plot();
    // }
    
    @Override // not done in the video lesson.
    public String plot(){
        String thePlot="Aliens attempt to take over planet Earth.";
        System.out.println(thePlot);
        return thePlot;
    }

}
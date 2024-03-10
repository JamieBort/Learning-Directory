package Section07OOPPart2CompositionEncapulationAndPolymorphism.Polymorphism95;

public class Movie{
    private String name;

    public Movie(String name) {
        this.name = name;
    }
    
    public String plot(){
        String thePlot="A shark eats lots of people.";
        System.out.println(thePlot);
        return thePlot;
    }

    /**
     * @return String return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

}
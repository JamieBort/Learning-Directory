package Section07OOPPart2CompositionEncapulationAndPolymorphism.Polymorphism95;

public class MazeRunner extends Movie {

    public MazeRunner(){
        super("Maze Runner");
    }

    @Override
    public String plot(){
        String thePlot="Kids try to escape a maze.";
        System.out.println(thePlot);
        return thePlot;
    }

}
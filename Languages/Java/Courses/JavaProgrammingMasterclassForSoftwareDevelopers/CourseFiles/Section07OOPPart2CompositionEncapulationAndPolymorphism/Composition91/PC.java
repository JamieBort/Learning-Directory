package Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91;

public class PC{
    private Case theCase;
    private Monitor monitor;
    private Motherboard motherboard;
    
    public PC(Case theCase, Monitor monitor, Motherboard motherboard) {
        this.theCase = theCase;
        this.monitor = monitor;
        this.motherboard = motherboard;
        System.out.println("I have created a PC that has a Case class, has a Monitor class, and has a Motherboard class.");
    }

    /**
     * @return Case return the theCase
     */
    public Case getTheCase() {
        return theCase;
    }

    /**
     * @param theCase the theCase to set
     */
    public void setTheCase(Case theCase) {
        this.theCase = theCase;
    }

    /**
     * @return Monitor return the monitor
     */
    public Monitor getMonitor() {
        return monitor;
    }

    /**
     * @param monitor the monitor to set
     */
    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    /**
     * @return Motherboard return the motherboard
     */
    public Motherboard getMotherboard() {
        return motherboard;
    }

    /**
     * @param motherboard the motherboard to set
     */
    public void setMotherboard(Motherboard motherboard) {
        this.motherboard = motherboard;
    }

}
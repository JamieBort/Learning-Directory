package Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91;

public class Motherboard{
    private int serialNumber;
    private String modelNumber;
    private int numbOfPorts;
    
    public Motherboard(int numbOfPorts, int serialNumber, String modelNumber) {
        this.serialNumber = serialNumber;
        this.modelNumber = modelNumber;
        this.numbOfPorts = numbOfPorts;
    }

    public void isLoading(){
        System.out.println("Program is loading...");
    }

    /**
     * @return int return the numbOfPorts
     */
    public int getNumbOfPorts() {
        return numbOfPorts;
    }

    /**
     * @param numbOfPorts the numbOfPorts to set
     */
    public void setNumbOfPorts(int numbOfPorts) {
        this.numbOfPorts = numbOfPorts;
    }

    /**
     * @return int return the serialNumber
     */
    public int getSerialNumber() {
        return serialNumber;
    }

    /**
     * @param serialNumber the serialNumber to set
     */
    public void setSerialNumber(int serialNumber) {
        this.serialNumber = serialNumber;
    }

    /**
     * @return String return the modelNumber
     */
    public String getModelNumber() {
        return modelNumber;
    }

    /**
     * @param modelNumber the modelNumber to set
     */
    public void setModelNumber(String modelNumber) {
        this.modelNumber = modelNumber;
    }

}
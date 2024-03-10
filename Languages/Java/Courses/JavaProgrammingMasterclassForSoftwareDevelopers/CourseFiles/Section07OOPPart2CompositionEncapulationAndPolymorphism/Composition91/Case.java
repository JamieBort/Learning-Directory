package Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91;

public class Case {
    private int serialNumber;
    private String modelNumber;
    private Dimensions dimensions;

    public Case(int serialNumber, String modelNumber, Dimensions dimensions) {
        this.serialNumber = serialNumber;
        this.modelNumber = modelNumber;
        this.dimensions = dimensions;
    }

public void powerButton(){
    System.out.println("The power button has been pushed.");
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

    /**
     * @return Dimensions return the dimensions
     */
    public Dimensions getDimensions() {
        return dimensions;
    }

    /**
     * @param dimensions the dimensions to set
     */
    public void setDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
    }

}
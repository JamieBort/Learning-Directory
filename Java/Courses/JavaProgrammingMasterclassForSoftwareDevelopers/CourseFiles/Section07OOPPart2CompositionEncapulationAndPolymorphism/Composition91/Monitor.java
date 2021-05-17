package Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91;

public class Monitor {
    private int serialNumber;
    private String modelNumber;
    private Resolution resolution;

    public Monitor(int serialNumber, String modelNumber, Resolution resolution) {
        this.serialNumber = serialNumber;
        this.modelNumber = modelNumber;
        this.resolution = resolution;
    }

    public void drawPixel(int x, int y) {
        System.out.println("Drawing a pixel at " + x + " and " + y + " coordinates.");
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
     * @return Resolution return the resolution
     */
    public Resolution getResolution() {
        return resolution;
    }

    /**
     * @param resolution the resolution to set
     */
    public void setResolution(Resolution resolution) {
        this.resolution = resolution;
    }

}
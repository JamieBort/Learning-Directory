package Section07OOPPart2CompositionEncapulationAndPolymorphism.Composition91;

public class Resolution {
    private int width;
    private int height;
    public Resolution(int width, int height) {
        this.width = width;
        this.height = height;
    }

    /**
     * @return int return the width
     */
    public int getWidth() {
        return width;
    }

    /**
     * @param width the width to set
     */
    public void setWidth(int width) {
        this.width = width;
    }

    /**
     * @return int return the height
     */
    public int getHeight() {
        return height;
    }

    /**
     * @param height the height to set
     */
    public void setHeight(int height) {
        this.height = height;
    }

}
package com.company;

public class Backpack {

//    For this assignment you will be writing a Backpack class, which will contain a list of "items". It can contain any type of item (represented as a String) but certain items (namely "Pen", "Pencil" and "Folder") are considered "tracked". This means that we want to have class variables to keep track of the total quantity of these items across all backpacks. The Backpack class will keep a list of all the tracked types (for now, just the three above).

//    All of Backpack's variables and methods must be private except for getter methods, the constructor, and the addItem(String item) method.

//    variables
    private int pencil;
    private int pen;
    private int SpiralNotebook;
    private int Folder;

//    constructor
    public Backpack() {
        this.pencil = 0;
        this.pen = 0;
        this.SpiralNotebook = 0;
        this.Folder = 0;
    }

//    getters and setters
    public int getPencil() {
        return pencil;
    }

    public void setPencil(int pencil) {
        this.pencil = pencil;
    }

    public int getPen() {
        return pen;
    }

    public void setPen(int pen) {
        this.pen = pen;
    }

    public int getSpiralNotebook() {
        return SpiralNotebook;
    }

    public void setSpiralNotebook(int spiralNotebook) {
        SpiralNotebook = spiralNotebook;
    }

    public int getFolder() {
        return Folder;
    }

    public void setFolder(int folder) {
        Folder = folder;
    }

//    methods
    public void addPen() {
        pen++;
    }

    private void addPencil() {
        pencil++;
    }

}

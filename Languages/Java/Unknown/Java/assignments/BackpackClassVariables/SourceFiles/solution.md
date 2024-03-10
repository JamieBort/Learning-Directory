```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Backpack {

    private static int numPencils;
    private static int numFolders;
    private static int numPens;

    private List<String> contents;

    private static List<String> trackedTypes = Arrays.asList("Pencil", "Pen", "Folder");

    public Backpack () {
        contents = new ArrayList<>();
    }

    public void addItem (String item) {
        contents.add(item);
        switch (item) {
            case "Pencil":
                numPencils++;
                break;
            case "Pen":
                numPens++;
                break;
            case "Folder":
                numFolders++;
                break;
        }
    }

    public static void main(String[] args) {
        Backpack myPack = new Backpack();
        myPack.addItem("Pencil");
        myPack.addItem("Pen");

        Backpack otherPack = new Backpack();
        otherPack.addItem("Folder");
        otherPack.addItem("Wallet");
        otherPack.addItem("Pen");
        otherPack.addItem("Pen");

        System.out.println("Total number of pens: " + Backpack.getNumPens());
        System.out.println("Total number of pencils: " + Backpack.getNumPencils());
        System.out.println("Total number of folders: " + Backpack.getNumFolders());
    }

    public static int getNumPencils() {
        return numPencils;
    }

    public static int getNumFolders() {
        return numFolders;
    }

    public static int getNumPens() {
        return numPens;
    }
}

```
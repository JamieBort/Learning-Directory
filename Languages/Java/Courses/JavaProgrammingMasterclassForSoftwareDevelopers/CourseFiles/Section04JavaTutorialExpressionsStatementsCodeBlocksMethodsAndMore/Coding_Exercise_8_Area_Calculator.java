package Section04JavaTutorialExpressionsStatementsCodeBlocksMethodsAndMore;

public class Coding_Exercise_8_Area_Calculator {
    static double area;

    public Coding_Exercise_8_Area_Calculator() {
        System.out.println("Inside constructor of Coding_Exercise_8_Area_Calculator class.");
    }

    public static double area(double radius) {

        if (radius < 0) {
            area = -1;
            System.out.println("The area of the rectangle is invalid.");
        } else {
            area = radius * Math.PI * radius;
            System.out.println("The area of the cirlce is: " + area);
        }
        return area;
    }

    public static double area(double x, double y) {
        if (x < 0 || y < 0) {
            area = -1;
            System.out.println("The area of the rectangle is invalid.");
        } else {
            area = x * y;
            System.out.println("The area of the rectangle is: " + area);
        }
        return area;
    }

    // public static double calculation(){
    // double result = area();
    // System.out.println("The area of the object is: " + result);
    // return result;
    // }

}
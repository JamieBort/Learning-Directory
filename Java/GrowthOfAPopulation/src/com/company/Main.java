// from: https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/java
//In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

//At the end of the first year there will be:
//1000 + 1000 * 0.02 + 50 => 1070 inhabitants
//
//At the end of the 2nd year there will be:
//1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
//
//At the end of the 3rd year there will be:
//1141 + 1141 * 0.02 + 50 => 1213
//
//It will need 3 entire years.

//More generally given parameters:
//
//p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
//
//the function nb_year should return n number of entire years needed to get a population greater or equal to p.
//
//aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

//Examples:
//nb_year(1500, 5, 100, 5000) -> 15
//nb_year(1500000, 2.5, 10000, 2000000) -> 10

//Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

//p0 = 1000.
//p1 = p0 + (.02 * p0) + 50
//p2 = p1 + (.02 * p1) + 50
//p3 = p2 + (.02 * p2) + 50
//.
//.
//.
//pn = p(n-1) + (.02 * p(n-1) ) + 50.
//   = p(n-1)(1+(.02 * 1 ) ) + 50.
//   = (p(n-1) * 1.02) + 50

//year0 = 1000
//year1 = 1000 * .02 + 50

package com.company;

public class Main {

    public static void main(String[] args) {
        // write your code here
//        nbYear(1000, .02, 50, 1200);
}

    public static int nbYear(int p0, double percent, int aug, int p) {
        // your code
//        int p0 Time zero.
//        double percent Population Growth
//        int aug Number of people moving to the area
//        int p The total number of people we're interested in living in the area at a given time.
//        int year The year we're interested in.
        for(int i=1; i<11; i++){
            System.out.println("Count is: " + i);
        }

//        int year = 0;
//        while (p0 < p) {
//            p0 = p0 + (int) (p0 * percent / 100) + aug;
//            year++;
//        }
//        System.out.print(year);
//        return year;
    }
}
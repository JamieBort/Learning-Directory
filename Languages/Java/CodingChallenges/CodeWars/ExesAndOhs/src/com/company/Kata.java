package com.company;

public class Kata {
    public static boolean getXO(String str) {
        
        int xCounter = 0;
        int yCounter = 0;

        for (int i=0; i<str.length(); i++) {
            if (str.charAt(i) == 'x' || str.charAt(i) == 'X') {
                xCounter += 1;
            }
        }

        for (int i=0; i<str.length(); i++) {
            if (str.charAt(i) == 'o' || str.charAt(i) == 'O') {
                yCounter += 1;
            }
        }

        if(xCounter==yCounter){
            System.out.println(xCounter);
            System.out.println(yCounter);
            return true;
        }
        else {
            System.out.println(xCounter);
            System.out.println(yCounter);
            return false;
        }
    }
}


//    XO("ooxx") => true
//        XO("xooxx") => false
//        XO("ooxXm") => true
//        XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//        XO("zzoo") => false
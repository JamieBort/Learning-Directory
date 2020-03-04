// From: https://www.tutorialspoint.com/java/java_basic_syntax.htm

package com.company;

public class FreshJuiceTest {
}






public class FreshJuiceTest {
    class FreshJuce {
        enum FreshJuiceSize{ SMALL, MEDIUM, LARGE }
        FreshJuiceSize size;
    }


    public static void main(String args[]) {
        FreshJuice juice = new FreshJuice();
        juice.size = FreshJuice.FreshJuiceSize.MEDIUM ;
        System.out.println("Size: " + juice.size);
    }
}
package com.company;

public class Main {

    public static void main(String[] args) {
        SumOdd sumOdd = new SumOdd();
//        sumOdd.isOdd(2);
        sumOdd.sumOdd2(100, 1000);
    }

    public static class SumOdd{

        public boolean isOdd(int number){
            if(number%2==0 && number>0){
                return true;
            }
            return false;
        }
        public int sumOdd2(int start, int end){
            if(end<start || start <=0 || end <=0){
                System.out.println(-1);
                return -1;
            }
            int n=0;
            for (int i = start; i <=end ; i++) {
                if(isOdd(i)==false){
                    System.out.println("i is: " +i);
                    n+=i;
                    System.out.println("n is: " + n);
                }
                
            }
            System.out.println("n is: " + n);
            return n;
        }
    }

}

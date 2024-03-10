package com.company;

import java.util.Arrays;

public class PushToString {
    PushToString() {

//       declare a string
        String str = "";

        //        using 1-26 put the letters of the alphabet into it.
        int i;
        for (i = 97; i < 123; i++) {
//            System.out.println(Character.toString ((char) i));
            str += Character.toString((char) i);
            str += ",";
        }
        System.out.println(str);

        int j;
        for (j = 0; j < 4; j++)
        {
            while (j<2)
            {
                System.out.println("Hello World");
                j++;
            }
        }
        System.out.println("We're done");

//        populate array.
        int[] array = {1,2,3};
        int array2[]=new int[30];

        for (j = 0; j < 30; j++){
            array2[j] = j+1;

            //            array2 = new int[] {j};
        }
        System.out.println(Arrays.toString((array)));
        System.out.println(Arrays.toString((array2)));


        //        sum every third element
                int array3[]=new int[30];
        String str2 = "";
        int t;
        for (t = 0; t < array2.length; t++){
            if ( array2[t] % 3 == 0) {
                //            System.out.println(array2[2]);
                array3[t] += array2[t];
            str2 += array2[t];
                str2 += ",";
            }
        }
        System.out.println(Arrays.toString(array3));
        str2 = str2.substring(0, str2.length() - 1);
        System.out.println(str2);


        String input = "43 68 9 23 318";
        String numbers[] = input.split("\\s+");   // Split the input string.
        int sum = 0;
        for (String number : numbers) {  // loop through all the number in the string array
            Integer n = Integer.parseInt(number);  // parse each number
            sum += n;     // sum the numbers
        }
        System.out.println(sum);  // print the result.







        int arrnum[] ={5,6,9,2,10};
        System.out.println(Arrays.toString(arrnum));

        int bb = 9;
        int arrnum2[] ={5,2*3,bb,2,10};
        System.out.println(Arrays.toString(arrnum2));


//        System.out.println(str2);

// now to parse and add the numbers in the string.
//        String[] tokens2 = str2.split(",");

//        for (String tt : tokens2)
//            System.out.println(tt);
//        System.out.println(tokens2);
//        int total=0;
//        total += tokens2.hashCode();



//        String s = "prefix/dir1/dir2/dir3/dir4";
//        String[] tokens = s.split("/");
//
//        for (String tt : tokens)
//            System.out.println(tt);

    }
}

// package com.company;

// public class Solution {
    
// }

package com.company;

// public class Solution {
//     public void abc(String myString){
//         System.out.println(myString);
//     }
// }

class Solution {
    public String addStrings(String num1, String num2) {
        
        // System.out.println(num1.charAt(0)); // 1
        System.out.println(num1.getClass().getName()); // String
        // System.out.println((num1.charAt(3)); // 
        // System.out.println(num1.charAt(0)+3); // 52
        // System.out.println(num1.charAt(0)+num2.charAt(3));
        // System.out.println(num1.charAt(0)+num2.charAt(3));
        // System.out.println(num2.charAt(3));
        // System.out.println("4"+"3"); // 43


        String str="123";
	int inum = 100;

	/* converting the string to an int value
	 * ,the value of inum2 would be 123 after
	 * conversion
	 */
	int inum2 = Integer.parseInt(str);
		
	int sum = inum+inum2;
	System.out.println("Result is: "+sum);
        
        return num2;
    }
}
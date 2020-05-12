// From: https://leetcode.com/problems/add-strings/

// num1          "34890"
//        num2  "234286"

class Solution {
    public String addStrings(String num1, String num2) {
//         Iterating using a loop over the strings.
//         Check if both of them have a character at that position.
//         Get the max of length - which ever number has higher lengther. 
        // Then using a for loop from 0 to .length keep adding by index.
//         Instantiate one variable for output. 
//      Cast it into an integer. // Changing the data type.
        
//         We're going to use a class called stringbuilder.
        
        StringBuilder out = new StringBuilder();
        int Carry = 0;
        int length1 = num1.length(); //5
        int length2 = num2.length(); //6
        int maxlength = Math.max(length1,length2);
        int minlength = Math.min(length1,length2);
        // for(int index = maxlength; index >= 0; index--){
        for(int index = 0; index < minlength; index++){
            
        int number1 = Character.getNumericValue(num1.charAt(length1 - index-1)); // this is a static method
        int number2 = Character.getNumericValue(num2.charAt(length2 - index-1)) ;         
        int num3 = number1 + number2 + Carry;
            Carry = num3/10;
            out.append(num3%10);
        }
        if(length1 > length2){
//             add length1 digits to output
            for(int index = minlength; index < length1; index++){
            int number1 = Character.getNumericValue(num1.charAt(length1 - index-1)); 
            int num3 = number1 + Carry;
            Carry = num3/10;
            out.append(num3%10);
            }
        }
        else if(length1 < length2){
//             Add length2 digits to output
            for(int index = minlength; index < length2; index++){
            int number2 = Character.getNumericValue(num2.charAt(length2 - index-1)); 
            int num3 = number2 + Carry;
            Carry = num3/10;
            out.append(num3%10);
            }
        }
        if(Carry>0){
            out.append(Carry);
        }
    return out.reverse().toString();
        
    }
}
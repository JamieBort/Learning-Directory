// from: https://www.coderbyte.com/editor/guest:Questions%20Marks:JavaScript

// Using the JavaScript language, have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well. 

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string. 

var str0 = "xvw48D4b6FsJ9yyPXoVypDahIPi40?ahJ9nlFn?3opBWMQdDJw";
var str1 = "QM7H?F?uBfy?3onii1TtHMDZ3WyLPZgEvKCITCrLDR9Cz157zTEm1";
var str2 = "0GirOOGN1q";
var str3 = "zSPqkcMLin";
var str4 = "tdJEozkn2U";
var str5 = "OCTY2Pvyce";
var str6 = "9zE8xsLhRg";
var str7 = "uhZNaNibIY";
var str8 = "ipuUb3Jooq";
var str9 = "xuRMerb2ck";

// To parially generate a random string. I modified the output to suit my needs.
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?";
    for (var i = 0; i < 50; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  console.log(makeid());


parseInt(string[i])

function QuestionsMarks(str) {
    // Need to parse the string for the first number. 
    // Then parse the strong for three '?'. 
    //  When three '?' are found add the first number to the second. 
    // If those two numbers sum to 10, return 'true'. 
    // If they do not sum to 10, repeat until the sum of two nubmers is 10.
    
    if () {
        return true;
    } else {
        // Otherwise return 'false'.
        return false;
    }
}

// ======================================================
// Below is work from a scratch codepen I was working with.
// ======================================================

// str ="abc???3";
// console.log(str.includes("???"));

var str = "QM7H?F?uBfy?3onii1TtHMDZ3WyLPZgEvKCITCrLDR9Cz157zTEm1";

// console.log(parseInt("10"));
// console.log("hello");
// str1 = "35 45 66";
// console.log(str.charAt(4));
// console.log(parseInt(str1));
// console.log(str[2]);
function abc (string) {
	for (i=0; i < string.length; i++ ) {
		if (str.charAt(i) === "?") {
			console.log("h3")
		}
		if ((typeof parseInt(string.charAt(i))) != "string") {
			console.log("h4 " + i + " " + string.charAt(i));
		}
		// if (parseInt()){
		// 		}
	}
}

abc(str);
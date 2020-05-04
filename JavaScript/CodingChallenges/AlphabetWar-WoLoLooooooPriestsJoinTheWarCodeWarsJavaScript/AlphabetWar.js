// from: https://www.codewars.com/kata/alphabet-war-wo-lo-loooooo-priests-join-the-war/javascript

// Left
// w - 4
// p - 3 
// b - 2
// s - 1
// t - 0 (but it's priest with Wo lo loooooooo power)

// Right
// m - 4
// q - 3 
// d - 2
// z - 1
// j - 0 (but it's priest with Wo lo loooooooo power)

function fight(str) {
    // Initialize variable for left scrore and right score.
    // Initialize arrays arrays for left and right.
    // Iterate through the string. Check each character. Tally right scores for the right string.
    let leftScore = 0;
    let rightScore = 0;
    let leftArray = ["t", "s", "b", "p", "w"];
    let rightArray = ["j", "z", "d", "q", "m"];

    let swapArray = [];
    // Iterate through the string. 
    // If a character is 't' or 'j', and character+2 is not the opposite, 



    for (i = 0; i < str.length; i++) {
        for (j = 0; j < leftArray.length; j++) {
            // if the character in the string matches a character in the array, change that array to score.
            if (str[i] === leftArray[j]) {
                leftScore += j;

            }
            if (str[i] === rightArray[j]) {
                rightScore += j;

            }
        }
    }
    if (leftScore > rightScore) {
        return "Left side wins!";
    } else if (leftScore < rightScore) {
        return "Right side wins!";
    }



    return "Let's fight again!";
}

string = "wm";

console.log(fight(string));
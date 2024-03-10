// We need a code word to create the cipher.
// We need a phrase to use the cipher on.
// We need an array to manipulate the code word with.
// We need an array to manipulate the phrase with.
// We're going to only cipher the alphebet characters of the phrase. Spaces and punctuation will be preserved.

// const OurPhrase = "johnny needs to run away now. he might be in danger.";
const OurPhrase = "abc def ghij.";

function CaesarCiper(string) {
    // declaring variables
    const CodeWord = "abcdef",
        // const CodeWord = "ThisIsMyCodeWord",
        CodeWordArray = [],
        OurPhraseArray = [];

    //  Populating our arrays.
    for (i = 0; i < CodeWord.length; i++) {
        CodeWordArray.push(CodeWord[i]);
    }
    for (i = 0; i < OurPhrase.length; i++) {
        OurPhraseArray.push(OurPhrase[i]);
    }



    // We want the 'J' in 'OurPhrase' to change based on the 'T' in 'codeWord'.
    // console.log(CodeWordArray[0]);
    function PositionForOurPhrase(a) {
        console.log(OurPhraseArray[a] + " is the " + (OurPhraseArray[a].charCodeAt(a) - 64) + " letter in the alphabet and the " + OurPhraseArray[a].charCodeAt(a) + " letter in the ASCII table.");
    }
    // PositionForOurPhrase(0); 
    function PositionForCodeWord(a) {
        console.log(CodeWordArray[a] + " is the " + (CodeWordArray[a].charCodeAt(a) - 64) + " letter in the alphabet and the " + CodeWordArray[a].charCodeAt(a) + " letter in the ASCII table.");
    }
    // PositionForCodeWord(0);




// =============================================
    function OurThoughtProcess(a, b) {
        console.log(OurPhraseArray[a] + " is the " + (OurPhraseArray[a].charCodeAt(a) - 96) + " letter in the alphabet and the " + OurPhraseArray[a].charCodeAt(a) + " letter in the ASCII table.");

        console.log(CodeWordArray[b] + " is the " + (CodeWordArray[b].charCodeAt(b) - 96) + " letter in the alphabet and the " + CodeWordArray[b].charCodeAt(b) + " letter in the ASCII table.");

        console.log("We want to move " + OurPhraseArray[a] + " adhead " + (CodeWordArray[b].charCodeAt(b) - 96) + " spots.");
    }
    // OurThoughtProcess(0, 0);

    let c;
    function OurMath(a, b) {
        // now to add that number to T
        c = CodeWordArray[b].charCodeAt(b) + (OurPhraseArray[a].charCodeAt(a) - 96);
        console.log((OurPhraseArray[a].charCodeAt(a) - 96) + " + " + CodeWordArray[b].charCodeAt(b) + " = " + c);
        // Now to output that character.
        // let d;
        // if (c > 122) {
        //     d = c - 26;
        // }
        console.log("The ASCII number of our new character is " + c + ". And the new character is " + "\"" + String.fromCharCode(c) + "\".");
    }
    // OurMath(0, 0);




// =============================================

OurThoughtProcess(1, 0);
// OurMath(1, 1);




// =============================================

    // Our new array and/or string.
    // Declaring variables, again.
    const CipheredArray = [];
    let CipheredString = "";
    
    CipheredArray.push(String.fromCharCode(c));
    CipheredString = CipheredArray.join('')

    // console.log(codeWordArray);
    // console.log(ourPhraseArray);
    console.log(CipheredString);
    return CipheredString;
}
CaesarCiper(OurPhrase);
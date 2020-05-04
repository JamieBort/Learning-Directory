function canCast() {
    let hand = arguments[0];
    let casts = [];
    let counter = {
        "B": 0,
        "G": 0,
        "R": 0,
        "U": 0,
        "W": 0,
        "X": 0
    };
    let castsCounter = {
        "B": 0,
        "G": 0,
        "R": 0,
        "U": 0,
        "W": 0,
        "X": 0
    };
    for (let i = 1; i < arguments.length; i++) {
        casts.push(arguments[i]);

    }

    // Decrement though the hand.
    // If the parseInt hand (i) is NaN, then we'll increment counter's key for hand(i).
    // Else, turn the first several characters of hand into a number. Have that number equal the value of counter(X).

    for (let i = hand.length - 1; i >= 0; i--) {
        // console.log(parseInt(hand.charAt(i)));
        if ((parseInt(hand.charAt(i))) >= 0) {
            // console.log(hand.charAt(i)+" is a number.");
            let digits = hand.slice(0, i + 1);
            i = 0;
            counter.X = parseInt(digits);
        } else {
            // console.log(hand.charAt(i)+" is a letter.");
            counter[hand.charAt(i)]++;
        }
    }

    // Increment through casts.
    // For each element basically do what we just did for the hand.
    for (let j = 0; j < casts.length; j++) {

        for (let i = casts[j].length; i >= 0; i--) {
            // console.log(parseInt(hand.charAt(i)));
            if ((parseInt(casts[j].charAt(i))) >= 0) {
                // console.log(hand.charAt(i)+" is a number.");
                let digits = parseInt(casts[j].slice(0, i + 1));
                i = 0;
                castsCounter.X += digits;
            } else {
                // console.log(hand.charAt(i)+" is a letter.");
                castsCounter[casts[j].charAt(i)]++;
            }
        }
    }
    // Compare all the keys of counter to keys of castsCounter.
    // If castsCouner(of any key) is > counter(of any key), we have to return false.
    let handTotal = 0;
    let castsTotal = 0;
    for (key in counter) {
        if (key === "X") {
            handTotal += counter[key];
            castsTotal += castsCounter[key];
            if (handTotal >= castsTotal){
                return true;
            } else {
                return false;
            }
            
        } else {
            if (castsCounter[key] > counter[key]){
                return false;
            }
            handTotal += counter[key];
            castsTotal += castsCounter[key];

        }
    }

    return castsCounter;
}

console.log(canCast("RR", "2", ));

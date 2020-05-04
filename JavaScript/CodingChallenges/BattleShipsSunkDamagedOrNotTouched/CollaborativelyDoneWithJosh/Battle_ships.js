function damagedOrSunk(board, attacks) {
    //the battle starts here!
    // Determin board width and height.
    let boardWidth = board[0].length;
    let boardHeight = board.length;
    // console.log(boardWidth, "width")
    // console.log(boardHeight, "height")
    // Make and object where keys are boat numbers. Values are arrays of that boat.
    let boatObject = {};

    // Create a second key for each boat. This key represents the lengh of the boat.
    // Iterate through the board. Place any boat squares into the object. 
    let boats = 0;

    for (let i = 0; i < boardHeight; i++) {
        for (let j = 0; j < boardWidth; j++) {
            if (board[i][j] != 0) {
                // console.log("Boat " + board[i][j] + " at [" + (boardWidth + 1 - j) + "," + (boardHeight - i) + "]")
                if (boatObject[board[i][j]]) {
                    let coordinate = [j + 1, boardHeight - i];
                    boatObject[board[i][j]].push(coordinate);
                } else {
                    boatObject[board[i][j]] = [];
                    // console.log(j);
                    let coordinate = [j + 1, boardHeight - i]
                    boatObject[board[i][j]].push(coordinate);
                    // console.log(coordinate);
                    let string = board[i][j] + "-Count";
                    boatObject[string] = 0;
                    boats++;
                }
            }
        }
    }
    for (let i = 1; i <= boats; i++) {
        let string = i + "-Count";
        // console.log(string)
        // console.log(boatObject[i].length)
        boatObject[string] = boatObject[i].length;
    }

    // console.log(boatObject);


    // Determine how many boats are on the board.
    // Iterate through 'attacks' array. 
    for (let i = 0; i < attacks.length; i++) {
        // Go through each of our boats in our boat object.
        for (let j = 1; j <= boats; j++) {
            for (let k = 0; k < boatObject[j].length; k++) {
                if(attacks[i].toString() ===boatObject[j][k].toString()){ // Jamie, look at this.
                    boatObject[j].splice(k,1); // Jamie, look at this.
                }
            }
        }
      }

    // If an array value is in the boats object, take it out of the value that it's in.
    // Check the boat's object for sunk, damaged, untouched boats, and points.
    let score = {
        "sunk":0,
        "damaged":0,
        "notTouched":boats,
        "points":0
    }
    
    for(let i = 1; i <= boats; i++){ 
        let string = i + "-Count";
        if(boatObject[i].length === 0 ){
            // console.log("Boat " + i + " was sunk.")
            score.notTouched--;
            score.sunk++;
            score.points++;
        } else if (boatObject[i].length < boatObject[string]){
            // console.log("boat " + i + " was damaged.");
            score.notTouched--;
            score.damaged++;
            score.points+= 0.5;
        } else {
            score.points--;
            // console.log("boat " + i + " was untouched.")
        }
    } 
    
    
    
    
    // Return an object consisting of the vallues sunk, damaged,  untouched boats, and points.

    return score;
}

var board = [[2, 0, 1, 0],
[2, 0, 1, 0],
[0, 0, 1, 0]];

var attacks = [[3, 1], [3, 2], [3, 3]];

var result = damagedOrSunk(board, attacks);
console.log(result);
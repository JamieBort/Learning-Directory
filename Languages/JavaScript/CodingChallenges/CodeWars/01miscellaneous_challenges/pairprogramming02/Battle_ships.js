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
                    let coordinate = [boardWidth + 1 - j, boardHeight - i];
                    boatObject[board[i][j]].push(coordinate);
                } else {
                    boatObject[board[i][j]] = [];
                    let coordinate = [boardWidth + 1 - j, boardHeight - i]
                    boatObject[board[i][j]].push(coordinate);
                    let string = board[i][j] + "-Count";
                    boatObject[string] = 0;
                    boats++;
                }
            }
        }
    }
    for (let i=1; i<=boats; i++){
        let string = i + "-Count";
        console.log(string)
        console.log(boatObject[i].length)
        boatObject[string] = boatObject[i].length;
    }
    
    console.log(boatObject);
    // Determine how many boats are on the board.
    // Iterate through 'attacks' array. 
    // If an array value is in the boats object, take it out of the value that it's in.
    // Check the boat's object for sunk, damaged, untouched boats, and points.
    // Return an object consisting of the vallues sunk, damaged,  untouched boats, and points.



    // {
    // 1:[[3,3],[3,2],[3,1]],
    // 1-count:3 // the length of the array above.
    // }

}

var board = [[2, 0, 1, 0],
[2, 0, 1, 0],
[0, 0, 1, 0]];

var attacks = [[3, 1], [3, 2], [3, 3]];
var result = damagedOrSunk(board, attacks);

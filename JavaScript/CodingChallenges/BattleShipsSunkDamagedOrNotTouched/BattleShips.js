function damagedOrSunk(board, attacks) {
    // ******************* Counting the number of boats. *******************
    // Since each boat is represented by a number and the first boat starts with '1', then the highest number represents the number of boats.
    // Therefore we need to parse the arrays in the array to find the highest digit.

    // Try this with foreach now.
    // let myArray =[];
    // let myNumber = 0;
    // board.forEach(element => {
    //     console.log(Math.max(Math.max(...element)));
    //     myNumber = Math.max(Math.max(...element));
    //     console.log(typeof myNumber);
    //     myArray.push(myNumber);
    // });
    // console.log(myArray);
    // console.log(Math.max(Math.max(...myArray)));

    // Using a for loop.
    var dummmyArray = [];
    var NumberOfBoats = 0;
    for (i = 0; i < board.length; i++) {
        dummmyArray.push(Math.max(...board[i]));
    }
    NumberOfBoats = Math.max(...dummmyArray);

    // ******************* Determine the number of hits. *******************
    // First attack:
    let boardwidth = board[0].length;
    attacks[0];
    console.log(attacks[0]);
    console.log(attacks[0][0]);
    console.log(attacks[0][1]);

    // Swap the rows by making the last element of teh array the first, and the first element of the array the last.
    let newBoard = [];
    for (i=0; i<board.length; i++){
        newBoard[i] = board[board.length - (i+1)];
    }

    console.log(newBoard[attacks[0][1]][attacks[0][0]-1])

    // Alternatively, without swaping the rows:

    console.log(board[5]);
    console.log(board[5][2]);
    console.log(board[attacks[0][0]+2][attacks[0][1]+1]);

    // ******************* Output. *******************
    console.log(NumberOfBoats, "number of boats");
    console.log(board, "board");
    console.log(newBoard, "newBoard");
    console.log(attacks, "attacks");
}

// Game my game
var board = [[0, 0, 1, 0],
[0, 0, 1, 0],
[0, 0, 1, 0],
[3, 0, 1, 0],
[3, 0, 1, 0],
[0, 2, 1, 0],
[0, 2, 0, 0]];

var attacks = [[3, 1], [3, 2], [3, 3]];
var result = damagedOrSunk(board, attacks);

//   Game 1.
// var board = [[0, 0, 1, 0],
// [0, 0, 1, 0],
// [0, 0, 1, 0]];

// var attacks = [[3, 1], [3, 2], [3, 3]];
// var result = damagedOrSunk(board, attacks);

// Game 2
// var board = [ [3, 0, 1],
//               [3, 0, 1],
//               [0, 2, 1], 
//               [0, 2, 0] ];

// var attacks = [[2, 1], [2, 2], [ 3, 2], [3, 3], [1,2]]
// var result = damagedOrSunk(board, attacks)
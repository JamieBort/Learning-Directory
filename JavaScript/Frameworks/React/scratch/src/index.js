import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let boards = require('./trelloJson.json');
let cards = require('./trelloJsonCards.json');

class ParentClass extends React.Component {
    render() {
        return (
            <div>
                <Button
                    myFunction={function () { console.log(boards); }}
                    message="Click this button to console log a boards">
                </Button>
                <Button
                    myFunction={boardNames}
                    message="Click this button to console log the board names">
                </Button>
                <Button
                    myFunction={function () { console.log(boards[0]); }}
                    message="Click this button to console log a 'Bills an Health' board">
                </Button>
                <Button
                    myFunction={function () { console.log(cards); }}
                    message="Click this button to console log the 'Bills an Health' cards">
                </Button>
                <ListBoard></ListBoard>
                <p>This is the parent class</p>
                <ChildClass text="The attribute text gets passed from Parent class to child class" />
                {/* <Button
                    myFunction={function () { alert('click'); }}
                    message="Click this button for an alert">
                </Button> */}
            </div>
        );
    }
}

class ListBoard extends React.Component {
    render() {
        return (
            <div>
                <p>this is my card for listing boards.</p>
                <Button
                    myFunction={boardNames}
                    message="Click this button to console log a boards">
                </Button>
                <p id="myBoards"></p>
            </div>
        )
    }
}

class ChildClass extends React.Component {
    render() {
        const paragraph = "text entered into the paragraph tag"
        return (
            <div>
                <h2>{this.props.text}</h2>
                <p>{paragraph}</p>
            </div>
        )
    }
}

class Button extends React.Component {
    render() {
        return (<button
            onClick={this.props.myFunction}
        >
            {this.props.message}
        </button>);
    }
}

ReactDOM.render(
    <ParentClass />,
    document.getElementById('root')
);

// Display the content to the page.
// I populate the titles of the boards.
// I then populate the titles of the cards.
// I then list the description of one of the cards I select.


function boardNames() {
    console.log(boards);
    for (let i = 0; i < boards.length; i++) {
        console.log("The board name is: ", boards[i].name);
    }
    // document.getElementById('myBoards').innerHTML="Hello!";
    document.getElementById('myBoards').innerHTML=boards[0].name;
}


// function myFunction() {
    //  console.log("It works!")
// }






















// class Square extends React.Component {
//     render() {
//       return (
//         <button className="square">
//           {/* TODO */}
//         </button>
//       );
//     }
//   }

//   class Board extends React.Component {
//     renderSquare(i) {
//       return <Square />;
//     }

//     render() {
//       const status = 'Next player: X';

//       return (
//         <div>
//           <div className="status">{status}</div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }

//   class Game extends React.Component {
//     render() {
//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board />
//           </div>
//           <div className="game-info">
//             <div>{/* status */}</div>
//             <ol>{/* TODO */}</ol>
//           </div>
//         </div>
//       );
//     }
//   }

//   // ========================================

//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );

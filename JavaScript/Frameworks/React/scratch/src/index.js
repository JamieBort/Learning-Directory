import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ParentClass extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the parent class</h1>
                <ChildClass text="The attribute text gets passed from Parent class to child class" />
                <Button
                    myFunction={function () { alert('click'); }}
                    message="Click this button for an alert">
                </Button>
                <Button
                    myFunction={function () { console.log("Hello!"); }}
                    message="Click this button to console log a message">
                </Button>
            </div>
        );
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

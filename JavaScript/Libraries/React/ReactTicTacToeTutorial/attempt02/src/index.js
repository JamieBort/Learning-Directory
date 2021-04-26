// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

function Square(props) { // Replaced the Square class with this function at this Function Components https://reactjs.org/tutorial/tutorial.html#function-components section
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  function calculateWinner(squares) { // Added from this Delaring a Winner step: https://reactjs.org/tutorial/tutorial.html#declaring-a-winner
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

class Board extends React.Component {
    // constructor(props) { // Moved state from Board class to Game class at this Lifting State Up, Again https://reactjs.org/tutorial/tutorial.html#lifting-state-up-again section.
    //     super(props);
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext:true,
    //     };
    // }

    // handleClick=(i)=>{ // Moved this to the Game class and refactored for the Lifting State Up, Again https://reactjs.org/tutorial/tutorial.html#lifting-state-up-again section.
    //     const squares = this.state.squares.slice();
    //     if(calculateWinner(squares)||squares[i]) return;
    //     squares[i]= this.state.xIsNext ? "X":"O";
    //     this.setState({
    //         squares: squares,
    //         xIsNext:!this.state.xIsNext,
    //     });
    // }

    renderSquare(i) {
        return <Square
            // value={this.state.squares[i]} // Changed state to props at this Lifting State Up, Again https://reactjs.org/tutorial/tutorial.html#lifting-state-up-again section.
            value={this.props.squares[i]}
            // onClick={() => this.handleClick(i)} // Changed this to this.props at this Lifting State Up, Again https://reactjs.org/tutorial/tutorial.html#lifting-state-up-again section.
            // onClick={() => this.props.handleClick(i)}
            onClick={() => this.props.onClick(i)}
        />;
    }

    render() {
        // const winner= calculateWinner(this.state.squares);
        // let status;
        // // check winner
        // // winner = calculateWinner(this.state.squares[i]);
        // if(winner) status = 'Winner: ' + winner;
        // else status = "Next player: " + (this.state.xIsNext ? "X":"O");
        // // if winner display winner
        // // if not winner, display normal status
        // // status = "Next player: " + (this.state.xIsNext ? "X":"O");

        return (
            <div>
            {/* Commented this out at the Lifting State Up, Again https://reactjs.org/tutorial/tutorial.html#lifting-state-up-again section. */}
                {/* <div className="status">{status}</div> */}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) { // Moved state from Board class to Game class at this Lifting State Up, Again https://reactjs.org/tutorial/tutorial.html#lifting-state-up-again section.
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext:true,
        };
    }

    handleClick(i) {
        // const history = this.state.history;
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          history: history.concat([{
            squares: squares,
          }]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext,
        });
      }

      jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
        });
      }

    render() {
        const history = this.state.history;
        // const current = history[history.length-1];
        const current = history[this.state.stepNumber];
        const winner= calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
              'Go to move #' + move :
              'Go to game start';
            return (
                <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
            );
          });

        let status;
        if(winner) status = 'Winner: ' + winner;
        else status = "Next player: " + (this.state.xIsNext ? "X":"O");

        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                    squares={current.squares}
                    onClick={(i)=>this.handleClick(i)} 
                    />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <ol>{ moves }</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
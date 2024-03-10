import React from 'react';
import ButtonComponent from './ButtonComponent';
import ListComponent from './ListComponent';
// import './index.css';
import '../index.css';

let boards = require('../trelloJson.json');
let ListComponentMessage = "";

class ListBoard extends React.Component {
    render() {
        return (
            <div id="ListBoard">
                <p>this is my card for listing boards.</p>
                <ButtonComponent
                    myFunction={ListBoardNames}
                    message="Click this button to console log a boards">
                </ButtonComponent>
                {/* <p id="myBoards"></p>
                <p className="myBoards2"></p> */}
                <ListComponent text="This list component will be for Board titles." message={ListComponentMessage}>

                </ListComponent>
            </div>
        )
    }
}

function ListBoardNames() {
    
    // console.log(boards);
    for (let i = 0; i < 3; i++) {
        console.log("The board name is: ", boards[i].name);
    }
    // document.getElementById('myBoards').innerHTML="Hello!";

    // document.getElementById('myBoards').innerHTML=boards[0].name;

    // document.getElementsByClassName('myBoards2')[0].innerHTML=boards[2].name;
    
    // document.getElementById('myBoards2').innerHTML=boards[2].name;
    if (true){
        ListComponentMessage = "List Component Message";
           }

           console.log(ListComponentMessage);
                      return ListComponentMessage; 
}


export default ListBoard;
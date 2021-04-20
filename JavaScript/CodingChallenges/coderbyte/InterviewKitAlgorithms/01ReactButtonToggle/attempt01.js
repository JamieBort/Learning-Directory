import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state={
            textDisplay: false,
            texttext : "On",
        }
      // this.text = "On";
  }

  handleClick() {
    // todo
    console.log("it was pushed");
    this.setState((currentState) => ({
            textDisplay: !currentState.textDisplay, 
            texttext:"OFF",
        }));
  }

  render() {
    console.log("This runs automatically.");
    return (
      <button onClick={()=>this.handleClick()}>{this.state.texttext}</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
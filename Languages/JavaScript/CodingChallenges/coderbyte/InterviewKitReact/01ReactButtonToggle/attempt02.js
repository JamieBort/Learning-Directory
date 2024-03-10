// Preserving attempt01.js in case I mess this up badly.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state={
            textDisplay: false,
            message : "On",
        }
  }

  handleClick() {
    // todo
    console.log("The button was pushed.");
    console.log("textDisplay:", this.state.textDisplay);
    this.setState((currentState) => ({
            textDisplay: !currentState.textDisplay, 
            message: this.state.textDisplay ? "On" : "OFF",
        }));
  }

  render() {
    console.log("Rerendered.");
    return (
      <button onClick={()=>this.handleClick()}>
      {this.state.texttext}</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
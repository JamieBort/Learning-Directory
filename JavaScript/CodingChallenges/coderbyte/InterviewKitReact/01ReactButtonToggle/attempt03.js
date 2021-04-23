// Preserving attempt02.js in case I mess this up badly.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      text: "ON",
    }
  }
  handleClick() {
    // todo
    this.state.status ? console.log("On") : console.log("OFF");
    this.setState((currentState) => ({
      status: !currentState.status,
      text: this.state.status ? "ON" : "OFF",
    }));
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.text}</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
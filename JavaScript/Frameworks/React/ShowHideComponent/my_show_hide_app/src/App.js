import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Demo3 from './components/Demo3';

class App extends Component {
  constructor() { // Why isn't props passed in here?
    super(); // Why isn't props passed in here?
    this.state = {
      name: "React",
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo3: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        console.log("case one was selected");
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      case "showHideDemo2":
        console.log("case two was selected");
        this.setState({ showHideDemo2: !this.state.showHideDemo2});
        break;
      case "showHideDemo3":
        console.log("case three was selected");
        this.setState({ showHideDemo3: !this.state.showHideDemo3});
        break;
      default:
        console.log("the default option was chosen")
    }
  }

  render() {
    const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
    return (
      <div>
        <div>
          <button onClick={() => this.hideComponent("showHideDemo1")}>
            Click to show or hide Demo1
          </button>
          <button onClick={() => this.hideComponent("showHideDemo2")}>
            Click to show or hide Demo2
            </button>
          <button onClick={() => this.hideComponent("showHideDemo3")}>
            Click to show or hide Demo3
            </button>
        </div>
        {showHideDemo1 && <Demo1></Demo1>}
        {showHideDemo2 && <Demo2 />}
        {showHideDemo3 && <Demo3 />}
      </div>

      // <div className="App" >
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;

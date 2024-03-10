import React from 'react';
import './App.css';
var myObj = {
  name: 'Umut',
  age: 34,
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};
// var myCar = {
//   make: 'Ford',
//   model: 'Mustang',
//   year: 1969
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onClickFunction = () => {
    console.log(this.state);
    // console.log(this.state);
    // this.setState({make: 'Fords'});
    // this.setState({make: myObj});
    this.setState({myObj});
    // console.log(this.state);
    // if (this.state.info === "hi") {
    //   this.setState({ info: "bye" });
    // }
    // else {
    //   this.setState({ info: "hi" });
    // }
  }

  render() {
    return (
      <div>
        {/* <span>{this.state.info}</span> */}
        <button onClick={this.onClickFunction}>To update state: {this.state.info}</button>
        <button onClick={() => console.log(this.state)}>Console log the state.</button>
      </div>
    );
  }
}

export default App;

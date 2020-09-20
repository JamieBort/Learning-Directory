import React from 'react';
import './App.css';
// var myObj = {
//   name: 'Umut',
//   age: 34,
// };
// var myCar = {
//   make: 'Ford',
//   model: 'Mustang',
//   year: 1969
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "hi",
      make: 'Ford',
      model: 'Mustang',
      year: 1969,
    }
  }

  onClickFunction = () => {
    // console.log(myObj);
    console.log(this.state);
    this.setState({make: 'Fords'});
    console.log(this.state);
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
      </div>
    );
  }
}

export default App;

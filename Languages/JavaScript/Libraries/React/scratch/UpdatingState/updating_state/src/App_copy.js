import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "hi"
    };


    // var myObj={};
    // let myCar={};
    var car = { type: "Fiat", model: "500", color: "white" };
    //   var myObj = {
    //     name: 'Umut',
    //   age: 34
    // };
    // var myCar = {
    //   make: 'Ford',
    //   model: 'Mustang',
    //   year: 1969
    // };

    onClickFunction = () => {
      console.log(car, car);
      if (this.state.info === "hi") {
        this.setState({ info: "bye" });
      }
      else {
        this.setState({ info: "hi" });
      }
    }

    render() {
      return (
        <div>
          {/* <span>{this.state.info}</span> */}
          <button onClick={this.onClickFunction}>To update state: {this.state.info}</button>
        </div>
      );
    }
  
  };
  export default App;

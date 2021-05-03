import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  // MOST OF YOUR CODE GOES HERE

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>Display Name: </p>
        <p>Display Age: </p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input className="input" type="text" placeholder="William" />
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input className="input" type="number" placeholder="38" />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

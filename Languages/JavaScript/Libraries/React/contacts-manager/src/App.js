import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';
import axios from 'axios';

// const contacts = [
//   { id: 1, name: "Leanne Graham" },
//   { id: 2, name: "Ervin Howell" },
//   { id: 3, name: "Clementine Bauch" },
//   { id: 4, name: "Patricia Lebsack" }
// ];

class App extends React.Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response);
        console.log(response.data[0].name);
        console.log(response.data[0].email);
        // create an array of contacts only with relevant data
        const newContacts = response.data.map(c => {
          return {
            id: c.id,
            name: c.name,
            email: c.email,
            phone: c.phone,
          };
        });
        // create a new "State" object without mutating the original State object.
        const newState = Object.assign({}, this.state, { contacts: newContacts });
        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to our Contact Manager</h1>
        </header>

        <ContactList contacts={this.state.contacts}  />
      </div>
    );
  }
}

export default App;

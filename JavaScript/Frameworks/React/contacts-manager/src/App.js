import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';

const contacts = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to our Contact Manager</h1>
        </header>

        <ContactList contacts={contacts}/>
      </div>
    );
  }
}

export default App;

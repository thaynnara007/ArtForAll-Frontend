import React, { Component } from 'react';
import Navebar from './components/navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navebar logado={false}></Navebar>
      </div>
    );
  }
}

export default App;

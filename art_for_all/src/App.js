import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      logado: (localStorage.userId) ? true : false
    }
  }

  render() {
    return (
      <div>
        <Navbar logado={this.state.logado} userName="Profile"></Navbar>
      </div>
    );
  }
}

export default App;

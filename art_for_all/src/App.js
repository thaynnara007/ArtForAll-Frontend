import React, { Component } from 'react';
import Navebar from './components/navbar/Navbar';
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
        <Navebar logado={this.state.logado} userName="Profile"></Navebar>
      </div>
    );
  }
}

export default App;

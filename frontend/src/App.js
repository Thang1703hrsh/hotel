import React, { Component } from 'react';
import './App.css';
import Routes from './pages/Routes';

class App extends Component {
  render(){
    return (
        <div className="App">        
          <Routes />
        </div>
    );
  }
}

export default App;

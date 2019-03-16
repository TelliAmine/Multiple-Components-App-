import React, { Component } from 'react';
import Box from './Components/Box/Box';
import Back from './Components/Back/Back';
import Villes from './Components/Villes/Villes';
import Test from './Components/Test/Test';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 >NOS PROGRAMMES</h1> 
    <br/>
          <Box />
          <Back />
          <Villes/>
          
          

      </div>
    );
  }
}

export default App;

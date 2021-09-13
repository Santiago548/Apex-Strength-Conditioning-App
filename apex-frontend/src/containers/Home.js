import React, { Component } from "react";
import logo from '../assests/APEX_logo.jpg';

class Home extends Component {
 
  render() {
   
    return (
      <div>
             <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Welcome to the Strength and Conditioning Program
        </p>
      </header>
      </div>
    );
  }
}


export default Home;
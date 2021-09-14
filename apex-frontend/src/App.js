import React, { Component } from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from "./components/About"
import Home from "./containers/Home"
import Navigation from "./components/Navigation"

function App() {
  return (
    <Router>
      <Navigation />
      
    <div className="App">
   
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

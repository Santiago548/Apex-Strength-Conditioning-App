import logo from './assests/APEX_logo.jpg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Welcome to the Strength and Conditioning Program
        </p>
      </header>
    </div>
    </Router>
  );
}

export default App;

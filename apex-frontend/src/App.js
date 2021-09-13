import logo from './assests/APEX_logo.jpg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from "./components/About"
import Navigation from "./components/Navigation"

function App() {
  return (
    <Router>
      <Navigation />
      
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Welcome to the Strength and Conditioning Program
        </p>
      </header>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

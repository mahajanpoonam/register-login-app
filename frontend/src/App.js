import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";



function App() {
  return (
    <Router>
      <div className="App">
        <ul>
         <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />  
        </Switch>
      </div>
    </Router>
  );
}

export default App;

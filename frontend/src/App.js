import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";




function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            Already a user? 
            <Link className="Router-link" to="/sign-in">Sign In</Link>
             else
            <Link className="Router-link" to="/sign-up">Sign Up</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

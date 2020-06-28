import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
  render() {
    return (
      <div>
        <form className="container" onSubmit={(e) => signin(e)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
    );
  }
}

function signin(e){
  e.preventDefault();
  let request = {
    email: document.getElementById("exampleInputEmail1").value,
    password: document.getElementById("exampleInputPassword1").value
  }
  axios.post("http://localhost:4000/signin",request)
  .then( resp => {
     console.log(resp.data) 
  })
  .catch( err => {
     console.log(err)  
  })
}

export default SignIn;
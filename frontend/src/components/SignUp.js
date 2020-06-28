import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  render() {
    return (
      <div>
        <form className="container" onSubmit={(e) => signup(e)}>
          <div className="form-group">
            <div id = "message">  
              <label id="msg"/>
            </div>   
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    );
  }
}

function signup(e) {
  e.preventDefault();
  let msg = document.getElementById("message");
  let request = {
      email: document.getElementById("exampleInputEmail1").value,
      password: document.getElementById("exampleInputPassword1").value
  }

  axios.post("http://localhost:4000/signup", request)
  .then(resp => {
    console.log(resp.data)
    msg.textContent = "You are registered successfully." 
    msg.style.color = "green"
  })
  .catch(err => {
    console.log(err)
  })
}

export default SignUp;
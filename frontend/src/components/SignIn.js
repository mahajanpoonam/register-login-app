import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      toDashboard: false,
      errMsg: ''
    }
  }  
    
  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/dashboard' />
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={(e) => this.signin(e)}>
              <label className="Heading-label">Sign In</label>
              <div>
                <label className="Err-msg">{this.state.errMsg}</label>
              </div>
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
        </div>
      </div>
    );
  }
  
  signin(e) {
    e.preventDefault();
    let request = {
      email: document.getElementById("exampleInputEmail1").value,
      password: document.getElementById("exampleInputPassword1").value
    }
    axios.post("http://localhost:4000/signin", request)
      .then(resp => {
        console.log(resp.data.message)
        if(resp.data.message === "success"){
          this.setState({
            toDashboard: true
          })
        }else{
          this.setState({
            errMsg: "Incorrect email or password.Try Again"
          })
        }

      })
      .catch(err => {
        console.log(err)
      })
  }
  
}

export default SignIn
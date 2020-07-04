import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      toSignIn: false
    }
  }

  render() {
    if (this.state.toSignIn === true) {
      return <Redirect to='/sign-in' />
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={(e) => this.signup(e)}>
              <label className="Heading-label">Sign Up</label>
              <label>{this.state.message}</label>
              <div className="form-group">
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
        </div>
      </div>
    )
  }

  signup(e){
    e.preventDefault();
    
    let request = {
      email: document.getElementById("exampleInputEmail1").value,
      password: document.getElementById("exampleInputPassword1").value
    }

    axios.post("http://localhost:4000/signup", request)
      .then(resp => {
        console.log(resp.data)
        this.setState({
          toSignIn: true
        })
        return <Redirect to='/sign-in' />
      })
      .catch(err => {
        console.log(err)
      })
  }

}

export default SignUp
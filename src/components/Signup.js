import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const { REACT_APP_SERVER_URL } = require('../utils/keys')
// fix this like in backend if necessary (using keys.js)

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const newUser = { name, email, password };
      // send this to our API
      // does the POST request we've tried in Postman
      axios.post(`${REACT_APP_SERVER_URL}/controllers/users/register`, newUser).then(response => {
        console.log(response);
        setRedirect(true);
      }).catch(error => {
        console.log(error);
      })
    }
  }

  if (redirect) return <Redirect to="/login" />

  return (
    <div className="row mt-4">
      <div className="col-md-7 offset-md-3">
        <div className="card card-body">
          <h2 className="py-2">Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={name} onchange={handleName} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="name" value={email} onchange={handleEmail} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input type="password" name="password" value={password} onchange={handlePassword} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" name="confirmPassword" value={confirmPassword} onchange={handleConfirmPassword} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary float-right">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;

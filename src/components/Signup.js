import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
// fix this like in backend if necessary (using keys.js)

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  return (
    <div className="row mt-4">
      <div className="col-md-7 offset-md-3">
        <div className="card card-body">
          <h2 className="py-2">Signup</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={name} onchange={} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="name" value={email} onchange={} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input type="password" name="password" value={password} onchange={} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" name="confirmPassword" value={confirmPassword} onchange={} className="form-control" />
            </div>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Signup;

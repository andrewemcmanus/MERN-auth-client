// Imports
require('dotenv').config();
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
// import { Component } from 'react';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route { ...rest } render={(props) => {
    // TERNARY:
    return user ? <Component {...rest} { ...props }/> : <Redirect to="/login" />
  }}/>
}

function App() {
// set state values:
const [currentUser, setCurrentUser] = useState('');
const [isAuthenticated, setIsAuthenticated] = useState(true);

useEffect(() => {
  let token;
  // if there's no token in localStorage, then the user is not authenticated
  if (!localStorage.getItem('jwtToken')) {
    setIsAuthenticated(false);
  } else {
    token = jwt_decode(localStorage.getItem('jwtToken'));
    setAuthToken(localStorage.jwtToken);
    setCurrentUser(token);
  }
}, []);

const nowCurrentUser = (userData) => {
  console.log('nowCurrentUser is here!');
  setCurrentUser(userData);
  setIsAuthenticated(true);
};

const handleLogout = () => {
  if (localStorage.getItem('jwtToken')) {
    localStorage.removeItem('jwtToken');
    setCurrentUser(null);
    setIsAuthenticated(false);
  }
};

  return (
    <div className="App">
      <NavBar handleLogout={handleLogout} isAuth={isAuthenticated} />
      // add <Welcome />
    </div>
  );
}

export default App;

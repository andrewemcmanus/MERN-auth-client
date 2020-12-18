import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './App.css';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
// import { Component } from 'react';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest } render={(props) => {
    // TERNARY:
    return user ? <Component {...rest} { ...props }/> : <Redirect to="/login" />
  }}/>
}

function App() {


  return (
    <div className="App">
      <NavBar />
      <Welcome />
    </div>
  );
}

export default App;

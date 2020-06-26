import React from 'react';
import './App.css';

import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";

import MyComponent from './components/TestComponent.js';
import Navbar from './components/Navbar.js';
// import {Router} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <MyComponent />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;

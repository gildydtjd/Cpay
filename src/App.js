import React from 'react';
import './App.css';
import MainBody from './body/MainBody';
import LoginBody from './body/LoginBody'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainBody} />
        <Route path="/Login" component={LoginBody} />
      </Router>
    </div>
  );
}

export default App;

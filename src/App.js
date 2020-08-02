import React from 'react';
import './App.css';
import MainBody from './body/MainBody';
import LoginBody from './body/LoginBody'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './footer/Footer';
import Header2 from './header/Header2';
import ProductDetail from './body/ProductDetail';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header2 />
        <Route exact path="/" component={MainBody} />
        <Route path="/Login" component={LoginBody} />
        <Route path="/Product/detail" component={ProductDetail} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

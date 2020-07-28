import React from 'react';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import MainBody from './body/MainBody';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;

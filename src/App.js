import React from 'react';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import MainBody from './body/MainBody';
import Header2 from './header/Header2';

function App() {
  
  return (
    <div className="App">
      <Header2 />
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;

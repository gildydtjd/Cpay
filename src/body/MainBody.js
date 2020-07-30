import React, { Component } from 'react'
import './mainbody.css';
import Banner from '../component/Banner';
import Header from '../header/Header';
import Header2 from '../header/Header2';
import Footer from '../footer/Footer';
export default class MainBody extends Component {
  render() {
    return (
      <div className="MainBody">
        <Header2 />
        <Header />
        <Banner />
        <Footer />
      </div>
    )
  }
}

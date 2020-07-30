import React, { Component } from 'react'
import './mainbody.css';
import Banner from '../component/Banner';
import Header from '../header/Header';
import BodyData from '../component/BodyData';
export default class MainBody extends Component {
  render() {
    return (
      <div className="MainBody">
        <Header />
        <Banner />
        <BodyData />
      </div>
    )
  }
}

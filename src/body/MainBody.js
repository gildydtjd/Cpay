import React, { Component } from 'react'
import './mainbody.css';
import Banner from '../component/Banner';
export default class MainBody extends Component {
  render() {
    return (
      <div className="MainBody">
        <Banner />
      </div>
    )
  }
}

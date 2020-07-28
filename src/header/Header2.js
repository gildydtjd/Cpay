import React, { Component } from 'react'
import "./header2.css";
export default class Header2 extends Component {
  render() {
    return (
      <div className="header">
      <div className="header-class">
        <div>
          <div className="header-text">
            <ul>
            <li className="header-li" onClick={() => window.scrollTo(0,3700)}>고객센터</li>
            <li className="header-li" onClick={() => window.scrollTo(0,2010)}>이용방법</li>
            <li className="header-li" onClick={() => window.scrollTo(0,950)}>PC</li>
            <li className="header-li" onClick={() => window.scrollTo(0,950)}>Google</li>
            <li className="header-li" onClick={() => window.scrollTo(0,0)}>Login</li>
            </ul>
            </div>
            <div className="blank_white"></div>
            </div></div>
            </div>
    )
  }
}

import React, { Component } from 'react'
import "./header2.css";
import { Link } from "react-router-dom";


export default class Header2 extends Component {
  render() {
    return (
      <div className="header">
      <div className="header-class">
        <div>
          <div className="header-text">
            <ul>
            <Link><li className="header-li">고객센터</li></Link>
            <Link><li className="header-li">이용방법</li></Link>
            <Link><li className="header-li">PC</li></Link>
            <Link><li className="header-li">Google</li></Link>
            <Link to="/Login"><li className="header-li">Login</li></Link>
            </ul>
            </div>
            <div className="blank_white"></div>
            </div></div>
            </div>
    )
  }
}

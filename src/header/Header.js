import React, { Component } from 'react'
import './header.css';
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <table className="header_top">
          <tbody>
            <tr>
              <td style={{float:'left'}}>
                <Link to="/"><img alt ="" style={{width:'400px', height:'100px', marginLeft:'50px', marginTop:'10%'}} src="./Img/CpayLogo2.png"/></Link>
                <p style={{width:'400px', height:'30px', marginLeft:'50px', backgroundColor:'#c9c9c9', color:'white', lineHeight:'29px'}}>2020년 대리결제 사이트 1위</p>
              </td>
            </tr>
          </tbody>
        </table>        
    </div>
    )
  }
}

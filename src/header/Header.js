import React, { Component } from 'react'
import './header.css';
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <table className="header_top">
          <tbody>
            <tr>
              <td style={{verticalAlign:'top', width:'33%'}}>
                <a href="/"><img alt="" style={{width:'400px', height:'300px', marginLeft:'100px'}} src="./Img/Cpay_mainLogo.png"/></a>
              </td>

              <td style={{width:'33%'}}>
              <div className="frame">
                <div className="center">
                  <input type="text" placeholder="리니지m"/>
                </div>
              </div>              
              </td>

            </tr>
          </tbody>
        </table>        
    </div>
    )
  }
}

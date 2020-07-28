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
                <a href="/"><img alt="" style={{width:'400px', height:'300px', marginLeft:'200px'}} src="./Img/Cpay_mainLogo.png"/></a>
              </td>

              <td style={{width:'33%', backgroundColor:'white'}}>


              </td>

              <td style={{width:'33%'}}>
                <table style={{ marginRight:'10px', marginLeft :'19%'}}>
                  <tbody>
                    <tr>
                      <td className="TextA" style={{paddingRight:'60px', cursor:'pointer'}}>LOGIN</td>
                      <td className="TextA" style={{paddingRight:'60px', cursor:'pointer'}}>SIGN UP</td>
                      <td className="TextA" style={{cursor:'pointer'}}>FIND</td>
                   </tr>
                 </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>        
      <div style={{position:'relative', height:'64px', borderBottom:'5px solid black'}}>
      <table style={{width:'80%', marginLeft:'10%'}}>
        <tbody>
          <tr>
          <td><a className="mainMenu">Google</a></td>
          <td><a className="mainMenu">Mobile</a></td>
          <td><a className="mainMenu">PC</a></td>
          <td><a className="mainMenu">About</a></td>
          <td><a className="mainMenu">Help</a></td>
          </tr>
      </tbody></table>
    </div>
    </div>
    )
  }
}

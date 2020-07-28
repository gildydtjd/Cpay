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
                      <td><a className="TextA" style={{cursor:'pointer'}}>LOGIN</a></td>
                      <td style={{width:'60px'}}></td>
                      <td><a className="TextA" style={{cursor:'pointer'}}>SIGN UP</a></td>
                      <td style={{width:'60px'}}></td>
                      <td><a className="TextA" style={{cursor:'pointer'}}>FIND</a></td>
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
          <td className="menu_Td"><a className="mainMenu">Google</a></td>
          <td className="menu_Td"><a className="mainMenu">Mobile</a></td>
          <td className="menu_Td"><a className="mainMenu">PC</a></td>
          <td className="menu_Td"><a className="mainMenu">About</a></td>
          <td className="menu_Td"><a className="mainMenu">Help</a></td>
          </tr>
      </tbody></table>
    </div>
    </div>
    )
  }
}

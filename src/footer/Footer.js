import React, { Component } from 'react'
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <table style={{width:'100%', backgroundColor:'#f5f5f5'}}>
          <tbody>
            <tr>
              <td></td>
              <td style={{width:'1240px',padding:'10px', height:'28px'}}>
                <table style={{width : '100%'}}>
                  <tbody>
                    <tr>
                      <td>
                        <table style={{marginLeft: '0px'}}>
                          <tbody>
                            <tr>
                              <td className="TextB" style={{cursor:'pointer', color:'#313131', fontWeight:'900'}}>개인정보처리방침</td>
                              <td style={{width : '20px'}}></td>
                              <td className="TextB" style={{cursor:'pointer', color:'#313131', fontWeight:'900'}}>이용약관</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <table style={{marginRight:'-40px', cursor:'pointer'}}>
                          <tbody>
                            <tr>
                              <td><img style={{width:'19px', height:'19px'}} alt="" src="https://png.pngtree.com/png-vector/20190116/ourmid/pngtree-vector-upload-icon-png-image_322162.jpg"></img></td>
                              <td style={{width:'4px'}}></td>
                              <td className="TextB" style={{color:'#313131', fontWeight:'900'}}>맨위로</td>
                            </tr>
                          </tbody>
                        </table>

                      </td>
                    </tr>
                  </tbody>
                </table>

              </td>
              <td></td>
            </tr>
            <tr></tr>
            <tr>
              <td colSpan="3" style={{borderTop:'1px solid #e4e4e4'}}></td>
            </tr>
            <tr>
              <td></td>
              <td style={{width:'1240px', padding:'10px'}}>
                <table style={{width:'100%', marginTop:'25px', marginBottom:'50px'}}>
                  <tbody>
                    <tr>
                      <td >
                        <img style={{width:'163px', paddingRight:'20px'}} alt="" src="./Img/CpayLogo.png"></img>
                      </td>
                      <td style={{paddingLeft:'30px'}}>
                        <div>(주)씨페이 | 주소 : 경기도 남양주시 도농동 부영애시앙 8층 202호 | 통신판매번호 : 제 2020-경기남양주-9999 호</div>
                        <div style={{marginTop:'5px'}}>사업자등록번호 : 999-99-99999 | 대표 : 길용성</div>
                        <div style={{marginTop:'5px'}}>대표전화 : 010-3094-1587 | 휴대전화 : 010-3094-1587 | 이메일 : gildydtjd@naver.com</div>
                        <div style={{marginTop:'5px'}}>Copyright by Dragon All Rights Reserved.</div>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

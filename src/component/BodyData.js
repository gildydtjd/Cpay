import React, { Component } from 'react'
import "./bodyData.css"
import "./bodyData.css";
export default class BodyData extends Component {
  render() {
    return (
      <div className="body_Data">
        <div style={{height:'60px', marginTop:'40px', textAlign:'center', fontSize:'48px', fontFamily: 'Nanum Gothic E', fontWeight:'600', marginBottom:'50px'}}>베스트 상품</div>
        <div style={{position: 'relative', height: '720px', marginBottom: '50px'}}>
          <table className="mainContentPosition">
            <tbody>
              <tr>
              <td style={{width:'295px', height:'345px', verticalAlign:'top'}}>
                <div style={{position:'relative', width:'100%', height:'330px', cursor:'pointer'}} onclick="location.href='/product/detail.sns?M=2&amp;pdNumber=447';">
                  <div className="gameListCover"></div>
                   <div style={{position:'absolute', zIndex:'10', top:'5px', left:'5px', width:'285px', height:'285px', backgroundImage:"url('./Img/game/lineage.jpg')", backgroundSize:'100%'}}
                   className="radius30"></div> 
                   <div style={{position:'absolute', top:'300px', width:'295px', height:'20px', textAlign:'center'}} className="textE S18">리니지2M</div></div>
              </td>

              <td style={{width:'295px', height:'345px', verticalAlign:'top'}}>
                <div style={{position:'relative', width:'100%', height:'330px', cursor:'pointer'}} onclick="location.href='/product/detail.sns?M=2&amp;pdNumber=447';">
                  <div className="gameListCover"></div>
                   <div style={{position:'absolute',top:'5px', left:'5px', width:'285px', height:'285px', backgroundImage:"url('./Img/game/ragnarok.png')", backgroundSize:'100%'}}
                   className="radius30"></div> 
                   <div style={{position:'absolute', top:'300px', width:'295px', height:'20px', textAlign:'center'}} className="textE S18">라그나로크 오리진</div></div>
              </td>

              <td style={{width:'295px', height:'345px', verticalAlign:'top'}}>
                <div style={{position:'relative', width:'100%', height:'330px', cursor:'pointer'}} onclick="location.href='/product/detail.sns?M=2&amp;pdNumber=447';">
                  <div className="gameListCover"></div>
                   <div style={{position:'absolute', top:'5px', left:'5px', width:'285px', height:'285px', backgroundImage:"url('./Img/game/Acain.jpg')", backgroundSize:'100%'}}
                   className="radius30"></div> 
                   <div style={{position:'absolute', top:'300px', width:'295px', height:'20px', textAlign:'center'}} className="textE S18">아케인m</div></div>
              </td>

              <td style={{width:'295px', height:'345px', verticalAlign:'top'}}>
                <div style={{position:'relative', width:'100%', height:'330px', cursor:'pointer'}} onclick="location.href='/product/detail.sns?M=2&amp;pdNumber=447';">
                  <div className="gameListCover"></div>
                   <div style={{position:'absolute',  top:'5px', left:'5px', width:'285px', height:'285px', backgroundImage:"url('./Img/game/stone.png')", backgroundSize:'100%'}}
                   className="radius30"></div> 
                   <div style={{position:'absolute', top:'300px', width:'295px', height:'20px', textAlign:'center'}} className="textE S18">스톤에이지 월드</div></div>
              </td>
              </tr>
              <tr>
              <td style={{width:'295px', height:'345px', verticalAlign:'top'}}>
                <div style={{position:'relative', width:'100%', height:'330px', cursor:'pointer'}} onclick="location.href='/product/detail.sns?M=2&amp;pdNumber=447';">
                  <div className="gameListCover"></div>
                   <div style={{position:'absolute', top:'5px', left:'5px', width:'285px', height:'285px', backgroundImage:"url('./Img/game/wind.jpg')", backgroundSize:'100%'}}
                   className="radius30"></div> 
                   <div style={{position:'absolute', top:'300px', width:'295px', height:'20px', textAlign:'center'}} className="textE S18">바람의나라:연</div></div>
              </td><td style={{width:'295px', height:'345px', verticalAlign:'top'}}>
                <div style={{position:'relative', width:'100%', height:'330px', cursor:'pointer'}} onclick="location.href='/product/detail.sns?M=2&amp;pdNumber=447';">
                  <div className="gameListCover"></div>
                   <div style={{position:'absolute',  top:'5px', left:'5px', width:'285px', height:'285px', backgroundImage:"url('./Img/game/mu.png')", backgroundSize:'100%'}}
                   className="radius30"></div> 
                   <div style={{position:'absolute',  top:'300px', width:'295px', height:'20px', textAlign:'center'}} className="textE S18">뮤 아크엔젤</div></div>
              </td><td style={{width:'295px', height:'345px', verticalAlign:'top'}}>
                <div style={{position:'relative', width:'100%', height:'330px', cursor:'pointer'}} onclick="location.href='/product/detail.sns?M=2&amp;pdNumber=447';">
                  <div className="gameListCover"></div>
                   <div style={{position:'absolute', top:'5px', left:'5px', width:'285px', height:'285px', backgroundImage:"url('./Img/game/a3.jpg')", backgroundSize:'100%'}}
                   className="radius30"></div> 
                   <div style={{position:'absolute', top:'300px', width:'295px', height:'20px', textAlign:'center'}} className="textE S18">A3:스틸얼라이브</div></div>
              </td><td style={{width:'295px', height:'345px', verticalAlign:'top'}}>
                <div style={{position:'relative', width:'100%', height:'330px', cursor:'pointer'}} onclick="location.href='/product/detail.sns?M=2&amp;pdNumber=447';">
                  <div className="gameListCover"></div>
                   <div style={{position:'absolute', top:'5px', left:'5px', width:'285px', height:'285px', backgroundImage:"url('./Img/game/ma9ma9.png')", backgroundSize:'100%'}}
                   className="radius30"></div> 
                   <div style={{position:'absolute', zIndex:'10', top:'300px', width:'295px', height:'20px', textAlign:'center'}} className="textE S18">마구마구2020</div></div>
              </td>

              </tr>
            </tbody>
          </table>
        </div>
        </div>
    )
  }
}

import React, { Component } from 'react'
import "./bodyData.css";
import { Link } from "react-router-dom";

export default class BodyGameData extends Component {
  render() {
    const gameData = [
      {
        engN : "lineage",
        name : "리니지m",
        url : "./Img/game/lineage.jpg"
      },
      {
        engN : "lol",
        name : "리그오브레전드",
        url : "../../Img/pc/lol.jpg"
      },
      {
        engN : "fifa",
        name : "피파온라인",
        url : "../../Img/pc/fifa.jpg"
      },
      {
        engN : "stone",
        name : "스톤에이지 월드",
        url : "./Img/game/stone.png"
      },
      {
        engN : "steam",
        name : "스팀",
        url : "../../Img/pc/steam.jpg"
      },
      {
        engN : "wind",
        name : "바람의나라:연",
        url : "./Img/game/wind.jpg"
      },
      {
        engN : "over",
        name : "오버워치",
        url : "../../Img/pc/over.jpg"
      },
      
      {
        engN : "ma9ma9",
        name : "마구마구2020",
        url : "./Img/game/ma9ma9.png"
      },
    ]
    return (
      <div className="body_Data">
        <div style={{height:'60px', marginTop:'40px', textAlign:'center', fontSize:'48px', fontFamily: 'Nanum Gothic E', fontWeight:'600', marginBottom:'50px'}}>베스트 상품</div>
        <div style={{position: 'relative', height: '720px', marginBottom: '50px', display:'inline-block'}}>
          <div className="mainContentPosition">
        {gameData.map((game, index) => (
            <div key={index}  style={{width:'295px', height:'345px', verticalAlign:'top', display:'inline-block', marginRight:'10px'}}>
            <div style={{position:'relative', width:'100%', height:'330px', cursor:'pointer', display:'inline-block'}}>
            <Link to={"/Product/detail/" + game.engN}><div className="gameListCover">
            <img alt="" src={game.url} style={{position:'absolute',top:'5px', left:'5px', width:'285px', height:'285px'}} className="radius30"></img>,
            <div style={{position:'absolute', zIndex:'10', top:'300px', width:'295px', height:'20px', textAlign:'center'}} className="textE S18">{game.name}</div>
            </div></Link>
            </div>
            </div>
        ))}
          </div>
          </div>
        </div>
    )
  }
}

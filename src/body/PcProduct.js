import React, { Component } from 'react'
import Header from '../component/header/Header'
import { Link } from "react-router-dom";

export default class PcProduct extends Component {
  render() {
    const gameData = [
      {
        engN : "lol",
        name : "리그오브레전드",
        url : "../Img/pc/lol.jpg"
      },
      {
        engN : "lostArk",
        name : "로스트 아크",
        url : "../Img/pc/lostArk.jpg"
      },
      {
        engN : "windwind",
        name : "바람의나라",
        url : "../Img/pc/windwind.png"
      },
      {
        engN : "over",
        name : "오버워치",
        url : "../Img/pc/over.jpg"
      },
      {
        engN : "sudden",
        name : "서든어택",
        url : "../Img/pc/sudden.jpg"
      },
      {
        engN : "world",
        name : "월드 오브 워크래프트",
        url : "../Img/pc/world.jpg"
      },
      {
        engN : "steam",
        name : "스팀",
        url : "../Img/pc/steam.jpg"
      },
      {
        engN : "fifa",
        name : "피파온라인",
        url : "../Img/pc/fifa.jpg"
      },
    ]
    return (
      <div>
        <Header />
          <div style={{height:'850px'}}>
          <div className="body_Data">
        <div style={{height:'60px', marginTop:'40px', textAlign:'center', fontSize:'48px', fontFamily: 'Nanum Gothic E', fontWeight:'600', marginBottom:'50px'}}>PC 게임</div>
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
            </div>
            </div>
    )
  }
}

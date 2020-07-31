import React, { Component } from 'react'
import "./bodyData.css";
export default class BodyGameData extends Component {
  render() {
    const gameData = [
      {
        name : "리니지m",
        url : "./Img/game/lineage.jpg"
      },
      {
        name : "라그나로크 오리진",
        url : "./Img/game/ragnarok.png"
      },
      {

        name : "아케인m",
        url : "./Img/game/Acain.jpg"
      },
      {
        name : "스톤에이지 월드",
        url : "./Img/game/stone.png"
      },
      {
        name : "바람의나라:연",
        url : "./Img/game/wind.jpg"
      },
      {
        name : "뮤 아크엔젤",
        url : "./Img/game/mu.png"
      },
      {
        name : "A3:스틸얼라이브",
        url : "./Img/game/a3.jpg"
      },
      {
        name : "마구마구2020",
        url : "./Img/game/ma9ma9.png"
      },
    ]
    return (
      <div className="body_Data">
        <div style={{height:'60px', marginTop:'40px', textAlign:'center', fontSize:'48px', fontFamily: 'Nanum Gothic E', fontWeight:'600', marginBottom:'50px'}}>베스트 상품</div>
        <div style={{position: 'relative', height: '720px', marginBottom: '50px', display:'inline-block'}}>
          <div className="mainContentPosition">
        {gameData.map(game => {
          return(
            <div style={{width:'295px', height:'345px', verticalAlign:'top', display:'inline-block'}}>
            <div style={{position:'relative', width:'100%', height:'330px', cursor:'pointer', display:'inline-block'}} onclick="/">
            <div className="gameListCover">
            <img key={game.key} src={game.url} style={{position:'absolute',top:'5px', left:'5px', width:'285px', height:'285px'}} className="radius30"></img>,
            <div key={game.key} style={{position:'absolute', zIndex:'10', top:'300px', width:'295px', height:'20px', textAlign:'center'}} className="textE S18">{game.name}</div>
            </div>
            </div>
            </div>
          )})}
          </div>
          </div>
        </div>
    )
  }
}
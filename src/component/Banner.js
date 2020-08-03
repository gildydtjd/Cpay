import React, { Component } from 'react'
import './banner.css';
import Slideshow from './Slideshow';
export default class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <Slideshow />
        <div className="banner_Info" style={{width: '50%', display:'contents'}}>
          
          <div className="help">
            <span>카카오톡</span>
            <h1>Cpay</h1>
            <span>고객센터</span>
            <h1>010-3094-1587</h1>
            <span>영업시간</span>
            <h1>09:00~익일03:00</h1>
          </div>
          
          <div className="help2">
          <span>첫 구매시 유의사항</span>
            <h3 style={{fontSize:'13px'}}>1. 지인을 사칭한 금전 갈취 사기 의심</h3>
            <h3 style={{fontSize:'13px'}}>2. 보이스피싱, 메신저피싱, 스미싱 의심</h3>
            <h3 style={{fontSize:'13px'}}>3. 타인의 요청으로 상품권 구매 시 유의</h3>
          </div>

          <div className="help3">
          <span>입금 계좌</span>
            <h3>본인인증 후 </h3>
            <h3>계좌안내</h3>
            <span>예금주</span>
            <h3>(주)씨페이드래곤</h3>
          </div>
        </div>
      </div>
    )
  }
}

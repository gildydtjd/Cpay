import React, { Component } from 'react'
import Header2 from '../header/Header2'
import Header from '../header/Header'

export default class ProductDetail extends Component {
  render() {
    return (
      <div>
        <Header2 />
        <Header />
          <div style={{height:'800px'}}>
            <div style={{borderBottom:'2px solid #c9c9c9', width:'70%', marginLeft:'15%', fontSize:'30px', fontWeight:'500', marginBottom:'50px'}}>{}구매정보</div>
              <table style={{width:'70%', borderTop:'2px solid #cdcdcd', borderBottom:'2px solid #cdcdcd', marginLeft:'15%'}}>
                <tbody>
                  <tr>
                      <td class="formHead R">상품명</td>
                      <td class="formBody L">리니지M</td>
                    </tr>
                  <tr>
                    <td class="formHead R">월간상품</td>
                    <td class="formBody L">
                      <select id="optionList1" name="optionList1" onchange="selectedOption(1);" class="selectBox" style={{padding:'5px 10px 5px 10px'}}>
                        <option value="">-결제하실 상품을 선택하세요-</option>
                        <option value="1" data="52250">빛나는 드래곤의 다이아몬드 상자 패키지</option>
                        <option value="2" data="52250">빛나는 컬렉션 조각 상자 패키지</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td class="formHead R">패키지</td>
                    <td class="formBody L">
                      <select id="optionList2" name="optionList2" onchange="selectedOption(2);" class="selectBox" style={{padding:'5px 10px 5px 10px'}}>
                        <option value="">-결제하실 상품을 선택하세요-</option>
                        <option value="1" data="31350">라라의 빛나는 보급 상자</option>
                        <option value="2" data="31350">아툰의 상자</option>
                        <option value="3" data="31350">판도라의 상자</option>
                        <option value="4" data="31350">아슈르의 특별한 보급 상자</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td class="formHead R">재화</td>
                    <td class="formBody L">
                      <select id="optionList3" name="optionList3" onchange="selectedOption(3);" class="selectBox" style={{padding:'5px 10px 5px 10px'}}>
                        <option value="">-결제하실 상품을 선택하세요-</option>
                        <option value="1" data="3135">120 다이아</option>
                        <option value="2" data="10450">400 다이아</option>
                        <option value="3" data="31350">1200 다이아</option>
                        <option value="4" data="52250">2000 다이아</option>
                        <option value="5" data="104500">4000 다이아</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td class="formHead R">일반</td>
                    <td class="formBody L">
                      <select id="optionList4" name="optionList4" onchange="selectedOption(4);" class="selectBox" style={{padding:'5px 10px 5px 10px'}}>
                        <option value="">-결제하실 상품을 선택하세요-</option>
                        <option value="1" data="52250">드래곤의 용옥</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
        </div>
      </div>
    )
  }
}

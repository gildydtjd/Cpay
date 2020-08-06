import React, { Component } from 'react'
import Header from '../component/header/Header'
import './productDetail.css';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      url : "",
      keyword : "",
    }
  }

  componentDidMount(){
    const keyword = this.props.match.params.keyword;
    console.log(keyword);
    switch(keyword){
      case 'lineage' : 
      this.setState({
        name : "리니지m",
        url : "./Img/game/lineage.jpg"
      })
      break;

      case 'ragnarok' :
        this.setState({
          name : "라그나로크 오리진",
          url : "./Img/game/ragnarok.png"
        })
        break;
        default :
  }
}
  render() {
    return (
      <div>
        <Header />
          <div style={{height:'800px'}}>
            <div style={{borderBottom:'4px solid black', width:'70%', marginLeft:'15%', fontSize:'30px', fontWeight:'500', marginBottom:'50px', lineHeight:'70px'}}>{this.state.name}구매 정보</div>
              <table style={{width:'70%', borderTop:'2px solid #cdcdcd', borderBottom:'2px solid #cdcdcd', marginLeft:'15%'}}>
                <tbody>
                  <tr>
                      <td className="detail_category">상품명</td>
                      <td className="formBody L">{this.state.name}</td>
                    </tr>
                  <tr>
                    <td className="detail_category">월간상품</td>
                    <td className="formBody L">
                      <select id="optionList1" name="optionList1" onchange="selectedOption(1);" className="selectBox" style={{padding:'5px 10px 5px 10px'}}>
                        <option value="">-결제하실 상품을 선택하세요-</option>
                        <option value="1" data="52250">빛나는 드래곤의 다이아몬드 상자 패키지</option>
                        <option value="2" data="52250">빛나는 컬렉션 조각 상자 패키지</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="detail_category">패키지</td>
                    <td className="formBody L">
                      <select id="optionList2" name="optionList2" onchange="selectedOption(2);" className="selectBox" style={{padding:'5px 10px 5px 10px'}}>
                        <option value="">-결제하실 상품을 선택하세요-</option>
                        <option value="1" data="31350">라라의 빛나는 보급 상자</option>
                        <option value="2" data="31350">아툰의 상자</option>
                        <option value="3" data="31350">판도라의 상자</option>
                        <option value="4" data="31350">아슈르의 특별한 보급 상자</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="detail_category">재화</td>
                    <td className="formBody L">
                      <select id="optionList3" name="optionList3" onchange="selectedOption(3);" className="selectBox" style={{padding:'5px 10px 5px 10px'}}>
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
                    <td className="detail_category">일반</td>
                    <td className="formBody L">
                      <select id="optionList4" name="optionList4" onchange="selectedOption(4);" className="selectBox" style={{padding:'5px 10px 5px 10px'}}>
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

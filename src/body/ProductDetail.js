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
        url : "../../Img/game/lineage.jpg"
      })
      break;

      case 'ragnarok' :
        this.setState({
          name : "라그나로크 오리진",
          url : "../../Img/game/ragnarok.png"
        })
        break;

        case 'Acain' :
        this.setState({
          name : "아케인m",
          url : "../../Img/game/Acain.jpg"
        })
        break;

        case 'stone' :
        this.setState({
          name : "스톤에이지 월드",
          url : "../../Img/game/stone.png"
        })
        break;

        case 'wind' :
        this.setState({
          name : "바람의나라:연",
          url : "../../Img/game/wind.jpg"
        })
        break;

        case 'mu' :
        this.setState({
          name : "뮤 아크엔젤",
          url : "../../Img/game/mu.png"
        })
        break;

        case 'a3' :
          this.setState({
            name : "A3:스틸얼라이브",
            url : "../../Img/game/a3.jpg"
          })
          break;

        case 'ma9ma9' :
        this.setState({
          name : "마구마구2020",
          url : "../../Img/game/ma9ma9.png"
        })
        break;

        case 'lol' :
        this.setState({
          name : "리그오브레전드",
          url : "../../Img/pc/lol.jpg"
        })
        break;

        case 'lostArk' :
          this.setState({
            name : "로스트 아크",
            url : "../../Img/pc/lostArk.jpg"
          })
          break;
          
        case 'windwind' :
          this.setState({
            name : "바람의나라",
            url : "../../Img/pc/windwind.png"
          })
          break;
          
        case 'over' :
          this.setState({
            name : "오버워치",
            url : "../../Img/pc/over.jpg"
          })
          break;
          
        case 'sudden' :
          this.setState({
            name : "서든어택",
            url : "../../Img/pc/sudden.jpg"
          })
          break;
          
        case 'world' :
          this.setState({
            name : "월드 오브 워크래프트",
            url : "../../Img/pc/world.jpg"
          })
          break;
          
        case 'steam' :
          this.setState({
            name : "스팀",
            url : "../../Img/pc/steam.jpg"
          })
          break;
          
        case 'fifa' :
          this.setState({
            name : "피파온라인",
            url : "../../Img/pc/fifa.jpg"
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
            <div style={{borderBottom:'4px solid black', width:'70%', marginLeft:'15%', fontSize:'30px', fontWeight:'500', marginBottom:'50px', lineHeight:'70px'}}>{this.state.name} / 구매 정보</div>
              <div style={{width :'35%', float:'left', marginLeft:'10%'}}><img alt="" style={{width:'250px', height:'250px'}} src={this.state.url}></img></div>
              <table style={{width:'40%', borderTop:'2px solid #cdcdcd', borderBottom:'2px solid #cdcdcd'}}>
                <tbody>
                  <tr>
                      <td className="detail_category">상품명</td>
                      <td className="formBody L">{this.state.name}</td>
                    </tr>
                  <tr>
                    <td className="detail_category">월간상품</td>
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

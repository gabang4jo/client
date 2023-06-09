import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import bbook_user from '../assets/bbook_user.png'
import bbook_money from '../assets/bbook_money.png'

const IntroductionContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
`;

const IntroductionNameBox=styled.div`
  color: white;
  background-color: #3964E5;
  height: 200px;
  text-align: left;
  padding-left: 140px;
  line-height: 270px;
  font-weight: 600;
  font-size: 50px;
`;

const IntroductionBody = styled.div`
  color: #333333;

  .menu_name {
    margin-left: 80px;
    margin-top: 80px;
    font-size: 27px;
    font-weight: 550;
  }

  .menu_name_sub {
    margin-left: 80px;
    margin-top: 30px;
    font-size: 22px;
    font-weight: 550;
  }

  .menu_intro {
    margin-left: 80px;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const IntroductionMenu=styled.div`
li { 
  display: table-cell; 
  position: relative; 
}

a {
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  
  display: inline-block;
  padding: 15px 20px;
  position: relative;
}

a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #3964E5;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after { 
  width: 100%; 
  left: 0; 
}  
`;

const IntroductionSubMenu = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100vw;
  margin-top: 40px;

  .navigation__link_now {
    height: 80px;
    width: 450px;

    text-decoration: none;
    font-size: 23px;
    color: #ffffff;
  }

  .navigation__link {
    height: 80px;
    width: 450px;

    text-decoration: none;
    font-size: 23px;
    color: #333333;
  }

  div:hover {
    height: 80px;
    border: none;
    background-color: #3964E5;
    color: #ffffff;
    transition: ease 0.4s;
  }
`;

const IntroductionContent = styled.div`
  height: 700px;

  .content_name {
    margin-left: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
  }

  .content_tip {
    margin-left: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 17px;
    font-weight: 500;
  }

  .content_box {
    border: solid 1px #c9c9c9;
    background-color: #f9f9f9;
    color: #0768c9;
    text-align: center;
    line-height: 30px;
    padding: 10px;
    height: 60px;
    width: 90vw;
    margin: 0 auto;
  }

  .mt_30 {
    margin-top: 30px;
  }

  .color_gray {
    color: #555555;
  }

  .color_red {
    color: #bd413d;
  }

  .first_content {
    border-top: 2px solid #3964E5;
    border-bottom: 1px solid #c9c9c9;
    margin: auto;
    padding: 40px 0;
    height: 220px;
    width: 90vw;

    ul{
      display:flex;
      list-style: none;

      li:first-child{
        border-left : none;
      }

      li{
        width: 50%;
        display: table-cell;
        text-align: center;
      }

      li.cell{
        border-left : 1px solid #c9c9c9;
      }
    }

    ul li p {
      color: #1964dc;
      font-size: 22px;
      font-weight: 550;
    }
  }

  .tbl_caption {
    text-align: right;
    margin-right: 100px;
    margin-bottom: 10px;
    display: block;
  }

  table.tbl_st {
    width: 90vw;
    margin: auto;
    table-layout: fixed;
    border-spacing: 0;
    border-bottom: 1px solid #c9c9c9;
  }

  table.tbl_st th, table.tbl_st td{
    height: auto;
    border-top: 1px solid #c9c9c9;
    box-sizing: border-box;
    word-break: keep-all;
    word-wrap: break-word;
    white-space: normal;
  }

  table.tbl_st th {
    padding: 1px 8px;
    background-color: #f5f5f5;
    border-right: 1px solid #c9c9c9;
    border-left: 1px solid #c9c9c9;
    color: #333;
  }

  table.tbl_st td {
    padding: 5px 15px;
    border-right: 1px solid #c9c9c9;
    border-left: 1px solid #c9c9c9;
    color: #333;
  }

  table.tbl_st.tbl_center td {
    text-align: center;
  }

  th {
    font-weight: 400;
    font-family: noto-sans-scott-r;
  }

  table {
    display: table;
    text-indent: initial;
    margin: 0;
    padding: 0;
  }
`;

const NavUl = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 40px;

  .navigation__link_now {
    margin-inline: 40px;

    font-family: 'Inter';
    font-style: normal;
    font-size: 21px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;

    color:#333333;
    text-decoration: none;
  }

  .navigation__link {
    margin-inline: 40px;

    font-family: 'Inter';
    font-style: normal;
    font-size: 21px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;

    color:#666666;
    text-decoration: none;
  }
`;

const Bar = styled.hr`
  border:none;
  height:1px;
  background-color: #e6e6e6;
  width: 100%;
`;

const Box1 = styled.div`
  height: 80px;
  width: 100%;
  background-color: #3964E5;
  text-align: center;
  line-height: 80px;
`;

const Box2 = styled.div`
  height: 78px;
  width: 100%;
  background-color: #ffffff;

  border: 1px solid #e1e1e1;
  text-align: center;
  vertical-align: middle;
  line-height: 80px;
`;

function Nav(){
  return <NavUl>
    <li><Link to="/introduction/0/a" className="navigation__link">청약주택</Link></li>
    <li><Link to="/introduction/1/a" className="navigation__link_now">청약통장</Link></li>
    <li><Link to="/introduction/2" className="navigation__link">청약자격</Link></li>
    <li><Link to="/introduction/3" className="navigation__link">청약신청방법</Link></li>
  </NavUl>
}

function Introduction({...loginUserProps}) {
    return (
      <IntroductionContainer>
        <MainHeader {...loginUserProps} ></MainHeader>
        <IntroductionNameBox>청약 소개</IntroductionNameBox>
        <IntroductionBody>
          <IntroductionMenu>
          <Nav></Nav>
          <Bar></Bar>
          </IntroductionMenu>
          <div className='menu_name'>■ 청약통장</div>
          <IntroductionSubMenu>
            <Link to="/introduction/1/a" className="navigation__link"><Box2>청약통장 종류</Box2></Link>
            <Link to="/introduction/1/b" className="navigation__link"><Box2>주택청약종합저축</Box2></Link>
            <Link to="/introduction/1/c" className="navigation__link"><Box2>청약저축</Box2></Link>
            <Link to="/introduction/1/d" className="navigation__link_now"><Box1>청약예금ㆍ청약부금</Box1></Link>
          </IntroductionSubMenu>
          <div className='menu_name_sub'>■ 청약예금</div>
          <div className='menu_intro'>청약예금은 민영주택을 공급받기 위하여 가입하는 저축입니다.</div>
          <div className='menu_intro'>청약부금은 주거전용면적 85m² 이하의 민영주택을 공급받기 위하여 가입하는 저축입니다.</div>
          <IntroductionContent>
            <div className='mt_30'></div>
            <div className='first_content'>
              <ul>
                <li>
                  <img src={bbook_user} alt="가입대상 아이콘"></img>
                  <p>가입대상</p>
                  <span class="color_gray">
                    만 19세 이상의 개인 (세대주인 경우 만 19세 미만인 경우도<br/>
                    가입 가능하나 단독세대주는 가입 불가)<br/>
                  </span>
                  <span class="color_red">*15월 9월 1일부터 신규가입 중단</span>
                </li>
                <li className='cell'>
                  <img src={bbook_money} alt="금액 아이콘"></img>
                  <p>적립방법/저축금액</p>
                  <span class="color_gray">
                    매월 2만원 이상 50만원 이내에서 자유롭게 납입
                  </span>
                </li>
              </ul>
            </div>
            <div className='menu_name_sub'>■ 지역별 예치금액 ("지역"은 입주자모집공고일 현재 주택공급신청자의 주민등록표에 따른
            거주지역 기준임)</div>
            <p class='tbl_caption'>(단위 : 만원)</p>
            <table class="tbl_st tbl_center">
						<colgroup>
							<col style={{width:'auto'}}/>
							<col style={{width:'14%'}}/>
							<col style={{width:'14%'}}/>
							<col style={{width:'14%'}}/>
							<col style={{width:'14%'}}/>
							<col style={{width:'14%'}}/>
							<col style={{width:'14%'}}/>
						</colgroup>
						<thead>
							<tr>
								<th scope="rowgroup" rowspan="2">구분</th>
								<th scope="colgroup" colspan="3">청약예금</th>
								<th scope="colgroup" colspan="3">청약부금<br/>(85m<sup>2</sup> 이하의 주택에만 청약신청 가능)</th>
							</tr>
							<tr>
								<th scope="col">서울/부산</th>
								<th scope="col">기타 광역시</th>
								<th scope="col">기타 시/군</th>
								<th scope="col">서울/부산</th>
								<th scope="col">기타 광역시</th>
								<th scope="col">기타 시/군</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>85㎡ 이하</td>
								<td>     300</td>
								<td>     250</td>
								<td>     200</td>
								<td>     300</td>
								<td>     250</td>
								<td>     200</td>	
							</tr>
							<tr>
								<td>102㎡ 이하</td>
								<td>     600</td>
								<td>     400</td>
								<td>     300</td>
								<td colspan="3" rowspan="3">
									<small class="color_red">청약부금으로 민영주택 2순위 청약 시에는<br/>예치금에 관계없이 모든 주택 규모 청약 가능</small>
								</td>
							</tr>
							<tr>
								<td>135㎡ 이하</td>
								<td>   1,000</td>
								<td>     700</td>
								<td>     400</td>
							</tr>
							<tr>
								<td>모든면적</td>
								<td>   1,500</td>
								<td>   1,000</td>
								<td>     500</td>
							</tr>
						</tbody>
					</table>
          </IntroductionContent>
        </IntroductionBody>
      </IntroductionContainer>
    );
}
    
export default Introduction;
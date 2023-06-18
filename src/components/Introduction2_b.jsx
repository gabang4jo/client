import styled from 'styled-components'
import React from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'

const IntroductionContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    .mt_10 {
      margin-top: 10px;
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
  
    .color_blue {
      color: #3964e5;
    }
  
    .color_black {
      color: #333333;
    }
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

const IntroductionSubMenu = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100vw;
  margin-top: 40px;

  .navigation__link_now {
    height: 80px;
    width: 900px;

    text-decoration: none;
    font-size: 23px;
    color: #ffffff;
  }

  .navigation__link {
    height: 80px;
    width: 900px;

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
    margin-top: 10px;
    font-size: 17px;
    font-weight: 500;
  }

  .content {
    margin-left: 120px;
    margin-top: 10px;
    font-size: 15px;
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
    border-left: 1px solid #c9c9c9;
    border-right: 1px solid #c9c9c9;
    color: #333;
  }

  table.tbl_st td {
    padding: 5px 15px;
    border-left: 1px solid #c9c9c9;
    border-right: 1px solid #c9c9c9;
    color: #333;
  }

  .txt_c {
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

  ul.bul_list > li {
    padding-left: 13px;
    box-sizing: border-box;
    margin: 3px 0;
    position: relative;
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
    <li><Link to="/introduction/1/a" className="navigation__link">청약통장</Link></li>
    <li><Link to="/introduction/2/a" className="navigation__link_now">청약자격</Link></li>
    <li><Link to="/introduction/3/a" className="navigation__link">청약신청방법</Link></li>
  </NavUl>
}

function Introduction() {
    return (
      <IntroductionContainer>
        <MainHeader></MainHeader>
        <IntroductionNameBox>청약 소개</IntroductionNameBox>
        <IntroductionBody>
          <IntroductionMenu>
          <Nav></Nav>
          <Bar></Bar>
          </IntroductionMenu>
          <div className='menu_name'>■ 청약자격</div>
          <IntroductionSubMenu>
            <Link to="/introduction/2/a" className="navigation__link"><Box2>민영주택</Box2></Link>
            <Link to="/introduction/2/b" className="navigation__link_now"><Box1>국민주택</Box1></Link>
          </IntroductionSubMenu>
          <div className='menu_name_sub'>■ 국민주택</div>
          <div className='menu_intro'>최초 입주자모집공고일 현재 해당 주택건설지역 또는 인근지역에 거주하는 자로서 민법에 따른
          성년자(만 19세 이상)와 아래의 어느 하나에 해당하는 세대주인 미성년자(주택청약 시 성년자로 인정)<br/>만 청약 신청할 수 있습니다.
          단, 아래의 자녀 및 형제자매는 세대주인 미성년자와 같은 세대별 주민등록표등본에 등재되어 있어야 합니다.</div>
          <div className='menu_intro'>
            - 자녀를 양육하는 경우<br/>
            - 직계존속의 사망, 실종선고 및 행방불명 등으로 형제자매를 부양하는 경우
          </div>
          <div className='menu_intro'>
            - 동일한 주민등록표등본에 함께 등재된 <span className="color_blue">세대</span>[청약신청자의 배우자, 직계존속(배우자의 직계존속포함) 및 직계비속(직계비속의 배우자포함)] <span className='color_blue'>전원이 주택 또는 분양권등을 소유하고 있지 아니한<br/>
            세대구성원(무주택세대구성원)</span>은 국민주택에 청약신청할 수 있습니다.<br/>
              * 다만 청약신청자의 배우자가 별도의 주민등록표등본에 등재되어 있는 경우에는(배우자분리세대) 그 배우자와 배우자의 주민등록표등본에 등재된 직계존·비속을 포함합니다.
          </div>
          <IntroductionContent>
            <div className='mt_30'></div>
            <table className="tbl_st">
					  	<colgroup>
					  		<col style={{width:'15%'}}/>
					  		<col style={{width:'15%'}}/>
					  		<col style={{width:'35%'}}/>
					  		<col style={{width:'35%'}}/>
					  	</colgroup>
					  	<thead>
					  		<tr>
					  			<th scope="colgroup" rowSpan="2">청약순위</th>
					  			<th scope="colgroup" rowSpan="2">청약통장<br/>(입주자저축)</th>
					  			<th scope="col" colSpan="2">순위별 조건</th>
					  		</tr>
					  		<tr>
					  			<th scope="col">청약통장 가입기간</th>
					  			<th scope="col">납입금</th>
					  		</tr>
					  	</thead>
					  	<tbody>
					  		<tr>
					  			<th scope="row" rowSpan="2">1순위</th>
					  			<td className="txt_c">주택청약<br/>종합저축</td>
					  			<td rowSpan="2">
					  				<ul className="bul_list">
					  					<li className="color_black">투기과열지구 및 청약과열지역<br/>: 가입 후 2년이 경과한 분</li>
					  					<li className="color_black">위축지역<br/>: 가입 후 1개월이 경과한 분</li>
					  					<li className="color_black">
					  						투기과열지구 및 청약과열지역, 위축지역 외
					  						<ul className="bul_list line_list">
					  							<li className="color_black">수도권 지역 : 가입 후 1년이 경과한 분</li>
					  							<li className="color_black">수도권 외 지역 : 가입 후 6개월이 경과한 분<br/>(다만, 필요한 경우 시ㆍ도지사가 수도권은 24개월, 수도권 외 지역은 12개월까지 연장 가능)</li>
					  						</ul>
					  					</li>
					  				</ul>
					  			</td>
					  			<td rowSpan="2">
					  				<p>매월 약정납입일에 월 납입금을 연체없이 다음의 지역별 납입횟수 이상 납입한 분</p>
					  				<ul className="bul_list">
					  					<li className="color_black">투기과열지구 및 청약과열지역 : 24회</li>
					  					<li className="color_black">위축지역 : 1회</li>
					  					<li className="color_black">
					  						투기과열지구 및 청약과열지역, 위축지역 외
					  						<ul className="bul_list line_list">
					  							<li className="color_black">수도권 지역 : 12회</li>
					  							<li className="color_black">수도권 외 지역 : 6회<br/>(다만, 필요한 경우 시ㆍ도지사가 수도권은 24회,<br/>수도권 외 지역은 12회까지 연장 가능)</li>
					  						</ul>
					  					</li>
					  				</ul>
					  				<ul className="bul_list star_list">
					  					<li className="color_black">단, 월납입금을 연체하여 납입한 경우 주택 공급에 관한 규칙 제10조제3항에 따라 순위 발생일이 순연됨.</li>
					  				</ul>
					  			</td>
					  		</tr>
					  		<tr>
					  			<td className="txt_c">청약저축</td>
					  		</tr>
					  		<tr>
					  			<th scope="row">2순위<br/><small className="dis_b">(1순위 제한 자<sup>주)</sup> 포함)</small></th>
					  			<td colSpan="3">1순위에 해당하지 않는 분 (청약통장 가입자만 청약가능)</td>
					  		</tr>
					  	</tbody>
					  </table>
            <div className='mt_30'></div>
            <div className='content_tip'>
              주) 1순위 제한 자
            </div>
            <div className='content_tip'>
            - 투기과열지구 또는 청약과열지역 내 국민주택에 청약하는 경우 청약통장이 1순위에 해당하여도 2순위로 청약하여야 합니다.<br/>
            </div>
            <div className='content color_gray'>
              (1) 세대주가 아닌 자<br/>
              (2) 과거 5년 이내에 다른 주택에 당첨된 자가 속해 있는 무주택세대구성원<br/>
            </div>
            <div className='content_tip'>
              * 순위별 청약자격 발생 기준일 : 최초 입주자모집공고일<br/>
              * 동일한 주택 및 당첨자 발표일이 동일한 국민주택에 대해 <span className='color_blue'>한 세대에서 한 사람만</span> 청약신청하여야 합니다.<br/>
              한 세대에서 2인 이상 청약 시 <span className='color_blue'>당첨취소</span> 등 불이익이 발생할 수 있습니다.
            </div>
          </IntroductionContent>
        </IntroductionBody>
      </IntroductionContainer>
    );
}
    
export default Introduction;
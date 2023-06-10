import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"

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
  height: 850px;

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

  .first_content {
    border-top: 2px solid #3964E5;
    border-bottom: 1px solid #c9c9c9;
    margin: auto;
    padding: 100px 0;
    height: 100px;
    width: 90vw;

    ul {
      display:flex;
      list-style: none;

      li:first-child{
        border-left : none;
      }

      li{
        width: 50%;
        display: table-cell;
        text-align: center;
        border-left : 1px solid #c9c9c9;
      }
    }
  }

  .second_content {
    border-top: 2px solid #3964E5;
    border-bottom: 1px solid #c9c9c9;
    margin: auto;
    padding: 60px 0;
    height: 100px;
    width: 90vw;

    ul {
      display:flex;
      box-sizing: border-box;
      list-style: none;

      li{
        width: 100%;
        display: table-cell;
        text-align: center;
      }
    }
  }
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
    <li><Link to="/introduction/0/a" className="navigation__link_now">청약주택</Link></li>
    <li><Link to="/introduction/1/a" className="navigation__link">청약통장</Link></li>
    <li><Link to="/introduction/2/a" className="navigation__link">청약자격</Link></li>
    <li><Link to="/introduction/3/a" className="navigation__link">청약신청방법</Link></li>
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
          <div className='menu_name'>■ 청약주택</div>
          <IntroductionSubMenu>
            <Link to="/introduction/0/a" className="navigation__link_now"><Box1>주택의 종류</Box1></Link>
            <Link to="/introduction/0/b" className="navigation__link"><Box2>주택의 종류에 따른 청약 가능 통장</Box2></Link>
          </IntroductionSubMenu>
          <div className='menu_name_sub'>■ 주택의 종류</div>
          <IntroductionContent>
            <div className='content_name'>- 국민주택</div>
            <div className='content_box'>
              *국민주택규모 : 주거전용면적 85m²이하.<br/>단, 수도권 및 도시지역이 아닌 읍ㆍ면 지역은 주거전용면적 100m² 이하
            </div>
            <div className='mt_30'></div>
            <div className='first_content'>
              <ul>
                <li>
                  <img src={icon1} alt="85m2 이하"></img>
                  <p>국가, 지방자치단체, LH 및 지방공사가 건설하는<br/> 주거전용면적 85m² 이하의 주택</p>
                </li>
                <li>
                  <img src={icon1} alt="85m2 이하"></img>
                  <p>국가나 지방자치단체의 재정 또는 주택도시기금(구<br/> 국민주택기금)을 지원받아 건설ㆍ개량하는<br/> 주거전용면적 85m²이하의 주택</p>
                </li>
              </ul>
            </div>

            <div className='content_name'>- 민영주택</div>
            <div className='mt_30'></div>
            <div className='second_content'>
              <ul>
                <li>
                  <img src={icon2} alt="85m2 이하"></img>
                  <p>국민주택을 제외한 주택</p>
                </li>
              </ul>
            </div>
            <div className='content_tip'>* 주택종류에 따라 청약자격, 입주자(당첨자) 선정 방식, 재당첨 제한 등이 다르게 적용됩니다.</div>
          </IntroductionContent>
        </IntroductionBody>
      </IntroductionContainer>
    );
}
    
export default Introduction;
import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import check from '../assets/check.png'

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
  height: 500px;

  .content_name {
    margin-left: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
  }

  .sub_chk_blue {
    border: none;
    background-image: url(${check});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: left center;
    padding: 0 0 0 1.4rem;
    background-color: transparent;
    text-align: left;
    font-size: 1.125rem;
  }

  .first_content {
    border-top: 2px solid #3964E5;
    border-bottom: 1px solid #c9c9c9;
    margin: auto;
    padding: 60px 0;
    height: 200px;
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

    li > p {
      color: #1964dc;
      font-size: 20px;
      font-weight: 550;
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
          <Link to="/introduction/0/a" className="navigation__link"><Box2>주택의 종류</Box2></Link>
            <Link to="/introduction/0/b" className="navigation__link_now"><Box1>주택의 종류에 따른 청약 가능 통장</Box1></Link>
          </IntroductionSubMenu>
          <div className='menu_name_sub'>■ 주택의 종류에 따른 청약 가능 통장</div>
          <IntroductionContent>
            <div className='mt_30'></div>
            <div className='first_content'>
              <ul>
                <li>
                  <img src={icon1} alt="국민주택 아이콘"></img>
                  <p className='house_name'>국민주택</p>
                  <div className='mt_10'></div>
                  <span className='sub_chk_blue'>
                    <small>주택청약종합저축</small>
                  </span>
                  <div className='mt_10'></div>
                  <span className='sub_chk_blue'>
                    <small>청약저축</small>
                  </span>
                </li>
                <li>
                  <img src={icon2} alt="민영주택 아이콘"></img>
                  <p className='house_name'>민영주택</p>
                  <div className='mt_10'></div>
                  <span className='sub_chk_blue'>
                    <small>주택청약종합저축</small>
                  </span>
                  <div className='mt_10'></div>
                  <span className='sub_chk_blue'>
                    <small>청약예금ㆍ부금</small>
                  </span>
                </li>
              </ul>
            </div>
          </IntroductionContent>
        </IntroductionBody>
      </IntroductionContainer>
    );
}
    
export default Introduction;
import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'

const IntroductionContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
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
        </IntroductionBody>
      </IntroductionContainer>
    );
}
    
export default Introduction;
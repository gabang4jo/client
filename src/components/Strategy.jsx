import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'

const RecommendContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 1440;
    height: 1024;
`;

const RecommendNameBox=styled.div`
  color: white;
  background-color: #3964E5;
  height: 200px;
  text-align: left;
  padding-left: 140px;
  line-height: 270px;
  font-weight: 600;
  font-size: 50px;
`;

const RecommendMenu=styled.div`
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

function Nav(){
  return <NavUl>
    <li><Link to="/recommend/calculator" className="navigation__link">가점계산기</Link></li>
    <li><Link to="/recommend/strategy" className="navigation__link_now">추천전략</Link></li>
  </NavUl>
}

function Strategy({...loginUserProps}) {
 
    return (
      <RecommendContainer>
        <MainHeader {...loginUserProps} ></MainHeader>
        <RecommendNameBox>청약 추천</RecommendNameBox>
        <RecommendMenu>
          <Nav></Nav>
          <Bar></Bar>
        </RecommendMenu>
      </RecommendContainer>
    );
}
    
export default Strategy;
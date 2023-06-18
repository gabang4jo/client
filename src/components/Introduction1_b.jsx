import styled from 'styled-components'
import React from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import bbook_user from '../assets/bbook_user.png'
import bbook_money from '../assets/bbook_money.png'
import check from '../assets/check.png'
import ic_total from '../assets/ic_total.png'

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

  .total_txt {
    padding-left: 1.2rem;
    background-image: url(${ic_total});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: left 0.4rem;
    text-align: left;
  }

  .sub_chk_blue {
    border: none;
    background-image: url(${check});
    background-size: auto 0.8rem;
    background-repeat: no-repeat;
    background-position: left 0.4rem;
    padding: 0 0 0 1.4rem;
    background-color: transparent;
    text-align: left;
    font-size: 1.125rem;
  }

  .first_content {
    border-top: 2px solid #3964E5;
    border-bottom: 1px solid #c9c9c9;
    margin: auto;
    padding: 40px 0;
    height: 180px;
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

  .second_content {
    border: 1px solid #c9c9c9;
    margin: auto;
    padding: 20px 0;
    height: 240px;
    width: 90vw;
    background-color: #f4f8ff;

    ul {
      display:flex;
      list-style: none;

      li:first-child{
        border-left : none;
      }

      li{
        width: 50%;
        display: table-cell;
      }

      li.cell{
        border-left : 1px solid #c9c9c9;
      }
    }

    ul li {
      padding-left: 65px;
    }

    ul li p {
      color: #1964dc;
      font-size: 21px;
      font-weight: 550;
    }

    
    ul li p.total_txt {
      color: #333333;
      font-size: 19px;
      font-weight: 550;
    }

    .color_gray {
      color: #666666;
    }
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
    <li><Link to="/introduction/2/a" className="navigation__link">청약자격</Link></li>
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
          <div className='menu_name'>■ 청약통장</div>
          <IntroductionSubMenu>
            <Link to="/introduction/1/a" className="navigation__link"><Box2>청약통장 종류</Box2></Link>
            <Link to="/introduction/1/b" className="navigation__link_now"><Box1>주택청약종합저축</Box1></Link>
            <Link to="/introduction/1/c" className="navigation__link"><Box2>청약저축</Box2></Link>
            <Link to="/introduction/1/d" className="navigation__link"><Box2>청약예금ㆍ청약부금</Box2></Link>
          </IntroductionSubMenu>
          <div className='menu_name_sub'>■ 주택청약종합저축</div>
          <div className='menu_intro'>2009년 5월 6일 출시된 주택청약종합저축은 기존의 청약저축에 청약예금, 
          청약부금 기능을 한데 묶어 놓은 입주자저축(청약통장)으로 국민주택과 민영주택 모두에 청약할 수 있습니다.</div>
          <IntroductionContent>
            <div className='mt_30'></div>
            <div className='first_content'>
              <ul>
                <li>
                  <img src={bbook_user} alt="가입대상 아이콘"></img>
                  <p>가입대상</p>
                  <span className="color_gray">
                    국내 거주자인 개인
                    <br/>
                    (연령, 자격제한에 관계없이 누구나 가입 가능)
                  </span>
                </li>
                <li className='cell'>
                  <img src={bbook_money} alt="금액 아이콘"></img>
                  <p>적립방법/저축금액</p>
                  <span className="color_gray">
                    매월 2만원 이상 50만원 이내에서 자유롭게 납입
                  </span>
                </li>
              </ul>
            </div>
            <div className='menu_name_sub'>■ 가입 시 구비서류</div>
            <div className='mt_30'></div>
            <div className='second_content'>
              <ul>
                <li>
                  <p className='sub_chk_blue'>본인이 직접 가입신청 시</p>
                  <p className='total_txt'>실명확인증표</p>
                </li>
                <li className='cell'>
                  <p className='sub_chk_blue'>배우자/직계 존·비속이 대리 가입신청 시</p>
                  <p className='total_txt'>주민등록표등본</p>
                  <p className='total_txt'>대리인 실명확인증표</p>
                </li>
                <li className='cell'>
                  <p className='sub_chk_blue'>제3자가 가입신청 시</p>
                  <p className='total_txt'>본인 및 대리인 실명확인증표</p>
                  <p className='total_txt'>본인이 작성한 위임장</p>
                  <p className='total_txt'>본인의 인감증명서 (금융계좌 개설용)</p>
                </li>
              </ul>
            </div>
          </IntroductionContent>
        </IntroductionBody>
      </IntroductionContainer>
    );
}
    
export default Introduction;
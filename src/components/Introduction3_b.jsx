import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'

const IntroductionContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

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
  height: 650px;

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

  table.tbl_st_in {
    width: 100%;
  }

  table.tbl_st th, table.tbl_st td{
    height: auto;
    border-top: 1px solid #c9c9c9;
    box-sizing: border-box;
    word-break: keep-all;
    word-wrap: break-word;
    white-space: normal;
  }

  table.tbl_st tr th {
    height: auto;
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
    <li><Link to="/introduction/2/a" className="navigation__link">청약자격</Link></li>
    <li><Link to="/introduction/3/a" className="navigation__link_now">청약신청방법</Link></li>
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
          <IntroductionSubMenu>
            <Link to="/introduction/3/a" className="navigation__link"><Box2>인터넷 청약신청</Box2></Link>
            <Link to="/introduction/3/b" className="navigation__link_now"><Box1>은행지점 청약신청</Box1></Link>
          </IntroductionSubMenu>
          <div className='menu_name_sub'>■ 은행지점 청약신청</div>
          <IntroductionContent>
            <div className='content_tip'>
              * 정보취약계층(고령자 및 장애인 등) 등에 한하여 은행지점에서 APT 1·2순위 청약신청 가능하며, 특별공급은 청약 불가
            </div>
            <div className='mt_30'></div>
            <table className="tbl_st">
				    	<colgroup>
				    		<col style={{width:'9%'}}/>
				    		<col style={{width:'17%'}}/>
				    		<col style={{width:'auto'}}/>
				    	</colgroup>
				    	<thead>
				    		<tr>
				    			<th scope="col">구분</th>
				    			<th scope="col" colSpan="2">구비사항</th>
				    		</tr>
				    	</thead>
				    	<tbody>
				    		<tr>
				    			<td className="txt_c" rowSpan="2">일반<br/>공급</td>
				    			<td className="txt_c">본인<br/>신청 시</td>
				    			<td>
				    				<ul className="bul_list line_list black_list">
				    					<li>주택공급신청서(청약통장 가입은행 비치)</li>
				    					<li>주택청약종합저축(청약예·부금 포함) 통장</li>
				    					<li>예금인장 또는 본인 서명
				    					<br/>
				    					※ 그 외 구비사항은 생략하오니 직접 작성하시기 바랍니다.
				    					</li>
				    				</ul>
				    			</td>
				    		</tr>
				    		<tr>
				    			<td className="txt_c">제3자<br/>대리신청 시<br/>추가사항<br/>(배우자 포함)</td>
				    			<td>
				    				<ul className="bul_list line_list black_list">
				    					<li>본인 이외에는 모두 대리 신청자(배우자 및 직계 존∙비속 포함)로 간주하며 상기 구비사항 외에 다음의 서류를 추가로 구비하여야 함</li>
                      <div className='mt_30'></div>
				    					<table className="tbl_st tbl_st_in">
				    						<colgroup>
				    							<col style={{width:'auto'}}/>
				    							<col style={{width:'44%'}}/>
				    						</colgroup>
				    						<thead>
				    							<tr>
				    								<th scope="col">인감증명 방식</th>
				    								<th scope="col">본인서명사실확인 방식</th>								
				    							</tr>
				    						</thead>
				    						<tbody>
				    							<tr>
				    								<td>
				    									<ul className="bul_list line_list black_list">
				    										<li>청약자의 인감증명서 1통(용도 : 주택공급신청 위임용)<br/> 
                                 단, 재외동포 또는 외국인의 경우 본국<br/>
                                 관공서의 증명(서명인증서)이나 이에 관한 공정증서</li>
				    										<li>청약자의 인감도장(재외동포 또는 외국인이 인증된<br/>
                                 서명으로 공급신청 위임시는 제출 생략)</li>
				    										<li>청약자의 <b>인감도장이 날인된 위임장</b> 1통(신청 접수장소 비치)</li>
				    										<li>대리 신청자의 주민등록증(내국인은 여권 또는<br/>
                                 운전면허증도 가능하며, 재외동포는 외국국적동포<br/>
                                 국내거소신고증 또는 재외국민용 주민등록증,<br/>
                                 외국인은 외국인 등록증 또는 영주증을 말함)
				    										<br/>
				    										※ 청약자 본인의 주민등록증 제출 생략 가능. 
				    										</li>
				    									</ul>
				    								</td>
				    								<td style={{verticalAlign: 'top'}}>
				    									<ul className="bul_list line_list black_list">
				    										<li>청약자가 <b>자필 서명한 위임장</b><br/>
                                (‘본인서명사실확인서’ 상의 서명) 1통</li>
				    										<li>청약자의 본인서명사실확인서 1통</li>
				    										<li>대리 신청자의 주민등록증(내국인은 여권<br/>
                                 또는 운전면허증도 가능하며, 재외동포는<br/>
                                 외국국적동포 국내거소신고증 또는<br/>
                                 재외국민용 주민등록증, 외국인은 외국인<br/>
                                 등록증 또는 영주증을 말함)
				    										<br/>
				    										※ 청약자 본인의 주민등록증 제출 생략 가능. 
				    										</li>
				    									</ul>
				    								</td>
				    							</tr>
				    						</tbody>
				    					</table>
				    				</ul>
				    			</td>
				    		</tr>
				    	</tbody>
				    </table>
          </IntroductionContent>
        </IntroductionBody>
      </IntroductionContainer>
    );  
} 

export default Introduction;
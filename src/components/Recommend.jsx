import styled from 'styled-components'
import React,{useState, useEffect} from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import moment from 'moment'
import Pagination from './Pagination'

const RecommendContainer=styled.div`
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

  .font_bold {
    font-weight: bold;
  }
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

const RecommendBody = styled.div`
  color: #333333;

  .menu_name {
    margin-left: 80px;
    margin-top: 80px;
    font-size: 27px;
    font-weight: 550;
  }

  .menu_name_sub {
    margin-left: 100px;
    margin-top: 30px;
    font-size: 22px;
    font-weight: 550;
  }
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

const RecommendContent = styled.div`
  margin: auto;
  .user_value {
    text-align: center;
    font-size: 50px;
    font-weight: 550;
  }

  span {
    color: #333;
    font-size: 30px;
  }

  table {
    margin: auto;
    width: 90%;
    font-size: 0.8rem;
    padding: 3px;
    border-collapse: collapse;
    text-indent: initial;
    font-family: noto-sans-scott-dl;
    border-top: 2px solid #0e4eb2;

    th {
      background-color: #f5f5f5;
      border-right: 1px solid #c9c9c9;
      border-left: 1px solid #c9c9c9;
      border-top: 1px solid #c9c9c9;
      border-bottom: 1px solid #c9c9c9;
      height: 48px;
      box-sizing: border-box;
      word-break: keep-all;
      word-wrap: break-word;
      white-space: normal;
      padding: 5px;
      color: #333;
      font-weight: 550;
      font-family: noto-sans-scott-r;
    }

    td {
      background-color: #fff;
      text-align: center;
      border-right: 1px solid #c9c9c9;
      border-left: 1px solid #c9c9c9;
      border-bottom: 1px solid #c9c9c9;
      height: 48px;
      padding: 5px;
      color: #666;
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

const LoginUl = styled.ul`
  height: 500px;
  padding: 15px;
  list-style: none;
  text-align: center;
  line-height: 500px;

  .need_login {
    margin: auto;
    height: 50px;
    width: 90%;
    font-size: 22px;
  }
  
  .loginOut__link {
    border: 1px solid #333;
    padding: 3px;
    background-color: #e5e5e5;
    margin-inline: 5px;
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;

    color: #333333;
    text-decoration: none;
  }
`;

function Nav(){
  return <NavUl>
    <li><Link to="/recommend/calculator" className="navigation__link">가점계산기</Link></li>
    <li><Link to="/recommend/strategy" className="navigation__link_now">추천청약</Link></li>
  </NavUl>
}

function Recommend() {
  const [recommendList, setRecommendList] = useState([]);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {  
    Axios.get(
      'http://13.124.229.36:8080/api/applications/recommend', {
      headers: {
        Authorization : localStorage.getItem('accessToken')
      }
    }).then((response) => {
      if(response.data.success) {
        console.log(response.data.response);
        setRecommendList(response.data.response);
      }
    })
  }, []);

    return (
      <RecommendContainer>
        <MainHeader></MainHeader>
        <RecommendNameBox>청약 추천</RecommendNameBox>
        <RecommendBody>
          <RecommendMenu>
            <Nav></Nav>
            <Bar></Bar>
          </RecommendMenu>
          {localStorage.getItem('username')!==null ?
          <RecommendContent>
            <div className='menu_name'>■ 나의 가점</div>
            <div className='mt_30'></div>
            <div className='user_value color_blue'>{localStorage.getItem('username')}<span> 님의 가점 총점은 </span>{localStorage.getItem('totalValue')}<span> 점 입니다.</span></div>
            <div className='menu_name'>■ 추천 청약</div>
            <div className='mt_30'></div>
            <table>
              <thead>
                <tr id="listThead">
                  <th scope='col'>지역</th>
                  <th scope='col'>주택<br/>구분</th>
                  <th scope='col'>분양/임대</th>
                  <th scope='col'>주택명</th>
                  <th scope='col'>시공사</th>
                  <th scope='col'>문의처</th>
                  <th scope='col'>모집공고일</th>
                  <th scope='col'>청약기간</th>
                  <th scope='col'>당첨자발표</th>
                  <th scope='col'>예상커트라인</th>
                </tr>
              </thead>
              <tbody>
                {recommendList.slice(offset, offset + limit).map(({ id, region, housingType, rentOrSale, houseInfo, constructorCompany, schedule, score}) => (
                  <tr key={id}> 
                    <td>{region}</td>
                    <td>{housingType}</td>
                    <td>{rentOrSale}</td>
                    <td>{houseInfo.name}</td>
                    <td>{constructorCompany}</td>
                    <td>{schedule.contact}</td>
                    <td>{moment(schedule.announcementDate).format('YYYY-MM-DD')}</td>
                    <td>{moment(schedule.startDate).format('YYYY-MM-DD')+'~'+moment(schedule.endDate).format('YYYY-MM-DD')}</td>
                    <td>{moment(schedule.winnerAnnouncementDate).format('YYYY-MM-DD')}</td>
                    <td>{score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              total={recommendList.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </RecommendContent>
            :  
            <LoginUl>
              <div className='need_login'>청약을 추천받기 위해서는 로그인이 필요합니다.</div>
              <Link to="/login" className='loginOut__link'>로그인 하러가기</Link>
            </LoginUl>
          }
        </RecommendBody>
      </RecommendContainer>
    );
}
    
export default Recommend;
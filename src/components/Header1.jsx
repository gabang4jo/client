import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.div`
  height:85px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color:white;
`;

const LogoLink = styled.div`
  .logo__link {
    font-family: 'KoHo';
  font-weight: 700;
  font-size: 35px;
  text-align: center;
  color: #000000;
  text-decoration: none;
  }
`

const NavUl = styled.ul`
  display: flex;
  list-style: none;

  .navigation__link {
    margin-inline: 40px;

    font-family: 'Inter';
    font-style: normal;
    font-size: 21px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;

    color:#000000;
    text-decoration: none;
  }

`;

const LoginUl = styled.ul`
  display: flex;
  padding: 15px;
  list-style: none;

  .loginOut__link {
    margin-inline: 5px;
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;

    color: #000000;
    text-decoration: none;
  }
`;

function LogoFunc(){
  return (
    <LogoLink>
      <Link to="/" className='logo__link'>청약 알리미</Link>
    </LogoLink>
  )
}

function Nav(){
  return <NavUl>
    <li><Link to="/introduction" className="navigation__link">청약 소개</Link></li>
    <li><Link to="/search" className="navigation__link">청약 검색</Link></li>
    <li><Link to="/calendar" className="navigation__link">청약 캘린더</Link></li>
    <li><Link to="/map" className="navigation__link">주택 실거래가</Link></li>
    <li><Link to="/recommend" className="navigation__link">청약 추천</Link></li>
  </NavUl>
}

function LoginOut(loginId){
  if(loginId.loginId !== undefined && loginId.loginId !== '') {
    return <div>
      <LoginUl>
        <li><a href="/" className='loginOut__link'>LOG OUT</a></li>
        <li>/</li>
        <li><Link to={"/mypage/"+loginId.loginId} className='loginOut__link'>MY PAGE</Link></li>
      </LoginUl>
    </div>
  }

  return <div>
    <LoginUl>
      <li><Link to="/login" className='loginOut__link'>LOGIN</Link></li>
      <li>/</li>
      <li><Link to="/signup" className='loginOut__link'>SIGN UP</Link></li>
    </LoginUl>
  </div>
}

function Header1({ loginId, loginState, loginName }) {
  return (
    <>
    <Header>
    <LogoFunc></LogoFunc>
    <Nav></Nav>
    <LoginOut loginId={loginId} ></LoginOut>
    </Header>
    </>
  );
}

export default Header1;
import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'

const MypageContainer=styled.div`
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

  .mt_60 {
    margin-top: 60px;
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

  .font_normal {
    font-weight: normal;
  }
`;

const MypageNameBox=styled.div`
  color: white;
  background-color: #3964E5;
  height: 200px;
  text-align: left;
  padding-left: 140px;
  line-height: 270px;
  font-weight: 600;
  font-size: 50px;
`;

const MypageBody = styled.div`
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

const MypageContentBox = styled.div`
  margin: auto;
  height: 600px;
  width: 700px;
  background-color: #f3f3f3;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  padding: 30px 0 30px 0;
  

  .mypage-wrap{
    margin: auto;
    height: 600px;
    width: 90%;
    line-height: 200px;
    background-color: #fff;
    border-radius: 10px;
    border: none;
    font-size: 30px;
    color: #333;

    .username {
        margin: auto;
        height: 150px;
        width: 90%;
        font-size: 40px;
        text-align: center;
        line-height: 150px;
    }

    span {
        font-size: 30px;
    }

    .change_password_wrap {
        height: 200px;
        margin: auto;
        width: 90%;
        line-height: 40px;
        text-align: center;

        .change_password {
            height: 50px;
            font-size: 24px;
        }
        
        .row {
            height: 50px;
        }

        input[type='password'] {
            width: 400px;
            line-height: 16;
            height: 30px;
            font-size: 20px;
        }
    }

    .select_region-wrap {
        height: 70px;
        width: 90%;
        margin: auto;
        line-height: 50px;
        text-align: center;

        .select_region {
            font-size: 24px;
        }

        select {
            height: 30px;
            width: 100px;
            padding-left: 3px;
        }
    }

    .save_button_wrap {
        margin: auto;
        width: 90%;
        height: 100px;
        text-align: center;

        .btnMd {
            height: 32px;
            line-height: 30px;
            font-size: 14px;
            color: #fff;
            border: none;
            text-align: center;
        }

        .btSave {
            width: 60px;
            background-color: #d1d1d1;
            color: #333;
            transition: all 0.1s ease-in-out;
        }

        .btSave:hover {
          font-weight: 550;
          opacity: 1;
        }
    }
  }
`;

function Mypage() {
    const [nowPassword, setNowPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [region, setRegion] = useState("서울");
    const handlePasswordNow = (e) => {
        setNowPassword(e.target.value);
    }

    const handlePasswordNew = (e) => {
        setNewPassword(e.target.value);
    }

    const handlePasswordConfirm = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleRegion = (e) => {
        setRegion(e.target.value);
    }

    const handleSave = () => {
        if(nowPassword==='' && newPassword==='' && confirmPassword===''){
            console.log(region);
            alert("수정 완료");
            return;
        }
        else{
            if(newPassword!==confirmPassword){
                alert("새 비밀번호가 새 비밀번호 확인이 다릅니다.");
                return;
            }
            if(nowPassword==='' || newPassword==='' || confirmPassword==='')
                alert("남은 빈칸을 모두 채워주세요.");
            console.log(newPassword);
            console.log(region);
            alert("수정 완료");
            return;
        }
    }

    return (
      <MypageContainer>
        <MainHeader></MainHeader>
        <MypageNameBox>마이 페이지</MypageNameBox>
        <MypageBody>
            <div className='mt_60'></div>
            <MypageContentBox>
              <div className='mypage-wrap'>
                <div className='username font_bold'>{localStorage.getItem('username')} <span className='color_blue font_normal'>님의 마이페이지</span> </div>
                <div className='change_password_wrap'>
                    <div className='change_password'>비밀번호 변경</div>
                    <div className='row'><input type="password" placeholder="현재 비밀번호"  defaultValue="" maxLength="20" onChange={handlePasswordNow}/></div>
                    <div className='row'><input type="password" placeholder="새 비밀번호" defaultValue="" maxLength="20" onChange={handlePasswordNew}/></div>
                    <div className='row'><input type="password" placeholder="새 비밀번호 확인" defaultValue="" maxLength="20" onChange={handlePasswordConfirm}/></div>
                </div>
                <div className='mt_30'></div>
                <div className="select_region-wrap"> 
                  <div className='select_region'>관심지역 변경</div>
                  <select name="region" id="region" onChange={handleRegion} value={region}>
                    <option value="서울">서울</option>
					  	      <option value="경기">경기</option>
                    <option value="강원">강원</option>
					  	      <option value="경남">경남</option>
                    <option value="경북">경북</option>
					  	      <option value="전남">전남</option>
                    <option value="전북">전북</option>
					  	      <option value="충남">충남</option>
                    <option value="충북">충북</option>
                    <option value="대구">대구</option>
                    <option value="부산">부산</option>
                    <option value="울산">울산</option>
                    <option value="인천">인천</option>
                    <option value="제주">제주</option>
                  </select>
				        </div>
                <div className='save_button_wrap'>
                  <button type="button" onClick={()=>handleSave()} className="btnMd btSave">수정</button>
                </div>
              </div>
            </MypageContentBox>
            <div className='mt_30'></div>
        </MypageBody>
      </MypageContainer>
    );
  }
      
  export default Mypage;
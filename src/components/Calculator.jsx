import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import ic_cal from '../assets/ic_cal.png'

const CalculatorContainer=styled.div`
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

const CalculatorNameBox=styled.div`
  color: white;
  background-color: #3964E5;
  height: 200px;
  text-align: left;
  padding-left: 140px;
  line-height: 270px;
  font-weight: 600;
  font-size: 50px;
`;

const CalculatorMenu=styled.div`
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

const CalculatorBody = styled.div`
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

const CalculatorContent = styled.div`
  .topBox {
    overflow: hidden;
    min-height: 96px;
    width: 80%;
    margin: auto;
    padding: 28px 30px 26px 210px;
    border: 1px solid #d8d8d8;
    background-color: #fcfcfc;
    background-repeat: no-repeat;
    background-position: 76px 26px;
    background-image: url(${ic_cal})
  }

  .countingArea1, .countingArea2 {
    margin: auto;
    width: 90%;
    padding: 25px 0 10px 30px;
    border: 1px solid #ccc;
    line-height: 1;
  }

  ul {
    list-style: none;
    display: block;
  }

  input {
    vertical-align: middle;
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
  }

  input[type='radio' i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    border: initial;
  }

  input[type='checkbox']:checked+label,input[type='radio']:checked+label {
    color: #c8212f;
  }
  
  .countingArea1 input[type='radio'], .countingArea2 input[type='radio'] {
    margin: -3px 6px 0 0;
    padding: 0;
  }

  .countingArea1 li, .countingArea2 li {
    float: left;
    padding-bottom: 15px;
    white-space: nowrap;
  }

  input[type="checkbox"], input[type="radio"] {
    margin: 0 6px 0 0;
    padding: 0;
  }

  .countingArea1 ul:after, .countingArea2 ul:after {
    clear: both;
    content: "";
    display: block;
  }

  .countingArea1 li {
    width: 33%;
  }

  .countingArea2 li {
    width: 14%;
  }

  .tableStyle03 {
    display: block;
    width: 92%;
    margin: auto;
    border-top: 2px solid #3964E5;
    border-bottom: 1px solid #c9c9c9;
  }

  .tableStyle03 table tr:first-child th {
    border-top: none;
  }

  .tableStyle03 table tr:first-child td {
    border-top: none;
  }

  .tableStyle03 table tr th {
    height: 18px;
    line-height: 160%;
    padding: 11px 0 13px;
    border: 1px solid #c9c9c9;
    border-width: 1px 0 0 1px;
    background-color: #ebeef5;
    color: #333;
    font-weight: bold;
    vertical-align: middle;
    width: 55%;
  }

  th {
    display: table-cell;
    text-align: -internal-center;
  }

  .tableStyle03 table tr td {
    padding 11px 16px 12px;
    height: 18px;
    line-height: 160%;
    border: 1px solid #c9c9c9;
    border-width: 1px 0 0 1px;
    color: #333;
    text-align: left;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .countingArea3 select {
    min-width: 60px;
  }

  table tr select, table tr input {
    margin-bottom: 1px;
    margin-left: 40px;
    vertical-align: middle;
  }

  select {
    min width: 102px;
    padding: 2px 2px 2px 0;
    border: 1px solid #c9c9c9;
    border-radius: 0;
    background: #fff;
    font-size: 12px;
    color: #666;
    font-family: "맑은 고딕";
    vertical-align: middle;
  }

  .btNext {
    margin-left: 46%;
    width: 120px;
    background: #3964E5;
    vertical-align: top;
  }

  .btnMd {
    height: 32px;
    line-height: 30px;
    font-size: 14px;
    color: #fff;
    text-align: center;
  }

  button {
    border: none;
    cursor: pointer;
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

const Modal = styled.div`
  position: relative;

  .btSave {
    position: absolute;
    top: 175px;
    right: 20%;
    width: 60px;
    background-color: #ffe11a;
    color: #333;
    vertical-align: top;
    transition: all 0.1s ease-in-out;
  }

  .btSave:hover {
    font-weight: 550;
    opacity: 1;
  }

  .val_table {
    height: 100px;
    width: 60%;
    margin: auto;
    border-top: 2px solid #3964E5;
    border-bottom: 2px solid #c9c9c9;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
  }

  thead {
    background-color: #f6f6f5;
  }

  td {
    border: 1px solid #c9c9c9;
    width: 50%;
    padding: 7px;
  }

  .totalVal {
    background-color: #f6f6f5;
    font-weight: 550;
  }
`;

function Nav(){
  return <NavUl>
    <li><Link to="/recommend/calculator" className="navigation__link_now">가점계산기</Link></li>
    <li><Link to="/recommend/strategy" className="navigation__link">추천전략</Link></li>
  </NavUl>
}

function Calculator({...loginUserProps}) {
    const [homePeriodVal, setHomePeriodVal] = useState(0);
    const [familyNumVal, setFamilyNumVal] = useState(0);
    const [accountPeriodVal, setAccountPeriodVal] = useState(0);
    const [modal, setModal] = useState(false);

    const [birthForm, setBirthForm] = useState({
      year: "2023",
      month: "01",
      day: "01",
    });

    const [accountForm, setAccountForm] = useState({
      year: "2023",
      month: "01",
      day: "01",
    });

    const now = new Date();

    let years = [];
    for (let y = now.getFullYear(); y >= 1930; y -= 1) {
      years.push(y);
    }
  
    let month = [];
    for (let m = 1; m <= 12; m += 1) {
      if (m < 10) {
        // 날짜가 2자리로 나타나야 했기 때문에 1자리 월에 0을 붙혀준다
        month.push("0" + m.toString());
      } else {
        month.push(m.toString());
      }
    }
   let days = [];
    let date = new Date(birthForm.year, birthForm.month, 0).getDate();
    for (let d = 1; d <= date; d += 1) {
      if (d < 10) {
       // 날짜가 2자리로 나타나야 했기 때문에 1자리 일에 0을 붙혀준다
        days.push("0" + d.toString());
      } else {
        days.push(d.toString());
      }
    }

    function dateFormat(date) {
      let dateFormat2 = date.getFullYear() +
        '-' + ( (date.getMonth()+1) < 9 ? "0" + (date.getMonth()+1) : (date.getMonth()+1) )+
        '-' + ( (date.getDate()) < 9 ? "0" + (date.getDate()) : (date.getDate()) );
      return dateFormat2;
    }

    const getDateDiff = (d1, d2) => {
      const date1 = new Date(d1);
      const date2 = new Date(d2);
      
      const diffDate = date2.getTime() - date1.getTime();
      
      return diffDate / (1000 * 60 * 60 * 24); // 밀리세컨 * 초 * 분 * 시 = 일
    }
    
    const handleChange = (e) => {
      if(e.target.name === 'homePeriod'){
        setHomePeriodVal(Number(e.target.value));
      }
      else if(e.target.name === 'familyNum'){
        setFamilyNumVal(Number(e.target.value));
      }
    }

    const handleOnClick = () => {
      let birthDate = birthForm.year+'-'+birthForm.month+'-'+birthForm.day;
      let accountDate = accountForm.year+'-'+accountForm.month+'-'+accountForm.day;
      let nowDate = dateFormat(now);
      let SevenTeenDate = (Number(birthForm.year)+17).toString()+'-'+birthForm.month+'-'+birthForm.day;
      let howLong = 0;
      let CreateUnderSevenTeen = false;

      if(getDateDiff(birthDate, accountDate)<0){
        alert("가입일은 생일보다 미래여야 합니다.")
        return;
      }

      if(getDateDiff(nowDate, accountDate)>0){
        alert("가입일은 오늘이거나 그 이전이어야 합니다.")
        return;
      }
      
      if(Number(accountForm.year) - Number(birthForm.year) <= 17){
        if(Number(birthForm.month)-Number(accountForm.month)>0)
          CreateUnderSevenTeen = true;
        else if(Number(birthForm.month)-Number(accountForm.month)===0)
          if(Number(birthForm.day)>Number(accountForm.day))
            CreateUnderSevenTeen = true;
      }
      else{
        CreateUnderSevenTeen = false;
      }

      if(!CreateUnderSevenTeen){
        howLong = getDateDiff(accountDate, nowDate);
      }
      else {
        howLong = getDateDiff(accountDate, nowDate) - getDateDiff(accountDate, SevenTeenDate);
      }
      
      if(howLong >= 365*15) setAccountPeriodVal(17);
      else if(howLong >= 365*14 && howLong < 365*15) setAccountPeriodVal(16);
      else if(howLong >= 365*13 && howLong < 365*14) setAccountPeriodVal(15);
      else if(howLong >= 365*12 && howLong < 365*13) setAccountPeriodVal(14);
      else if(howLong >= 365*11 && howLong < 365*12) setAccountPeriodVal(13);
      else if(howLong >= 365*10 && howLong < 365*11) setAccountPeriodVal(12);
      else if(howLong >= 365*9 && howLong < 365*10) setAccountPeriodVal(11);
      else if(howLong >= 365*8 && howLong < 365*9) setAccountPeriodVal(10);
      else if(howLong >= 365*7 && howLong < 365*8) setAccountPeriodVal(9);
      else if(howLong >= 365*6 && howLong < 365*7) setAccountPeriodVal(8);
      else if(howLong >= 365*5 && howLong < 365*6) setAccountPeriodVal(7);
      else if(howLong >= 365*4 && howLong < 365*5) setAccountPeriodVal(6);
      else if(howLong >= 365*3 && howLong < 365*4) setAccountPeriodVal(5);
      else if(howLong >= 365*2 && howLong < 365*3) setAccountPeriodVal(4);
      else if(howLong >= 365*1 && howLong < 365*2) setAccountPeriodVal(3);
      else if(howLong >= 180 && howLong < 365*1) setAccountPeriodVal(2);
      else setAccountPeriodVal(1);
      setModal(true);
    };

    const handleSave = () => {
      console.log(homePeriodVal);
      console.log(familyNumVal);
      console.log(accountPeriodVal);
      console.log(homePeriodVal+familyNumVal+accountPeriodVal);
    };

    return (
      <CalculatorContainer>
        <MainHeader {...loginUserProps} ></MainHeader>
        <CalculatorNameBox>청약 추천</CalculatorNameBox>
        <CalculatorMenu>
          <Nav></Nav>
          <Bar></Bar>
        </CalculatorMenu>
        <CalculatorBody>
          <div className='menu_name'>■ 가점계산기</div>
          <CalculatorContent>
            <div className='mt_30'></div>
            <div className="topBox">
	            <p className="tit">청약가점제에 의해 청약신청 할 때에는 <span className="color_blue">청약자 본인이 직접 소유주택수, 무주택기간 및 부양가족수</span>를 산정해야 하므로 신청 전에 청약신청시 유의사항 
              및 가점제도 내용을 충분히 이해해야만 착오에 따른 불이익을 피할 수 있습니다.</p> 
	            <p>가점계산기는 예상으로 점수를 확인하는 서비스이며, 착오 신청에 따른 책임은 청약자 본인에게 있으며 본 서비스는 이에 책임을 지지 않습니다.</p>
            </div>
            <div className='menu_name_sub'>■ 무주택기간</div>
            <div className='mt_30'></div>
            <div className="countingArea1">
		  	      <ul>
		  		      <li>
		  			      <input type="radio" id="0y" name="homePeriod" value="0" onChange={handleChange}/>
		  			      <label htmlFor="0y">30세 미만 미혼 무주택자 ( 0점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="1y" name="homePeriod" value="2" onChange={handleChange}/>
		  		      	<label htmlFor="1y">1년 미만 (2점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="2y" name="homePeriod" value="4" onChange={handleChange}/>
		  		      	<label htmlFor="2y">1년 이상 ~ 2년 미만 (4점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="3y" name="homePeriod" value="6" onChange={handleChange}/>
		  		      	<label htmlFor="3y">2년 이상 ~ 3년 미만 (6점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="4y" name="homePeriod" value="8" onChange={handleChange}/>
		  		      	<label htmlFor="4y">3년 이상 ~ 4년 미만 (8점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="5y" name="homePeriod" value="10" onChange={handleChange}/>
		  		      	<label htmlFor="5y">4년 이상 ~ 5년 미만 (10점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="6y" name="homePeriod" value="12" onChange={handleChange}/>
		  		      	<label htmlFor="6y">5년 이상 ~ 6년 미만 (12점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="7y" name="homePeriod" value="14" onChange={handleChange}/>
		  		      	<label htmlFor="7y">6년 이상 ~ 7년 미만 (14점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="8y" name="homePeriod" value="16" onChange={handleChange}/>
		  		      	<label htmlFor="8y">7년 이상 ~ 8년 미만 (16점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="9y" name="homePeriod" value="18" onChange={handleChange}/>
		  		      	<label htmlFor="9y">8년 이상 ~ 9년 미만 (18점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="10y" name="homePeriod" value="20" onChange={handleChange}/>
		  		      	<label htmlFor="10y">9년 이상 ~ 10년 미만 (20점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="11y" name="homePeriod" value="22" onChange={handleChange}/>
		  		      	<label htmlFor="11y">10년 이상 ~ 11년 미만 (22점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="12y" name="homePeriod" value="24" onChange={handleChange}/>
		  		      	<label htmlFor="12y">11년 이상 ~ 12년 미만 (24점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="13y" name="homePeriod" value="26" onChange={handleChange}/>
		  		      	<label htmlFor="13y">12년 이상 ~ 13년 미만 (26점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="14y" name="homePeriod" value="28" onChange={handleChange}/>
		  		      	<label htmlFor="14y">13년 이상 ~ 14년 미만 (28점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="15y" name="homePeriod" value="30" onChange={handleChange}/>
		  		      	<label htmlFor="15y">14년 이상 ~ 15년 미만 (30점)</label>
		  		      </li>
		  		      <li>
		  		      	<input type="radio" id="16y" name="homePeriod" value="32" onChange={handleChange}/>
		  		      	<label htmlFor="16y">15년 이상 ( 32점)</label>
		  		      </li>
		  	      </ul>
		        </div>
            <div className='menu_name_sub'>■ 부양가족수</div>
            <div className='mt_30'></div>
            <div className="countingArea2">
			        <ul>
			        	<li>
			        		<input type="radio" id="0f" name="familyNum" value="5" onChange={handleChange}/>
			        		<label htmlFor="0f">0명 (5점)</label>
			        	</li>
			        	<li>
			        		<input type="radio" id="1f" name="familyNum" value="10" onChange={handleChange}/>
			        		<label htmlFor="1f">1명 (10점)</label>
			        	</li>
			        	<li>
			        		<input type="radio" id="2f" name="familyNum" value="15" onChange={handleChange}/>
			        		<label htmlFor="2f">2명 (15점)</label>
			        	</li>
			        	<li>
			        		<input type="radio" id="3f" name="familyNum" value="20" onChange={handleChange}/>
			        		<label htmlFor="3f">3명 (20점)</label>
			        	</li>
			        	<li>
			        		<input type="radio" id="4f" name="familyNum" value="25" onChange={handleChange}/>
			        		<label htmlFor="4f">4명 (25점)</label>
			        	</li>
			        	<li>
			        		<input type="radio" id="5f" name="familyNum" value="30" onChange={handleChange}/>
			        		<label htmlFor="5f">5명 (30점)</label>
			        	</li>
			        	<li className="last">
			        		<input type="radio" id="6f" name="familyNum" value="35" onChange={handleChange}/>
			        		<label htmlFor="6f">6명 이상 (35점)</label>
			        	</li>
			        </ul>
		        </div>
            <div className='menu_name_sub'>■ 청약통장 가입기간</div>
            <div className='mt_30'></div>
            <div className="tableStyle03 countingArea3">
			        <table>
				        <colgroup>
					        <col style={{width:"35%"}}/>
				          <col style={{width:"65%"}}/>
				        </colgroup>
				        <tbody>
					        <tr>
						        <th scope="row"><label htmlFor="birthYear">가입자 생일</label></th>
						        <td>
							        <span>
							        	<select id="birthYear" name="birthYear" title="가입자 생일 년도 선택" value={birthForm.year} onChange={(e)=>setBirthForm({year: e.target.value, month: "01", day: "01"})}>
                          {years.map(item => (
                            <option value = {item} key= {item}>
                              {item}
                            </option>
                          ))}
                        </select>
							        	년
							        </span>
							        <span>
							        	<select id="birthMonth" name="birthMonth" title="가입자 생일 월 선택" value={birthForm.month} onChange={(e)=>setBirthForm({...birthForm, month: e.target.value})}>
                          {month.map(item => (
                            <option value = {item} key= {item}>
                              {item}
                            </option>
                          ))}
                        </select>
							        	월
							        </span>
							        <span>
							        	<select id="birthDay" name="birthDay" title="가입자 생일 일 선택" value={birthForm.day} onChange={(e)=>setBirthForm({...birthForm, day: e.target.value})}>
                          {days.map(item => (
                            <option value = {item} key= {item}>
                              {item}
                            </option>
                          ))}
                        </select>
							        	일
							        </span>
					        	</td>
					        </tr>
					        <tr>
					        	<th scope="row"><label htmlFor="accountYear">청약통장 가입일</label></th>
					        	<td>
					        		<span>
					        			<select id="accountYear" name="accountYear" title="청약통장 가입일 년도 선택" value={accountForm.year} onChange={(e)=>setAccountForm({year: e.target.value, month: "01", day: "01"})}>
                          {years.map(item => (
                            <option value = {item} key= {item}>
                              {item}
                            </option>
                          ))}
                        </select>
					        			년
					        		</span>
					        		<span>
					        			<select id="accountMonth" name="accountMonth" title="청약통장 가입일 월 선택" value={accountForm.month} onChange={(e)=>setAccountForm({...accountForm, month: e.target.value})}>
                          {month.map(item => (
                            <option value = {item} key= {item}>
                              {item}
                            </option>
                          ))}
                        </select>
					        			월
					        		</span>
					        		<span>
					        			<select id="accountDay" name="accountDay" title="청약통장 가입일 일 선택" value={accountForm.day} onChange={(e)=>setAccountForm({...accountForm, day: e.target.value})}>
                          {days.map(item => (
                            <option value = {item} key= {item}>
                              {item}
                            </option>
                          ))}
                        </select>
					        			일
					        		</span>
					        	</td>
					        </tr>
			        	</tbody>
			        </table>
		        </div>
            <div className='mt_30'></div>
            {modal === true ?
              <>
                <Modal>
                  <button type="button" onClick={()=>handleSave()} className="btnMd btSave"><span>저장</span></button>
                  <table className='val_table'>
                    <thead>
                      <tr>
                        <td>가점 항목</td>
                        <td>취득점수</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>무주택기간</td>
                        <td>{homePeriodVal}</td>
                      </tr> 
                      <tr>
                        <td>부양가족수</td>
                        <td>{familyNumVal}</td>
                      </tr> 
                      <tr>
                        <td>청약통장 가입기간</td>
                        <td>{accountPeriodVal}</td>
                      </tr> 
                      <tr className='totalVal'>
                        <td>가점총점</td>
                        <td>{homePeriodVal+familyNumVal+accountPeriodVal}</td>
                      </tr> 
                    </tbody>
                  </table>
                </Modal>
              </>
              :
              null
            }
            <div className='mt_30'></div>
            <button type="button" onClick={()=>handleOnClick()} className="btnMd btNext"><span>계산하기</span></button>
          </CalculatorContent>
          <div className='mt_30'></div>
        </CalculatorBody>
      </CalculatorContainer>
    );
}
    
export default Calculator;
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import MainHeader from './MainHeader'
import Pagination from './Pagination'
import Axios from 'axios'
import moment from 'moment'
import ic_search from '../assets/ic_search.png'
import sel_arw from '../assets/sel_arw.png'

const SearchContainer=styled.div`
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

const SearchNameBox=styled.div`
  color: white;
  background-color: #3964E5;
  height: 200px;
  text-align: left;
  padding-left: 140px;
  line-height: 270px;
  font-weight: 600;
  font-size: 50px;
`;

const SearchBody = styled.div`
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

const SearchContent = styled.div`

  .search_wrap {
    width: 90%;
    margin: auto;
    background-color: #f5f5f5;
    border: 1px solid #c9c9c9;
    text-align: center;
    padding: 20px 0;
  }

  .search_wrap .search_box {
    display: inline-block;
    width: 95%;
    text-align: left;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 1rem;
    word-break: keep-all;
    word-wrap: break-word;
  }

  .select_st select {
    width: 100%;
    height: 100%;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    border: none;
    padding-left: 0.3rem;
    box-sizing: border-box;
    padding-right: 45px;
  }

  .select_st {
    margin-left: 10px;
  }

  select {
    border-radius: 0;
    appearance: none;
    writing-mode: horizontal -tb
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    white-space-collapse: preserve;
    text-wrap: nowrap;
    cursor: default;
  }

  select:not(:-internal-list-box) {
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  select::not(:-internal-list-box) {
    overflow: visible
  }

  .search_row {
    display: block;
    padding: 5px;
  }

  .search_row:first-child {
    overflow: hidden;
  }

  .search_wrap .search_box.search_01 .search_row:first-child .select_st {
    width: 45%;
    margin-right: 0;
  }

  .search_wrap .search_box.search_01 .search_row:first-child span {
    float: left;
    width: 4%;
    text-align: center;
  }

  .search_wrap .search_row > span {
    line-height: 37px;
  }

  .select_st {
    display: inline-block;
    min-width: 194px;
    height: 38px;
    overflow: hidden;
    background-image: url(${sel_arw});
    background-color: #fff;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 100% center;
    border: 1px solid #c9c9c9;
    box-sizing: border-box;
  }

  input[type=text] {
    width: 25%;
    height: 36px;
    border: 1px solid #c9c9c9;
    text-indent 7px;
    vertical-align: top;
    margin-left: 10px;
  }
  
  .search_wrap .search_box.search_01 .select_st {
    width: 29%;
    vertical-align: top;
    float: left;
  }

  .search_wrap .search_box.search_01 .search_btn {
    width: 10%;
    padding: 0 10px;
  }

  .search_wrap .search_btn {
    background-color: #474851;
    color: #fff;
    max-width: 124px;
    height: 36px;
    margin-left: 10px;
    border: 1px solid #474851;
    box-sizing: border-box;
  }
  .search_wrap .chk_search dl dd, .search_wrap .chk_search dl dt {
    display: table-cell;
    vertical-align: middle;
  }

  .check_st2 {
    position: relative;
    display: inline-block;
    float: left;
    margin-left: 20px;
  }

  .check_st2 input[type=checkbox] {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    position: absolute;
    z-index: 0;
    top: 0.5rem;
    left: 0;
    margin-top: -5px;
  }

  .kind {
    margin-left: 10px;
  }

  .check_st2 label {
    display: block;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    padding-left: 25px;
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

  .blind {
    display: none;
  }
`;

function Search({...loginUserProps}) {
    const [searchList, setSearchList] = useState([]);
    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    const [SelectedStart, setSelectedStart] = useState("202304");
    const [SelectedEnd, setSelectedEnd] = useState("202307");
    const [SelectedHouseDetail, setSelectedHouseDetail] = useState("");
    const [SelectedSupplyArea, setSelectedSupplyArea] = useState("");
    const [HousingName, setHousingName] = useState("");
    const [checkedButtons, setCheckedButtons] = useState(['']);

    useEffect(() => {
      Axios.get(
      'http://13.124.229.36:8080/api/applications/apartment', 
      {
        housingType : "",
        region : "",
        rentOrSale : "", 
        startYear : "2023",
        startMonth : "4",
        endYear : "2023",
        endMonth : "6"
      }).then((response) => {
          if(response.data.success) {
            setSearchList(response.data.response);
          }
      })
    }, []);

    const handleSelectStart = (e) => {
      setSelectedStart(e.target.value);
    };

    const handleSelectEnd = (e) => {
      setSelectedEnd(e.target.value);
    };

    const handleSelectHouseDetail = (e) => {
      setSelectedHouseDetail(e.target.value);
    };

    const handleSelectSupplyArea = (e) => {
      setSelectedSupplyArea(e.target.value);
    };

    const handleHousingName= (e) => {
      setHousingName(e.target.value);
    };

    const changeHandler = (checked, value) => {
      if (value === ''){
        if(checked) {
          setCheckedButtons(['']);
        } else {
          setCheckedButtons(checkedButtons => checkedButtons.filter(button => button !== value));
        }
        return;
      }
      else {
        setCheckedButtons(checkedButtons => checkedButtons.filter(button => button !== ''));
        if (checked) {
            setCheckedButtons(checkedButtons => [value]);
        } else {
          setCheckedButtons(checkedButtons => checkedButtons.filter(button => button !== value));
        }
      }
    };



    const searchPost = (e) => {
      if(Number(SelectedEnd)<Number(SelectedStart)){
        alert("마침년월은 시작년월보다 미래여야 합니다.");
        return;
      }

      checkedButtons.sort();

      Axios.post(
        'http://13.124.229.36:8080/api/applications/apartment/search', 
        { 
          housingType : SelectedHouseDetail,
          region : SelectedSupplyArea,
          rentOrSale : checkedButtons[0],
          startYear : SelectedStart.substring(0,4),
          startMonth : SelectedStart.substring(5,6),
          endYear : SelectedEnd.substring(0,4),
          endMonth : SelectedEnd.substring(5,6)
        }).then((response) => {
            if(response.data.success) {
              setSearchList(response.data.response);
            }
      })

      console.log(searchList);
    }

    return (
      <SearchContainer>
        <MainHeader {...loginUserProps} ></MainHeader>
        <SearchNameBox>청약 검색</SearchNameBox>
        <SearchBody>
          <div className='menu_name'>■ 청약 검색</div>
          <SearchContent>
            <div className='mt_30'></div>
            <div className="search_wrap">
		          <div className="search_box search_01">
			          <form name="pbSearchForm" id="pbSearchForm">
				          <div className="search_row">
					          <div className="select_st">
                      <label htmlFor="start_year" className="blind">시작년도</label>
					  	        <select name="beginPd" id="start_year" onChange={handleSelectStart} value={SelectedStart}>
					  						<option value="202306">2023년 06월</option>
					  						<option value="202305">2023년 05월</option>
					  						<option value="202304">2023년 04월</option>
					  						<option value="202303">2023년 03월</option>
					  						<option value="202302">2023년 02월</option>
					  						<option value="202301">2023년 01월</option>
					  						<option value="202212">2022년 12월</option>
					  						<option value="202211">2022년 11월</option>
					  						<option value="202210">2022년 10월</option>
					  						<option value="202209">2022년 09월</option>
					  					  <option value="202208">2022년 08월</option>
					  						<option value="202207">2022년 07월</option>
					  						<option value="202206">2022년 06월</option>
					  						<option value="202205">2022년 05월</option>
					  						<option value="202204">2022년 04월</option>
					  						<option value="202203">2022년 03월</option>
					  						<option value="202202">2022년 02월</option>
					  						<option value="202201">2022년 01월</option>
					  						<option value="202112">2021년 12월</option>
					  						<option value="202111">2021년 11월</option>
					  						<option value="202110">2021년 10월</option>
					  						<option value="202109">2021년 09월</option>
					  						<option value="202108">2021년 08월</option>
					  						<option value="202107">2021년 07월</option>
					  						<option value="202106">2021년 06월</option>
					  						<option value="202105">2021년 05월</option>
					  						<option value="202104">2021년 04월</option>
					  						<option value="202103">2021년 03월</option>
					  						<option value="202102">2021년 02월</option>
					  						<option value="202101">2021년 01월</option>
					  						<option value="202012">2020년 12월</option>
					  						<option value="202011">2020년 11월</option>
					  						<option value="202010">2020년 10월</option>
					  						<option value="202009">2020년 09월</option>
					  						<option value="202008">2020년 08월</option>
					  						<option value="202007">2020년 07월</option>
					  						<option value="202006">2020년 06월</option>
					  						<option value="202005">2020년 05월</option>
					  						<option value="202004">2020년 04월</option>
					  						<option value="202003">2020년 03월</option>
					  						<option value="202002">2020년 02월</option>
					  						<option value="202001">2020년 01월</option>
					  						<option value="201912">2019년 12월</option>
					  						<option value="201911">2019년 11월</option>
					  						<option value="201910">2019년 10월</option>
					  						<option value="201909">2019년 09월</option>
					  						<option value="201908">2019년 08월</option>
					  						<option value="201907">2019년 07월</option>
					  						<option value="201906">2019년 06월</option>
					  						<option value="201905">2019년 05월</option>
					  						<option value="201904">2019년 04월</option>
					  						<option value="201903">2019년 03월</option>
					  						<option value="201902">2019년 02월</option>
					  						<option value="201901">2019년 01월</option>
					  						<option value="201812">2018년 12월</option>
					  						<option value="201811">2018년 11월</option>
					  						<option value="201810">2018년 10월</option>
					  						<option value="201809">2018년 09월</option>
					  						<option value="201808">2018년 08월</option>
					  	        </select>
					          </div>
					          <span>~</span>
					          <div className="select_st end_year">
                      <label htmlFor="end_year" className="blind">마침년도</label>
					  	        <select name="endPd" id="end_year" onChange={handleSelectEnd} value={SelectedEnd}>
					  						<option value="202307">2023년 07월</option>
					  						<option value="202306">2023년 06월</option>
					  						<option value="202305">2023년 05월</option>
					  						<option value="202304">2023년 04월</option>
					  						<option value="202303">2023년 03월</option>
					  						<option value="202302">2023년 02월</option>
					  						<option value="202301">2023년 01월</option>
					  						<option value="202212">2022년 12월</option>
					  						<option value="202211">2022년 11월</option>
					  						<option value="202210">2022년 10월</option>
					  						<option value="202209">2022년 09월</option>
					  						<option value="202208">2022년 08월</option>
					  						<option value="202207">2022년 07월</option>
					  						<option value="202206">2022년 06월</option>
					  						<option value="202205">2022년 05월</option>
					  						<option value="202204">2022년 04월</option>
					  						<option value="202203">2022년 03월</option>
					  						<option value="202202">2022년 02월</option>
					  						<option value="202201">2022년 01월</option>
					  						<option value="202112">2021년 12월</option>
					  						<option value="202111">2021년 11월</option>
					  						<option value="202110">2021년 10월</option>
					  						<option value="202109">2021년 09월</option>
					  						<option value="202108">2021년 08월</option>
					  						<option value="202107">2021년 07월</option>
					  						<option value="202106">2021년 06월</option>
					  						<option value="202105">2021년 05월</option>
					  						<option value="202104">2021년 04월</option>
					  						<option value="202103">2021년 03월</option>
					  						<option value="202102">2021년 02월</option>
					  						<option value="202101">2021년 01월</option>
					  						<option value="202012">2020년 12월</option>
					  						<option value="202011">2020년 11월</option>
					  						<option value="202010">2020년 10월</option>
					  						<option value="202009">2020년 09월</option>
					  						<option value="202008">2020년 08월</option>
					  						<option value="202007">2020년 07월</option>
					  						<option value="202006">2020년 06월</option>
					  						<option value="202005">2020년 05월</option>
					  						<option value="202004">2020년 04월</option>
					  						<option value="202003">2020년 03월</option>
					  						<option value="202002">2020년 02월</option>
					  						<option value="202001">2020년 01월</option>
					  						<option value="201912">2019년 12월</option>
					  						<option value="201911">2019년 11월</option>
					  						<option value="201910">2019년 10월</option>
					  						<option value="201909">2019년 09월</option>
					  						<option value="201908">2019년 08월</option>
					  						<option value="201907">2019년 07월</option>
					  						<option value="201906">2019년 06월</option>
					  						<option value="201905">2019년 05월</option>
					  						<option value="201904">2019년 04월</option>
					  						<option value="201903">2019년 03월</option>
					  						<option value="201902">2019년 02월</option>
					  						<option value="201901">2019년 01월</option>
					  						<option value="201812">2018년 12월</option>
					  						<option value="201811">2018년 11월</option>
					  						<option value="201810">2018년 10월</option>
					  						<option value="201809">2018년 09월</option>
					  						<option value="201808">2018년 08월</option>
					  	        </select>
					          </div>
				          </div>
				          <div className="search_row">
					          <div className="select_st">
                      <label htmlFor="cate01" className="blind">주택구분</label>
					  	        <select name="houseDetailSecd" id="cate01" onChange={handleSelectHouseDetail} value={SelectedHouseDetail}>
					  		        <option value="">주택구분 전체</option>
					  					  <option value="PRIVATE">민영</option>
					  					  <option value="NATIONAL">국민</option>
					  	        </select>
					          </div>
					          <div className="select_st">
                      <label htmlFor="cate02" className="blind">공급지역</label>
					  	        <select name="suplyAreaCode" id="cate02" onChange={handleSelectSupplyArea} value={SelectedSupplyArea}>
					  		        <option value="">공급지역 전체</option>
					  					  <option value="강원">강원</option>
					  					  <option value="경기">경기</option>
					  					  <option value="경남">경남</option>
					  					  <option value="경북">경북</option>
					  					  <option value="광주">광주</option>
					  					  <option value="대구">대구</option>
					  					  <option value="대전">대전</option>
					  					  <option value="부산">부산</option>
					  					  <option value="서울">서울</option>
					  					  <option value="세종">세종</option>
					  					  <option value="울산">울산</option>
					  					  <option value="인천">인천</option>
					  					  <option value="전남">전남</option>
					  					  <option value="전북">전북</option>
					  					  <option value="제주">제주</option>
					  					  <option value="충남">충남</option>
					  					  <option value="충북">충북</option>
					  	        </select>
					          </div>
					          <input type="text" placeholder="주택명(건설업체명)" id="houseNm" name="houseNm" defaultValue="" maxLength="50" onChange={handleHousingName}/>
					          <button type="button" onClick={searchPost} className="search_btn"><img src={ic_search} alt=""/> 검색</button>
				          </div>
				          <div className="search_row chk_search" data-req="">
					          <dl>
					  	        <dt>
                        <div className='kind'>분양/임대</div>
                      </dt>
					  	        <dd>
					  		        <div className="check_st2" style={{height:"22px"}}>
					  		  	      <input type="checkbox" id="chk0" name="chk0" value="" onChange={e => {changeHandler(e.currentTarget.checked, e.target.value)}} checked={checkedButtons.includes('')?true:false}/>
					  		  	      <label htmlFor="chk0">전체</label>
					  		        </div>

					  		        <div className="check_st2 not_all_chk" style={{height:"22px"}}>
					  		  	      <input type="checkbox" id="chk1" name="chk1" value="분양" onChange={e => {changeHandler(e.currentTarget.checked, e.target.value)}} checked={checkedButtons.includes('분양')?true:false}/>
					  		  	      <label htmlFor="chk1">분양주택</label>
					  		        </div>

					  		        <div className="check_st2 not_all_chk" style={{height:"22px"}}>
					  		  	      <input type="checkbox" id="chk2" name="chk2" value="분양전환가능임대" onChange={e => {changeHandler(e.currentTarget.checked, e.target.value)}} checked={checkedButtons.includes('분양전환가능임대')?true:false}/>
					  		  	      <label htmlFor="chk2">분양전환 가능임대</label>
					  		        </div>

					  		        <div className="check_st2 not_all_chk" style={{height:"22px"}}>
					  		  	      <input type="checkbox" id="chk3" name="chk3" value="분양전환불가임대" onChange={e => {changeHandler(e.currentTarget.checked, e.target.value)}} checked={checkedButtons.includes('분양전환불가임대')?true:false}/>
					  		  	      <label htmlFor="chk3">분양전환 불가임대</label>
					  		        </div>
					  	        </dd>
					          </dl>
				          </div>
			          </form>
		          </div>
	          </div>
            <div className='menu_name'>■ 검색 결과</div>
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
                </tr>
              </thead>
              <tbody>
                {searchList.slice(offset, offset + limit).map(({ id, region, housingType, rentOrSale, houseInfo, constructorCompany, schedule}) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              total={searchList.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </SearchContent>
        </SearchBody>
      </SearchContainer>
    );
}
    
export default Search;
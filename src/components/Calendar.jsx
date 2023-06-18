import styled from 'styled-components'
import React,{useState, useEffect} from 'react'
import Calendar1 from 'react-calendar';
import MainHeader from './MainHeader'
import moment from 'moment'
import Axios from 'axios'

import 'react-calendar/dist/Calendar.css'

const CalendarContainer=styled.div`
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

const CalendarNameBox=styled.div`
  color: white;
  background-color: #3964E5;
  height: 200px;
  text-align: left;
  padding-left: 140px;
  line-height: 270px;
  font-weight: 600;
  font-size: 50px;
`;

const CalendarBody = styled.div`
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

const CalendarContent = styled.div`
  .react-calendar {
    display: table;
    color: #333;
    width: 90%;
    height: 857px;
    margin: auto;
    border-top: 2px solid #0e4eb2;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #0e4eb2;
  }

  .react-calendar button {
    display: table-cell;
    margin: 0;
    outline: none;
  }
  
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
    border-left: 1px solid #c9c9c9;
    background-color: #3964E5;
  }
  
  .react-calendar__navigation button {
    min-width: 44px;
    font-size: 30px;
    color: #fff;
  }
  
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }
  
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #3964E5;
  }
  
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
    border-bottom: 1px solid #c9c9c9;
  }
  
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
    border-top: 2px solid #3964E5;
    border-left: 1px solid #c9c9c9;
    border-right: 1px solid #c9c9c9;
  }
  
  .react-calendar__month-view__days__day--weekend {
    color: #333;
  }
  
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #cacaca;
  }
  
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
    display: table-cell;
  }
  
  .react-calendar__tile {
    position: relative;
    max-width: 100%;
    min-height: 150px;
    height: auto;
    max-height: 1000px;
    overflow: 
    background: none;
    text-align: left;
    border: 1px solid #c9c9c9;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #fff;
  }
  
  .react-calendar__tile--now {
    background: #fff;
  }
  
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #fff;
  }
  
  .react-calendar__tile--hasActive {
    background: #fff;
  }
  
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #fff;
  }
  
  .react-calendar__tile--active {
    background: #fff;
    color: #333;
  }
  
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #fff;
  }
  
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #fff;
  }

  .react-calendar__navigation__label > span {
    font-size:  30px;
    font-weight: 550;
    color: #fff;
  }

  .react-calendar__month-view__weekdays {
    abbr { /*월,화,수... 글자 부분*/
      text-decoration: none;
      line-height: 1.9rem;
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  .day-of-month {
    position: absolute;
    top: 5px;
    left: 5px;
    padding: 4px;
    font-weight: bold;
    font-size: 16px;
  }
`;

const Unit1 = styled.div`
  position: relative;
  margin-top: 5px;
  height: 23px;
  color: #fff;
  background-color: #3964E5;
  padding: 3px 5px 3px;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: small;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Unit2 = styled.div`
  position: relative;
  margin-top: 5px;
  height: 23px;
  color: #000;
  background-color: #88c6ed;
  padding: 3px 5px 3px;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: small;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Unit3 = styled.div`
  position: relative;
  margin-top: 5px;
  height: 23px;
  color: #000;
  background-color: #82c341;
  padding: 3px 5px 3px;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: small;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Unit4 = styled.div`
  position: relative;
  margin-top: 5px;
  height: 23px;
  color: #000;
  background-color: #faa31b;
  padding: 3px 5px 3px;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: small;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Unit5 = styled.div`
  position: relative;
  margin-top: 5px;
  height: 23px;
  color: #000;
  background-color: #ffdd24;
  padding: 3px 5px 3px;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: small;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Unit6 = styled.div`
  position: relative;
  margin-top: 5px;
  height: 23px;
  color: #fff;
  background-color: #721897;
  padding: 3px 5px 3px;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: small;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Unit7 = styled.div`
  position: relative;
  margin-top: 5px;
  height: 23px;
  color: #000;
  background-color: #e5a6ff;
  padding: 3px 5px 3px;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: small;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

function Calendar() {
    const [value, onChange] = useState(new Date());
    const monthOfActiveDate = moment(value).format('YYYY-MM');
    const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);
    const [dayList, setDayList] = useState([]);

    useEffect(() => {
      Axios.get(
        'http://13.124.229.36:8080/api/applications/calendar?year=2023&month=4', 
        {
          year: activeMonth.substring(0,4),
          month: activeMonth.substring(5,7)
        }).then((response) => {
            if(response.data.success) {
              setDayList(response.data.response);
            }
      })
    }, []);

    const getActiveMonth = (activeStartDate = moment.MomentInput) => {
      const newActiveMonth = moment(activeStartDate).format('YYYY-MM');
      setActiveMonth(newActiveMonth);
    };

    const handleClick = () => {
      console.log(dayList);
    }
    
    return (
      <CalendarContainer>
        <MainHeader></MainHeader>
        <CalendarNameBox>청약 캘린더</CalendarNameBox>
        <CalendarBody>
          <div className='menu_name' onClick={handleClick}>■ 청약 캘린더(청약일정)</div>
          <CalendarContent>
            <div className='mt_30'/>
            <Calendar1
              onChange = {onChange}
              next2Label={null}
              prev2Label={null}
              onActiveStartDateChange={({ activeStartDate }) =>
                getActiveMonth(activeStartDate)
              }
              formatDay={(locale, date) => 
                <>
                  <div className="day-of-month">{date.getDate()}</div>
                  <div className='mt_30'></div>
                </>
              }
              value = {value}
              tileContent = {({ date }) => {
                const currentDate = moment(date).format("YYYY-MM-DD");
                const markedDates = dayList.filter(markDate => moment(markDate.schedule.startDate).format("YYYY-MM-DD") === currentDate);
                return (
                  <div>
                    {markedDates.map((it) => (
                        it.region === '서울' ?
                        <Unit1 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit1>
                        : it.region === '경기' ?
                        <Unit2 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit2>
                        : it.region === '인천' ?
                        <Unit2 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit2>                        
                        : it.region === '강원' ?
                        <Unit3 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit3>
                        : it.region === '경남' ?
                        <Unit4 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit4>
                        : it.region === '경북' ?
                        <Unit4 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit4>
                        : it.region === '대구' ?
                        <Unit4 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit4>
                        : it.region === '부산' ?
                        <Unit4 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit4>   
                        : it.region === '울산' ?
                        <Unit4 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit4>                                                
                        : it.region === '전남' ?
                        <Unit5 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit5>
                        : it.region === '전북' ?
                        <Unit5 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit5>
                        : it.region === '광주' ?
                        <Unit5 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit5>                        
                        : it.region === '충남' ?
                        <Unit6 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit6>
                        : it.region === '충북' ?
                        <Unit6 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit6>
                        : it.region === '대전' ?
                        <Unit6 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit6>
                        : it.region === '세종' ?
                        <Unit6 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit6>
                        : 
                        <Unit7 className='font_bold' key={it.id}>
                          {it.houseInfo.name}
                        </Unit7>                      
                    ))}
                  </div>
                );
              }}
            />
          </CalendarContent>
          <div className='mt_30'/>
        </CalendarBody>
      </CalendarContainer>
    );
}
    
export default Calendar;
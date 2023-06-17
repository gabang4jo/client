import styled from 'styled-components'
import React,{useState} from 'react'
import Calendar1 from 'react-calendar'; 
import MainHeader from './MainHeader'
import moment from 'moment';

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

function Calendar({...loginUserProps}) {
    const [value, onChange] = useState(new Date());
    
    const dayList = [
      [1, '2023-06-08','DMC가재울 아이파크','01'],
      [2, '2023-06-08','상무센트럴자이','01'],
      [3, '2023-06-08','운정자이 시그니처','01'],
      [4, '2023-06-08','파주 운정신도시 디에트르 센트럴파크','02'],
      [5, '2023-06-08','e','02'],
      [6, '2023-06-08','f','02'],
      [7, '2023-06-13','g','03'],
      [8, '2023-06-13','h','03'],
      [9, '2023-06-13','i','03'],
    ];

    const[mark, setMark] = useState(dayList);
    
    return (
      <CalendarContainer>
        <MainHeader {...loginUserProps} ></MainHeader>
        <CalendarNameBox>청약 캘린더</CalendarNameBox>
        <CalendarBody>
          <div className='menu_name'>■ 청약 캘린더(청약일정)</div>
          <CalendarContent>
            <div className='mt_30'/>
            <Calendar1
              onChange = {onChange}
              formatDay={(locale, date) => 
                <>
                  <div className="day-of-month">{date.getDate()}</div>
                  <div className='mt_30'></div>
                </>
              }
              value = {value}
              tileContent = {({ date }) => {
                const currentDate = moment(date).format("YYYY-MM-DD");
                const markedDates = mark.filter(([_, markDate]) => markDate === currentDate);
                return (
                  <div>
                    {markedDates.map(([index, markDate, HousingName, type]) => (
                      type==='01' ?
                        <Unit1 key={index}>
                          {HousingName}
                        </Unit1>
                        : type==='02' ?
                        <Unit2 key={index}>
                          {HousingName}
                        </Unit2>
                        : type==='03' ?
                        <Unit3 key={index}>
                          {HousingName}
                        </Unit3>
                        : {}
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
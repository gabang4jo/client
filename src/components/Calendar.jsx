import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'

const CalendarContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 1440;
    height: 1024;
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

function Calendar({...loginUserProps}) {
 
    return (
      <CalendarContainer>
        <MainHeader {...loginUserProps} ></MainHeader>
        <CalendarNameBox>청약 캘린더</CalendarNameBox>
      </CalendarContainer>
    );
}
    
export default Calendar;
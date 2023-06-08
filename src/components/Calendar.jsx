import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'

const CalendarContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 1440;
    height: 1024;
`;

function Calendar({...loginUserProps}) {
 
    return (
      <CalendarContainer>
        <MainHeader {...loginUserProps} ></MainHeader>
      </CalendarContainer>
    );
}
    
export default Calendar;
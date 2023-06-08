import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Calendar from '../components/Calendar';

const CalendarPage = ({...hookProps}) => {
    return (
        <div>
            <GlobalStyle />
            <Calendar {...hookProps} />
        </div>
    )
}

export default CalendarPage;
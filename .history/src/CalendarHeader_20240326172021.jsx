import { useState, useEffect } from "react";

const CalendarHeader = ({handleGoToNextWeek, handleGoToPreviousWeek, datesRange, calendarHeader}) => {

  return (
    <div className="calendar-header">
        <button className='calendar-button' onClick={handleGoToPreviousWeek}>Previous</button>
        <div className="calendar-text">
        <h2>{calendarHeader}</h2>
        <h1>{datesRange}</h1>
        </div>
        <button className='calendar-button' onClick={handleGoToNextWeek}>Next</button>
    </div>
  )
}

export default CalendarHeader;

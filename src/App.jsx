import './App.css'
import CalendarHeader from './CalendarHeader'
import CalendarDays from './CalendarDays'
import { useState, useEffect } from 'react';

function App() {

  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const now = new Date();
    const currentDay = now.getDay();
    const untilMonday = currentDay === 0 ? 6 : currentDay - 1;
    now.setDate(now.getDate() - untilMonday);
    return now;
});

const [currentWeekEnd, setCurrentWeekEnd] = useState(() => {
  const end = new Date(currentWeekStart);
  end.setDate(currentWeekStart.getDate() + 6);
  return end;
});

const [currentDates, setCurrentDates] = useState([]);


useEffect(() => {
  const end = new Date(currentWeekStart);
  end.setDate(currentWeekStart.getDate() + 6);
  setCurrentWeekEnd(end);

  setCurrentDates(() => {
    const dates = [];
    const day = new Date(currentWeekStart);
    for (let i = 0; i < 7; i++) {
      let nr = day.getDate() + i;
      dates.push(nr);
    }
    return dates;
  });
  
}, [currentWeekStart]);

const handleGoToPreviousWeek = () => {
  setCurrentWeekStart((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
  });
};

const handleGoToNextWeek = () => {
  setCurrentWeekStart((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
  });
};

const startMonth = currentWeekStart.getMonth();
const endMonth = currentWeekEnd.getMonth();
const startYear = currentWeekStart.getFullYear();
const endYear = currentWeekEnd.getFullYear();

const monthsNames = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie',
                      'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

let calendarHeader = `${monthsNames[startMonth]} ${startYear}`;
if (startMonth !== endMonth || startYear !== endYear) {
  calendarHeader += ` — ${monthsNames[endMonth]} ${endYear} `
}

let weekStartMonthNumber = currentWeekStart.getMonth() + 1;
let weekEndMonthNumber = currentWeekEnd.getMonth() + 1; 

weekStartMonthNumber = weekStartMonthNumber < 10 ? `0${weekStartMonthNumber}` : weekStartMonthNumber;
weekEndMonthNumber = weekEndMonthNumber < 10 ? `0${weekEndMonthNumber}` : weekEndMonthNumber;

const datesRange = `${currentWeekStart.getDate()} / ${weekStartMonthNumber} — ${currentWeekEnd.getDate()} / ${weekEndMonthNumber}`;


  return (
    <>
      <h1>Calendar Demo</h1>
      <div className='calendar-wrapper'>
        
        <CalendarHeader handleGoToNextWeek={handleGoToNextWeek} handleGoToPreviousWeek={handleGoToPreviousWeek} datesRange={datesRange} calendarHeader={calendarHeader} />
        <CalendarDays  currentDates={currentDates} />
      </div>
    </>
  )
}

export default App

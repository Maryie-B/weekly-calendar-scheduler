import { useState, useEffect } from "react";

const Calendar = () => {
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

  useEffect(() => {
    const end = new Date(currentWeekStart);
    end.setDate(currentWeekStart.getDate() + 6);
    console.log(end, '- from useEffect');
    setCurrentWeekEnd(end);
  }, [currentWeekStart]);

  const handleGoToPreviousWeek = () => {
    setCurrentWeekStart((prevDate) => {
        const newDate = new Date(prevDate);
        newDate.setDate(newDate.getDate() - 7);
        console.log(newDate, '-- from handleGoToPrevWeek');
        return newDate;
    });
  };

  const handleGoToNextWeek = () => {
    setCurrentWeekStart((prevDate) => {
        const newDate = new Date(prevDate);
        newDate.setDate(newDate.getDate() + 7);
        console.log(newDate, '-from handle NEXTdate');
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
        <button className='calendar-button' onClick={handleGoToPreviousWeek}>Previous</button>
        <div className="calendar-text">
        <h2>{calendarHeader}</h2>
        <h1>{datesRange}</h1>
        </div>
        <button className='calendar-button' onClick={handleGoToNextWeek}>Next</button>
    </>
  )
}

export default Calendar

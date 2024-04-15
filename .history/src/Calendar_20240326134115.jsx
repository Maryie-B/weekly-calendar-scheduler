import { useState } from "react";

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


  
  const monthsNames = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie',
                        'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
  
  const monthName = monthsNames[currentWeekStart.getMonth()];
  console.log(monthName);
  let weekStartMonthNumber = currentWeekStart.getMonth() + 1;
  let weekEndMonthNumber = currentWeekEnd.getMonth() + 1;   

  weekStartMonthNumber = weekStartMonthNumber < 10 ? `0${weekStartMonthNumber}` : weekStartMonthNumber;
  weekEndMonthNumber = weekEndMonthNumber < 10 ? `0${weekEndMonthNumber}` : weekEndMonthNumber;

  const datesRange = `${currentWeekStart.getDate()} / ${weekStartMonthNumber} — ${currentWeekEnd.getDate()} / ${weekEndMonthNumber}`;
  
  const year = currentWeekStart.getFullYear();

  return (
    <>
        <button className='calendar-button'>Previous</button>
        <div className="calendar-text">
        <h2>{monthName} {year}</h2>
        <h1>{datesRange}</h1>
        </div>
        <button className='calendar-button'>Next</button>
    </>
  )
}

export default Calendar

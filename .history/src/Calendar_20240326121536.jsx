

const Calendar = () => {
  const now = new Date();

  const currentDay = now.getDay();
  const untilMonday = currentDay === 0 ? 6 : currentDay - 1;
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - untilMonday);

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  
  const monthsNames = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie',
                        'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
  
  const monthName = monthsNames[weekStart.getMonth()];
  let weekStartMonthNumber = weekStart.getMonth() + 1;
  let weekEndMonthNumber = weekEnd.getMonth() + 1;   

  weekStartMonthNumber = weekStartMonthNumber < 10 ? `0${weekStartMonthNumber}` : weekStartMonthNumber;
  weekEndMonthNumber = weekEndMonthNumber < 10 ? `0${weekEndMonthNumber}` : weekEndMonthNumber;

  const datesRange = `${weekStart.getDate()} / ${weekStartMonthNumber} — ${weekEnd.getDate()} / ${weekEndMonthNumber}`;
  
  const year = weekStart.getFullYear();

  return (
    <div className="calendar-text">
      <h2>{monthName} {year}</h2>
      <h1>{datesRange}</h1>
    </div>
  )
}

export default Calendar



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
  let weekStartMonthNumber = weekStart.getMonth();
  let weekEndMonthNumber = weekEnd.getMonth();

  if (weekStartMonthNumber < 10) {
    weekStartMonthNumber = '0' + weekStartMonthNumber;
  }

  if (weekEndMonthNumber < 10) {
    weekEndMonthNumber = '0' + weekEndMonthNumber;
  }

  const datesRange = `${weekStart.getDate()} / ${weekStartMonthNumber} — ${weekEnd.getDate()} / ${weekEndMonthNumber}`;
  
  const year = weekStart.getFullYear();
  console.log(year);

  return (
    <div className="calendar-text">
      <h1>{monthName}</h1>
      <h2>{datesRange}</h2>
    </div>
  )
}

export default Calendar

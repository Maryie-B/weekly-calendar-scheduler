

const Calendar = () => {
  const now = new Date();

  const currentDay = now.getDay();
  const untilMonday = currentDay === 0 ? 6 : currentDay - 1;
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - untilMonday);

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  console.log(weekEnd);
  


  return (
    <div className="calendar-text">
      <h1>DATES FROM -- TO</h1>
    </div>
  )
}

export default Calendar

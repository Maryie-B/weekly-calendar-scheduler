

const Calendar = () => {
  const now = new Date();

  const currentDay = now.getDay();
  const untilMonday = currentDay === 0 ? 6 : currentDay - 1;
  console.log(untilMonday);
  


  return (
    <div className="calendar-text">
      <h1>DATES FROM -- TO</h1>
    </div>
  )
}

export default Calendar

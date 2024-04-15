

const Calendar = () => {
  const now = new Date();

  const currentDay = now.getDay();
  console.log(currentDay);
  


  return (
    <div className="calendar-text">
      <h1>DATES FROM -- TO</h1>
    </div>
  )
}

export default Calendar

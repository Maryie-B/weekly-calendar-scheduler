/* eslint-disable react/no-unknown-property */

const CalendarDays = ({currentDates}) => {
  const weekDays = ['interval', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică']

  const hours = [];
  for (let i = 8; i <= 22; i++) {
    hours.push(i);
  }

  const handleIntervalClick = (e) => {
    console.log(e.target.getAttribute('data'), 'This interval has been clicked!');
  };
  
  return (
    <div className="calendar-days-wrapper">
      {weekDays.map((day, index) => {
        return (
        
        index === 0 ?
        <div  key={index}>
           <div className="days-header">{day}</div>
           {hours.map((hour, index) => {
               return ( 
                   <div className="hour-intervals" key={hour}>{hour < 10 ? `0${hour}:00` : `${hour}:00`}</div>
               )
           })}
        </div> 
        :
        <div className="days-header" key={index}>
        <h3>{day}</h3>
        <h3>- {currentDates[index-1]} -</h3>
        {hours.map((hour, index) => {
            return (
                <div className="hour-intervals-empty" data={{hour, index}} key={hour} onClick={handleIntervalClick}> </div>
            )
        })}
        </div>
        )
      })}
    </div>
  )
}

export default CalendarDays

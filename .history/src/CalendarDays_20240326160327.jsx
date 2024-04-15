import { useState } from "react"

const CalendarDays = () => {
  const weekDays = ['interval ', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică']

  const hours = [];
  for (let i = 8; i <= 22; i++) {
    hours.push(i);
  }

  const handleIntervalClick = (e) => {
    console.log(e.target.hour, 'This interval has been clicked!');
  };
  
  return (
    <div className="calendar-days-wrapper">
      {weekDays.map((day, index) => {
        return (
        
        index === 0 ?
        <div className="days-header" key={index}>
           <h3>{day}</h3>
           {hours.map((hour, index) => {
               return ( 
                   <div className="hour-intervals" key={hour}>{hour < 10 ? `0${hour}:00` : `${hour}:00`}</div>
               )
           })}
        </div> 
        :
        <div className="days-header" key={index}>
        <h3>{day}</h3>
        {hours.map((hour, index) => {
            return (
                <div className="hour-intervals-empty" key={hour} onClick={handleIntervalClick}> </div>
            )
        })}
        </div>
        )
      })}
    </div>
  )
}

export default CalendarDays

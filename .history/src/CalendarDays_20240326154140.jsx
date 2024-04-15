import { useState } from "react"

const CalendarDays = () => {
  const weekDays = [' ', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică']

  const hours = [];
  for (let i = 8; i <= 22; i++) {
    hours.push(i);
  }

  
  return (
    <div className="calendar-days-wrapper">
      {weekDays.map((day, index) => {
        return (
        
        <div className="days-header" key={index}>
           <h3>{day}</h3>
           {hours.map((hour) => {
               return (
                   <div key={hour}>{hour < 10 ? `0${hour}:00` : `${hour}:00`}</div>
               )
           })}
           {/* {hours.map((hour) => 
                return (
                <div key={hour}> test </div>
                ))} */}
        </div>
        )
      })}
    </div>
  )
}

export default CalendarDays

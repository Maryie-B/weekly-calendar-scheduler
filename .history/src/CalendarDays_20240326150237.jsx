import { useState } from "react"

const CalendarDays = () => {
  const weekDays = ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică']

  return (
    <div>
      {weekDays.map((day, index) => {
        return (
        <div className="days-header" key={index}>
           <h3>{day}</h3>
        </div>
        )
      })}
      <h2>TEST</h2>
    </div>
  )
}

export default CalendarDays

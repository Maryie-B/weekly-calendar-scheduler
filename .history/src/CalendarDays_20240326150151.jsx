import { useState } from "react"

const CalendarDays = () => {
  const weekDays = ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică']

  return (
    <div>
      {weekDays.map((day) => {
        return (
        <div className="days-header">
           <h3>{weekDays[day]}</h3>
        </div>
        )
      })}
      <h2>TEST</h2>
    </div>
  )
}

export default CalendarDays

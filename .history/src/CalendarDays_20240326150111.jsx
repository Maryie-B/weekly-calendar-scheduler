import { useState } from "react"

const CalendarDays = () => {
  const weekDays = ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică']

  const test = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div>
      {weekDays.map((day, index) => {
        return (
        <div className="days-header" key={index}>
           <h3>{weekDays[index]}</h3>
        </div>
        )
      })}
      <h2>TEST</h2>
    </div>
  )
}

export default CalendarDays

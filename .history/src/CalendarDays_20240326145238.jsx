import { useState } from "react"

const CalendarDays = () => {
  const weekDays = ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică']

  return (
    <div>
      {weekDays.map((day) => {
        <div>
           <h3>[day]</h3>
        </div>
      })}
    </div>
  )
}

export default CalendarDays

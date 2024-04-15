/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";

const CalendarDays = ({currentDates}) => {
  const weekDays = ['interval', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică']

  const hours = [];
  for (let i = 8; i <= 22; i++) {
    hours.push(i);
  }

  const [intervalSlots, setIntervalSlots] = useState(() => {
    let interval = [];
    weekDays.map((day, index) => {
      if (index !== 0) {
        for (let h of hours) {
          interval.push({day: day, currentDates: currentDates[index-1], hour: h})
        }
      }
    });
    return interval;
  });

  console.log(intervalSlots);


  const handleIntervalClick = (e) => {
    const intervalData = JSON.parse(e.target.getAttribute('data-interval'));
    console.log(intervalData);
  };
  
  return (
    <div className="calendar-days-wrapper">
      {weekDays.map((day, index) => {
        return (
        
        index === 0 ?
        <div  key={index}>
           <div className="days-header" id="interval-name">{day}</div>
           {hours.map((hour) => {
               return ( 
                   <div className="hour-intervals" key={hour}>{hour < 10 ? `0${hour}:00` : `${hour}:00`}</div>
               )
           })}
        </div> 
        :
        <div className="days-header" key={index}>
        <h3>{day}</h3>
        <h3>- {currentDates[index-1]} -</h3>
        {hours.map((hour) => {
            return (
                <div className="hour-intervals-empty" data-interval={JSON.stringify({ hour, day , currentDates: currentDates[index-1]})} key={hour} onClick={handleIntervalClick}> </div>
            )
        })}
        </div>
        )
      })}
    </div>
  )
}

export default CalendarDays

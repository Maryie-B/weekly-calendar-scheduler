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
          interval.push({day: day, currentDates: currentDates[index-1], hour: h, isOccupied: false, isChosen: false})
        }
      }
    });
    return interval;
  });


  const handleIntervalClick = (e, slot) => {
    console.log(slot);
    const updatedIntervalSlots = intervalSlots.map(slotItem => {
      console.log(slotItem);
      if (slotItem.day === slot.day && slotItem.hour === slot.hour) {
        return { ...slotItem, isChosen: true };
      }
    });

    // console.log(updatedIntervalSlots);

    // setIntervalSlots(updatedIntervalSlots);
  };
  
  return (
    <div className="calendar-days-wrapper">
      {weekDays.map((weekday, index) => {
        return (
        
        index === 0 ?
        <div  key={index}>
           <div className="days-header" id="interval-name">{weekday}</div>
           {hours.map((hour) => {
               return ( 
                   <div className="hour-intervals" key={hour}>{hour < 10 ? `0${hour}:00` : `${hour}:00`}</div>
               )
           })}
        </div> 
        :
        <div className="days-header" key={index}>
        <h3>{weekday}</h3>
        <h3>- {currentDates[index-1]} -</h3>
        {/* {hours.map((hour, index) => {
            console.log(index, 'interval mapping');
            return (
                <div className="hour-intervals-empty" data-interval={JSON.stringify({ hour, day , currentDates: currentDates[index-1]})} key={hour} onClick={handleIntervalClick}> </div>
            ) 
        })} */}
        {console.log(intervalSlots.filter(s => s.day === weekday))}
        {intervalSlots.filter(slot => slot.day === weekday)
          .map((slot, slotIndex) => {
            return (
              <div
              className={
                slot.isChosen ? 'hour-intervals-chosen' :
                slot.isOccupied ? 'hour-intervals-occupied' :
                'hour-intervals-empty'
              }
               key={slotIndex}
               data-interval={JSON.stringify({ hour: slot.hour, day: slot.day, currentDates: currentDates[index-1] })}
               onClick={(e) => handleIntervalClick(e, slot)} 
              > </div>
            )
          })}
        </div>
        )
      })}
    </div>
  )
}

export default CalendarDays

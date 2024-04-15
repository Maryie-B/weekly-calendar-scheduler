import './App.css'
import CalendarHeader from './CalendarHeader'
import CalendarDays from './CalendarDays'

function App() {

  return (
    <>
      <h1>Calendar Demo</h1>
      <div className='calendar-wrapper'>
        
        <CalendarHeader />
        <CalendarDays />
      </div>
    </>
  )
}

export default App

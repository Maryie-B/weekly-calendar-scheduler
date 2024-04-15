import './App.css'
import Calendar from './Calendar'

function App() {

  return (
    <>
      <h1>Calendar Demo</h1>
      <div className='calendar-wrapper'>
        <button className='calendar-button'>Previous</button>
        <Calendar />
        <button className='calendar-button'>Next</button>
      </div>
    </>
  )
}

export default App

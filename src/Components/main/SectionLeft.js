import React from 'react'
import MainCard from './MainCard'
import ClimaNextDay from '../request/ClimaNextDay';

function SectionLeft() {

  const nextThreeDay = ClimaNextDay();

  return (
    <div className="main_section">
        <div className="main_section-title mt-10">
          <h3> 3 Days</h3> <span className="ml-5">Forecast</span>
        </div>
        <div className="main_section-content">
          {
            nextThreeDay.map((day, index) => <MainCard key={index} day={day}/>)
          }

        </div>
    </div>
  )
}

export default SectionLeft

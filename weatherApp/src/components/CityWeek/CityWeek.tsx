import React from 'react'
import './CityWeek.css'

// TODO: find out what props you need and add them to the interface
// it may be easy to use the same props as in CityListElement for each day
// may make sense to make a day component

function CityWeek() {
  return (
    <div className='cityWeek'>

      <div className='day'>
        <div>Monday</div>
        <div>⛈</div>
        <div>5mm</div>
        <div>10℃</div>
      </div>
      <span className='line'></span>
      
      
      
    </div>
  )
}

export default CityWeek
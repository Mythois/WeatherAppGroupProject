import React from 'react'
import './CityWeek.css'

function CityWeek() {
  return (
    <div className='cityWeek'>
      <div className='day'>
        <div className='dayTitle'>Monday</div>
        <div className='dayIcon'></div>
        <div className='dayTemp'>10°</div>
      </div>
      <div className='day'>
        <div className='dayTitle'>Tuesday</div>
        <div className='dayIcon'></div>
        <div className='dayTemp'>10°</div>
      </div>
      <div className='day'>
        <div className='dayTitle'>Wednesday</div>
        <div className='dayIcon'></div>
        <div className='dayTemp'>10°</div>
      </div>
      <div className='day'>
        <div className='dayTitle'>Thursday</div>
        <div className='dayIcon'></div>
        <div className='dayTemp'>10°</div>
      </div>
      <div className='day'>
        <div className='dayTitle'>Friday</div>
        <div className='dayIcon'></div>
        <div className='dayTemp'>10°</div>
      </div>
    </div>
  )
}

export default CityWeek
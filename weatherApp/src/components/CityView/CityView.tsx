import React from 'react'

import './CityView.css'
import CityHeader from '../CityHeader/CityHeader'
import CityWeek from '../CityWeek/CityWeek'

function CityView() {
  return (
    <div className='cityView'>
        <CityHeader cityTemp={13} cityName={'Trondheim'}/>
        <CityWeek />
    </div>
  )
}

export default CityView



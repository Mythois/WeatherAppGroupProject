import React from 'react'

import './CityView.css'
import CityHeader from '../CityHeader/CityHeader'
import CityWeek from '../CityWeek/CityWeek'

function CityView() {
  return (
    <div className='cityView'>
        <CityHeader />
        <CityWeek />
    </div>
  )
}

export default CityView



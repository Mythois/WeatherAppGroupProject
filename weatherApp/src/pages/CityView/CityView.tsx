import React from 'react'

import './CityView.css'
import CityHeader from '../../components/CityHeader/CityHeader'
import CityWeek from '../../components/CityWeek/CityWeek'

function CityView() {
  return (
    <div className='cityView'>
        <CityHeader cityTemp={13} cityName={'Trondheim'}/>
        <CityWeek />
    </div>
  )
}

export default CityView



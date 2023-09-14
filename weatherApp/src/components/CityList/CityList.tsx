import React from 'react'
import './CityList.css'
import CityListElement from '../CityListElement/CityListElement'

function CityList() {
  return (
    <div className='cityList'>
        <CityListElement cityName='testby1' cityTemp={13} cityWeatherIcon=''/>
        <CityListElement cityName='testby1' cityTemp={13} cityWeatherIcon=''/>
        <CityListElement cityName='testby1' cityTemp={13} cityWeatherIcon=''/>
    </div>
  )
}

export default CityList
import React from 'react'
import './CityListElement.css'

interface CityListElementProps {
  cityName: string
  cityTemp: number
  cityWeatherIcon: string
}

function CityListElement({cityName, cityTemp, cityWeatherIcon}: CityListElementProps) {
  return (
    <div className='cityListElement'>
        <p>{cityName}</p>
        <p>{cityWeatherIcon}</p>
        <p>{cityTemp}℃</p>
    </div>
  )
}

export default CityListElement
import React from 'react'
import './CityListElement.css'

interface CityListElementProps {
  cityName: string
  cityTemp: number
}

function CityListElement({cityName, cityTemp}: CityListElementProps) {
  return (
    <div className='cityListElement'>
        <p>{cityName}</p>
        <p>☺️</p>
        <p>{cityTemp}℃</p>
    </div>
  )
}

export default CityListElement
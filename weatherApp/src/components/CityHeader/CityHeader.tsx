import React from 'react'
import './CityHeader.css'

import getWeatherIcon from '../../utils/getWeatherIcon'

type CityHeaderProps = {
    cityName: string,
    cityTemp: number;
    cityPersipitation: number;
    cloudCoverage: number;
}

function CityHeader({cityName, cityTemp, cityPersipitation, cloudCoverage}: CityHeaderProps) {
    return (
        <div className='cityHeader'>
            <h4>{cityName}</h4>
            <img src={getWeatherIcon(cityPersipitation, cloudCoverage)} alt="icon" />
            <p>{cityTemp}℃</p>
            <p>{cityPersipitation}mm</p>
        </div>
        )
}

export default CityHeader

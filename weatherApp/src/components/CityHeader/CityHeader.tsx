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
            <div className='cityTitle'>{cityName}</div>
            <div className='cityIcon'>
                <img src={getWeatherIcon(cityPersipitation, cloudCoverage)} alt="icon" /></div>
            <div className='cityTemp'>
                <p>{cityTemp}℃</p>
            </div>
        </div>
        )
}

export default CityHeader

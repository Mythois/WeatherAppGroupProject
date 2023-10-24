// This is the CityListElement component. It displays the city name, weather icon, and temperature for a city.
// Users can also favorite the city.

import { useState } from 'react'
import './CityListElement.css'
import getWeatherIcon from '../../utils/getWeatherIcon'
import { Link } from 'react-router-dom'
import weatherHook from '../../utils/api_hooks/weatherHook'
import cityCoordinates from '../../utils/coordinates/cityCoordinates'

// define the props for the CityListElement component
interface CityListElementProps {
  cityName: string // name of the city
}

function CityListElement({ cityName }: CityListElementProps) {
  const cityWeatherData = weatherHook(cityCoordinates[cityName])
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem(cityName) === 'true')

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => {
      const newIsFavorite = !prevIsFavorite
      localStorage.setItem(cityName, String(newIsFavorite))
      return newIsFavorite
    })
  }

  if (!cityWeatherData) {
    // Handle the case where data is still loading or unavailable
    return <div>Loading weather data...</div>
  }

  // Find the lowest / highest temp
  let maxTemp = cityWeatherData?.hourly?.temperature_2m[0]
  let minTemp = cityWeatherData?.hourly?.temperature_2m[0]
  for (let i = 0; i < 24; i++) {
    if (cityWeatherData?.hourly?.temperature_2m[i] < minTemp) {
      minTemp = cityWeatherData?.hourly?.temperature_2m[i]
    }
    if (cityWeatherData?.hourly?.temperature_2m[i] > maxTemp) {
      maxTemp = cityWeatherData?.hourly?.temperature_2m[i]
    }
  }
  const cityTempMax = maxTemp
  const cityTempMin = minTemp

  // Finds the average of rain/clouds
  let sumOfRain = 0
  let sumOfClouds = 0
  for (let i = 0; i < 24; i++) {
    sumOfRain += cityWeatherData?.hourly?.rain[i]
    sumOfClouds += cityWeatherData?.hourly?.cloudcover[i]
  }
  const cityPersipitation = parseFloat((sumOfRain / 24).toFixed(2))
  const cloudCoverage = parseFloat((sumOfClouds / 24).toFixed(2))

  return (
    <div className="cityListElement">
      <Link className="cityLink" to={`/city/${cityName}`}>
        <p>{cityName}</p>
      </Link>

      <img className="weatherIcon" src={getWeatherIcon(cityPersipitation, cloudCoverage)} alt="weather icon" />
      <p>{cityPersipitation}mm</p>
      <p>
        {cityTempMax}/{cityTempMin} ℃
      </p>

      <label className="favorite-checkbox">
        <input type="checkbox" checked={isFavorite} onChange={toggleFavorite} className="hidden-checkbox" />
        <span className="star">&#9733;</span>
      </label>
    </div>
  )
}

export default CityListElement

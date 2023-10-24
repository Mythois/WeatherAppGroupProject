import './CityHeader.css'
import getWeatherIcon from '../../utils/getWeatherIcon'

type CityHeaderProps = {
  cityName: string
  cityTempMax: number
  cityTempMin: number
  cityPersipitation: number
  cloudCoverage: number
}

function CityHeader({ cityName, cityTempMax, cityTempMin, cityPersipitation, cloudCoverage }: CityHeaderProps) {
  return (
    // Render the CityHeader component with the following elements
    <div className="cityHeader">
      <h3>{cityName}</h3>
      <img src={getWeatherIcon(cityPersipitation, cloudCoverage)} alt="icon" />
      <p>{cityPersipitation} mm</p>
      <p>
        {cityTempMax} / {cityTempMin}℃
      </p>
    </div>
  )
}

export default CityHeader

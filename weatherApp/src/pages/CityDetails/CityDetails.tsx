import './CityDetails.css'
import CityHeader from '../../components/CityHeader/CityHeader'
import CityWeek from '../../components/CityWeek/CityWeek'
import cityCoordinates from '../../utils/coordinates/cityCoordinates'
import useWeatherHook from '../../utils/api_hooks/useWeatherHook'

interface CityDetailsProps {
  cityName: string
}

function CityDetails({ cityName }: CityDetailsProps) {
  const cityWeatherData = useWeatherHook(cityCoordinates[cityName])

  // Find the lowest and highest temperatures for the day
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

  // Calculate the average precipitation and cloud coverage for the day
  let sumOfRain = 0
  let sumOfClouds = 0
  for (let i = 0; i < 24; i++) {
    sumOfRain += cityWeatherData?.hourly?.rain[i]
    sumOfClouds += cityWeatherData?.hourly?.cloudcover[i]
  }

  const cityPersipitation = parseFloat((sumOfRain / 24).toFixed(2))
  const cloudCoverage = parseFloat((sumOfClouds / 24).toFixed(2))

  return (
    <div className="cityDetails">
      {/* Display the CityHeader component with weather details */}
      <CityHeader
        cityTempMax={cityTempMax}
        cityTempMin={cityTempMin}
        cityName={cityName}
        cloudCoverage={cloudCoverage}
        cityPersipitation={cityPersipitation}
      />
      {/* Display the CityWeek component for the weekly weather forecast */}
      <CityWeek cityName={cityName} />
    </div>
  )
}

export default CityDetails

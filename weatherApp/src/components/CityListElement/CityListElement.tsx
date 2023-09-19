
// This is the CityListElement component. It displays the city name, weather icon, and temperature for a city. 
// Users can also favorite the city. 

import React, { useState } from 'react';
import './CityListElement.css';
import { useCityWeatherData } from '../../coordinates/useCityWeatherData';
import cityCoordinates from '../../coordinates/cityCoordinates';


// import weather icons
import rain from '../../assets/rain.svg';
import sun from '../../assets/sun.svg';
import cloud from '../../assets/cloud.svg';
import sunCloud from '../../assets/sunCloud.svg';
import weatherHook from '../../api_hooks/weatherHook';


// define the props for the CityListElement component
interface CityListElementProps {
  cityName: string;  // name of the city
}


// fetch weather data from API and return the weather icon
function getWeatherIcon(percipitation: number, cloudCoverage: number) {
  
  if (percipitation > 0 && cloudCoverage > 50) {
    return rain;
  } 
  else if (percipitation < 2 && cloudCoverage < 20) {
    return sun;
  }
  else if (percipitation < 2 && cloudCoverage < 50) {
    return sunCloud;
  }
  else {
    return cloud;
  }
}


function CityListElement({ cityName }: CityListElementProps) {
  const cityWeatherData= weatherHook(cityCoordinates[cityName]);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(isFavorite => !isFavorite);
  };

  if (!cityWeatherData) {
    // Handle the case where data is still loading or unavailable
    return <div>Loading weather data...</div>;
  }

 
  // Find the lowest / highest temp
  let maxTemp = cityWeatherData?.hourly?.temperature_2m[0];
        let minTemp = cityWeatherData?.hourly?.temperature_2m[0];
        for (let i = 0; i < 24; i++) {
          if (cityWeatherData?.hourly?.temperature_2m[i] < minTemp) {
            minTemp = cityWeatherData?.hourly?.temperature_2m[i];
          }
          if (cityWeatherData?.hourly?.temperature_2m[i] > maxTemp) {
            maxTemp = cityWeatherData?.hourly?.temperature_2m[i];
          }
        }
        const cityTempMax = maxTemp;
        const cityTempMin = minTemp;

        // Finds the average of rain/clouds
        let sumOfRain = 0;
        let sumOfClouds = 0;
        for (let i = 0; i < 24; i++) {
          sumOfRain += cityWeatherData?.hourly?.rain[i];
          sumOfClouds += cityWeatherData?.hourly?.cloudcover[i];
        }
        const cityPersipitation = parseFloat((sumOfRain/24).toFixed(2));
        const cloudCoverage = parseFloat((sumOfClouds/24).toFixed(2));
  


  return (
    <div className='cityListElement'>
      <p>{cityName}</p>
      <img className='weatherIcon' src={getWeatherIcon(cityPersipitation, cloudCoverage)} alt='weather icon' />
      <p>{cityPersipitation}mm</p>
      <p>{cityTempMax}/{cityTempMin} ℃</p>
      <label className='favorite-checkbox'>
        <input
          type='checkbox'
          checked={isFavorite}
          onChange={toggleFavorite}
          className='hidden-checkbox'
        />
        <span className='star'>&#9733;</span>
      </label>
    </div>
  );
}

export default CityListElement;

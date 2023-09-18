
// This is the CityListElement component. It displays the city name, weather icon, and temperature for a city. 
// Users can also favorite the city. 

import React, { useState } from 'react';
import './CityListElement.css';

// import weather icons
import rain from '../../assets/rain.svg';
import sun from '../../assets/sun.svg';
import cloud from '../../assets/cloud.svg';
import sunCloud from '../../assets/sunCloud.svg';

// fetch weather data from API and return the weather icon
function getWeatherIcon(percipitation: number, cloudCoverage: number) {
  
  if (percipitation > 0 && cloudCoverage > 50) {
    return rain;
  } 
  else if (percipitation < 5 && cloudCoverage < 20) {
    return sun;
  }
  else if (percipitation < 5 && cloudCoverage < 50) {
    return sunCloud;
  }
  else {
    return cloud;
  }
}


interface CityListElementProps {
  cityName: string;  // name of the city
  cityTempMax: number; // max temperature in celsius
  cityTempMin: number; // min temperature in celsius
  cityPersipitation: number; // persipitation in mm
  isFavorite: boolean; // whether the city is favorited or not
  cloudCoverage: number; // cloud coverage in percent
}

function CityListElement({
  cityName,
  cityTempMin,
  cityTempMax,
  cityPersipitation,
  cloudCoverage
}: CityListElementProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(isFavorite => !isFavorite);
  };

  return (
    <div className='cityListElement'>
      <p>{cityName}</p>
      <img src={getWeatherIcon(cityPersipitation, cloudCoverage)} alt='weather icon' />
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


// This is the CityListElement component. It displays the city name, weather icon, and temperature for a city. 
// Users can also favorite the city. 

import React, { useState } from 'react';
import './CityListElement.css';

// import weather icons
import cloud from '../../assets/cloud.svg';
import rain from '../../assets/rain.svg';
import snow from '../../assets/snow.svg';
import sun from '../../assets/sun.svg';
import thunder from '../../assets/thunder.svg';
import sunCloud from '../../assets/sun-cloud.svg';


interface CityListElementProps {
  cityName: string;  // name of the city
  cityTemp: number; // temperature in celsius
  cityWeatherIcon: string; // path to the weather icon
  cityPersipitation: number; // persipitation in mm
  isFavorite: boolean; // whether the city is favorited or not
}

function CityListElement({
  cityName,
  cityTemp,
  cityWeatherIcon,
  cityPersipitation
}: CityListElementProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(isFavorite => !isFavorite);
  };

  return (
    <div className='cityListElement'>
      <p>{cityName}</p>
      <p>{cityWeatherIcon}</p>
      <p>{cityPersipitation}mm</p>
      <p>{cityTemp}℃</p>

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

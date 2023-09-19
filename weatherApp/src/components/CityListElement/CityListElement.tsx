
// This is the CityListElement component. It displays the city name, weather icon, and temperature for a city. 
// Users can also favorite the city. 

import React, { useState } from 'react';
import './CityListElement.css';
import getWeatherIcon from '../../utils/getWeatherIcon';
import { Link } from 'react-router-dom';


// define the props for the CityListElement component
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

      <Link className='cityLink' to={`/city/${cityName}`}>
        <p>{cityName}</p>
      </Link>

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

import React, { useState, useEffect } from 'react';
import './CityDetails.css';
import CityHeader from '../../components/CityHeader/CityHeader';
import CityWeek from '../../components/CityWeek/CityWeek';
import useCityWeatherData from '../../coordinates/useCityWeatherData';

interface CityDetailsProps {
  cityName: string;
}

function CityDetails( { cityName }: CityDetailsProps) {

  const cityWeatherData = useCityWeatherData(cityName);

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
    <div className='cityDetails'>

        <CityHeader 
          cityTempMax={maxTemp} 
          cityTempMin={minTemp} 
          cityName={cityName} 
          cloudCoverage={cloudCoverage} 
          cityPersipitation={cityPersipitation} />

        <CityWeek />
    </div>
  );
}

export default CityDetails;

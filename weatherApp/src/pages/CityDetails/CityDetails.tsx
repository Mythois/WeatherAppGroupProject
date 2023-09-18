import React, { useState, useEffect } from 'react';
import './CityDetails.css';
import CityHeader from '../../components/CityHeader/CityHeader';
import CityWeek from '../../components/CityWeek/CityWeek';

import weatherHook from '../../api_hooks/weatherHook';


function CityDetails() {
  
  const cityData = weatherHook(location); 
  
  

  return (
    <div className='cityDetails'>
      {cityData ? (
        <>
          <CityHeader cityTemp={cityData.temp} cityName={cityData.name} />
          <CityWeek />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CityDetails;

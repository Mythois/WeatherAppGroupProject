import React, { useState, useEffect } from 'react';
import './CityDetails.css';
import CityHeader from '../../components/CityHeader/CityHeader';
import CityWeek from '../../components/CityWeek/CityWeek';

import weatherHook from '../../api_hooks/weatherHook';


function CityDetails() {
  
  const [cityData, setCityData] = useState<any[]>([]); // Initialize with an empty array
  
  
  return (
    <div className='cityDetails'>
        <CityHeader cityTemp={cityData.temp} cityName={cityData.name} />
        <CityWeek />
    </div>
  );
}

export default CityDetails;

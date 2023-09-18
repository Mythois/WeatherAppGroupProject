import React, { useState, useEffect } from 'react';
import './CityDetails.css';
import CityHeader from '../../components/CityHeader/CityHeader';
import CityWeek from '../../components/CityWeek/CityWeek';

import weatherHook from '../../api_hooks/weatherHook';

interface CityDetailsProps {
  name: string;
  temp: number;
  weatherIcon: string;
}

function CityDetails( {name, temp, weatherIcon }: CityDetailsProps) {
  
  const [cityData, setCityData] = useState<any[]>([]); // Initialize with an empty array
  
  
  return (
    <div className='cityDetails'>
        <CityHeader cityTemp={temp} cityName={name} />
        <CityWeek />
    </div>
  );
}

export default CityDetails;

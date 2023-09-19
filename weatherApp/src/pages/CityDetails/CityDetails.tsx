import React, { useState, useEffect } from 'react';
import './CityDetails.css';
import CityHeader from '../../components/CityHeader/CityHeader';
import CityWeek from '../../components/CityWeek/CityWeek';

interface CityDetailsProps {
  cityName: string;
}

function CityDetails( { cityName }: CityDetailsProps) {
  
  const [cityData, setCityData] = useState<any[]>([]); // Initialize with an empty array
  
  
  return (
    <div className='cityDetails'>
        <CityHeader cityTemp={12} cityName={cityName} cloudCoverage={70} cityPersipitation={6} />
        <CityWeek />
    </div>
  );
}

export default CityDetails;

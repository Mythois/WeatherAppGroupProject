import React, { useState, useEffect } from 'react';
import './CityList.css';
import CityListElement from '../CityListElement/CityListElement';

function CityList() {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('your_api_endpoint_here')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        setCityData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures this effect runs once on component mount

  
  return (
    <div className='cityList'>

        {/* hard coded data for testing */}
        <CityListElement cityName='Oslo' cityTempMax={12} cityTempMin={8} cityPersipitation={34} isFavorite={false} cloudCoverage={70}/>
        <CityListElement cityName='LA' cityTempMax={20} cityTempMin={17} cityPersipitation={0} isFavorite={false} cloudCoverage={10}/>
        <CityListElement cityName='New York' cityTempMax={18} cityTempMin={14} cityPersipitation={0} isFavorite={false} cloudCoverage={70}/>
      

        {/* Loop over the cityData array and create a CityListElement for each city */} 
        
      {/* {cityData.map((city, index) => (
        <CityListElement
          key={index} // Make sure to provide a unique key for each element in the list
          cityName={city.name}
          cityTemp={city.temp}
          cityWeatherIcon={city.weatherIcon}
          isFavorite={city.isFavorite}
        />
      ))} */}
    </div>
  );
}

export default CityList;

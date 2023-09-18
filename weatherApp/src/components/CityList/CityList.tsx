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
        <CityListElement cityName='Oslo' cityTemp={12} cityPersipitation={34} cityWeatherIcon='⛈' isFavorite={false}/>
        <CityListElement cityName='LA' cityTemp={20} cityPersipitation={0} cityWeatherIcon='⛈' isFavorite={false}/>
        <CityListElement cityName='New York' cityTemp={18} cityPersipitation={14} cityWeatherIcon='⛈' isFavorite={false}/>
      

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

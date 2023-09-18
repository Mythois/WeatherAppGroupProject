/**
 * File description:
 * Contains a component (weatherHook) responsible for fetching the data from the open-meto API. 
 * 
 * HOW TO GET WEATHER DATA
 * import weatherHook from './api_hooks/weatherHook';
 * const data = weatherHook(location); 
 * 
 * NOTE:
 * location is a string of the following format "latitude=63.4305&longitude=10.3951"
 * You may want to useState on both the location and the weatherHook to update them when changes occur.
 * 
 */

const fetchWeatherData = async (location: string) => {
    const url = `https://api.open-meteo.com/v1/forecast?${location}&hourly=temperature_2m,rain,cloudcover`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };
  
  const weatherHook = async (location: string) => {
    const data = await fetchWeatherData(location);
    console.log(data);
    
    return data;    
  };
  
  export default weatherHook;


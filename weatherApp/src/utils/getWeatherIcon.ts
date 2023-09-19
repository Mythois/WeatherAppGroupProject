// import weather icons
import rain from '../assets/rain.svg';
import sun from '../assets/sun.svg';
import cloud from '../assets/cloud.svg';
import sunCloud from '../assets/sunCloud.svg';



// fetch weather data from API and return the weather icon
function getWeatherIcon(percipitation: number, cloudCoverage: number) {
  
    if (percipitation >= 2 && cloudCoverage > 50) {
      return rain;
    } 
    else if (percipitation < 2 && cloudCoverage < 20) {
      return sun;
    }
    else if (percipitation < 2 && cloudCoverage < 50) {
      return sunCloud;
    }
    else {
      return cloud;
    }
  }

  export default getWeatherIcon;
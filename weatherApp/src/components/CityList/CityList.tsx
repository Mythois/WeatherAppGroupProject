import './CityList.css';
import CityListElement from '../CityListElement/CityListElement';

interface CityListProps {
  filter: string;
  showFavoritesOnly: boolean
}

function CityList({ filter, showFavoritesOnly }: CityListProps) {
  const cities = ['Oslo', 'Bergen', 'Stavanger', 'Trondheim', 'Stockholm', 'København', 'Helsinki', 'Berlin', 'Paris', 'London'];
  
  // Retrieve favorites from sessionStorage
  const favorites: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const pre = localStorage.key(i);
    const key = String(pre)
    const value = localStorage.getItem(key);

    // Check if the value is 'true' (favorite)
    if (value === 'true') {
      favorites.push(key);
    }
  }

  
  // Filter cities based on favorites and filter text
  const filteredCities = cities.filter(
    (city) => {
      if (showFavoritesOnly) {
        return (favorites.includes(city))
      } else {
        return city.toLowerCase().includes(filter.toLowerCase())
      }
    }
      
  );
  
  return (
    <div className='cityList'>
      {filteredCities.map((cityName, index) => {
        return (
          <CityListElement
            key={index}
            cityName={cityName}
          />
        );
      })}
    </div>
  );
}


export default CityList;



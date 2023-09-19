import { useState } from 'react';
import './Favorites.css';
import CityList from '../../components/CityList/CityList';

function Favorites() {
  const [filter, setFilter] = useState("");

  return (
    <div className='favorite'>
      <CityList filter={filter} showFavoritesOnly={true} />
    </div>
  );
}

export default Favorites;
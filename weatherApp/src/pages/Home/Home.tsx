import React, { useState } from 'react';
import './Home.css';
import { Search } from '../../components/Search/Search';
import CityList from '../../components/CityList/CityList';

function Home() {
  const [filter, setFilter] = useState("");

  return (
    <div className='home'>
      <Search onFilter={(value) => setFilter(value)} />
      <CityList filter={filter} />
    </div>
  );
}

export default Home;

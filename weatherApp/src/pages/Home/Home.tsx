import React from 'react'
import './Home.css'
import Search from '../../components/Search/Search'
import CityList from '../../components/CityList/CityList'

function Home() {
  return (
    <div className='home'>
        <Search/>
        <CityList/>
    </div>
  )
}

export default Home
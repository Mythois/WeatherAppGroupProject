import { Fragment, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'





import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Favorites from './pages/Favorites/Favorites'
import CityDetails from './pages/CityDetails/CityDetails'
import CityList from './components/CityList/CityList'


function App() {

  return (
    <Fragment>
      <Navbar/>
      <Routes>
        {/* just for testing use!! remove after issue is done! */}
        <Route path="/" element={<CityDetails cityName='Oslo'/>}/>

        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Favourites" element={<Favorites/>}/>
      </Routes>
    </Fragment>
  ) 
}

export default App
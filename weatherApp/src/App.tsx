import { Fragment, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'





import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import CityView from './pages/CityView/CityView'
import Home from './pages/Home/Home'


function App() {

  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/Favourites"/>
      </Routes>
      <Home/>
      {/* <CityView/> */}
    </Fragment>
  )
}

export default App
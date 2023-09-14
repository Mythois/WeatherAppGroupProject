import { Fragment, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'





import { Navbar } from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import CityView from './pages/CityView/CityView'


function App() {

  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/Favourites"/>
      </Routes>
      <CityView/>
    </Fragment>
  )
}

export default App

import { Fragment, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'





import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/Favourites"/>
      </Routes>
    </Fragment>
  )
}

export default App

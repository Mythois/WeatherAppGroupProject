import { Fragment, useState } from 'react'
import './App.css'





import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Favorites from './pages/Favorites/Favorites'



function App() {

  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Favourites" element={<Favorites/>}/>
      </Routes>
    </Fragment>
  ) 
}

export default App
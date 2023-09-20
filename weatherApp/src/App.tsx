import { Fragment } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './pages/Home/Home'
import Favorites from './pages/Favorites/Favorites'
import CityDetails from './pages/CityDetails/CityDetails'



function App() {

  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Favorites" element={<Favorites/>}/>
        <Route path="/city/:cityName" element={<CityDetailsWrapper/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Fragment>
  ) 
}

function CityDetailsWrapper() {
  const { cityName = '' } = useParams();

  return <CityDetails cityName={cityName} />;
}

export default App
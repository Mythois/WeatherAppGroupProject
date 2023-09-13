import './styles/Navbar.css'
import { Link } from "react-router-dom"
import React, {useState} from 'react'

export const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false)
    return (<nav>
        <div className='menu' onClick={() =>{setmenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className='logoContainer'><h2>WebDevWeather</h2></div>
        <ul className={menuOpen ? "open" :""}>
            <li className="navigationElement"><Link to="/Home">Home</Link></li>
            <li className="navigationElement"><Link to="/Favourites">Favourites</Link></li>
        </ul>
    </nav>)
}
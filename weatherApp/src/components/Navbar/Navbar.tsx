import './Navbar.css'
import { Link } from "react-router-dom"
import React, {useState} from 'react'

export const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false)
    return (<nav>
        <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={() => setmenuOpen(!menuOpen)}>
            <span className={menuOpen ? 'close-icon1' : ''}></span>
            <span className={menuOpen ? 'close-icon2' : ''}></span>
            <span className={menuOpen ? 'close-icon3' : ''}></span>
        </div>

        <div className='logoContainer'><h2>WebDevWeather</h2></div>
        <ul className={menuOpen ? "open" :""}>
            <li className="navigationElement"><Link to="/Home">Home</Link></li>
            <li className="navigationElement"><Link to="/Favourites">Favourites</Link></li>
        </ul>
    </nav>)
}
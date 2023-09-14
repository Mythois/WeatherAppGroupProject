import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        
        <div className='homeSearch'>
            <form>
                <input type='text' placeholder='Search for a city'/>
                {/* <button type='submit'>Search</button> */}
            </form>
        </div>
    </div>
  )
}

export default Home
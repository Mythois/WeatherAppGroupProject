import React from 'react'
import './Search.css'

function Search() {
  return (
    <div>
        <div className='homeSearch'>
            <form>
                <input type='text' placeholder='Search for a city...'/>
                {/* <button type='submit'>Search</button> */}
            </form>
        </div>
    </div>
  )
}

export default Search
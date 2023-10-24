import { useState, useEffect } from 'react'
import './Home.css'
import { Search } from '../../components/Search/Search'
import CityList from '../../components/CityList/CityList'
import CountryFilter from '../../components/CountryFilter/CountryFilter'
import cityCountries from '../../components/CountryFilter/cityCountries'

function Home() {
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  // Load selected country filter from sessionStorage on component mount
  useEffect(() => {
    const storedSelectedCountry = sessionStorage.getItem('selectedCountry')
    if (storedSelectedCountry !== null) {
      setSelectedCountry(storedSelectedCountry)
    }
  }, [])

  // Save selected country filter to sessionStorage whenever it changes
  useEffect(() => {
    // Sjekk om selectedCountry er null eller "All"
    if (selectedCountry !== null && selectedCountry !== 'All') {
      sessionStorage.setItem('selectedCountry', selectedCountry)
    } else {
      sessionStorage.removeItem('selectedCountry') // Fjern lagret verdi for "All"
    }
  }, [selectedCountry])

  const countries = Array.from(new Set(Object.values(cityCountries)))

  return (
    <div className="home">
      <Search onFilter={(value) => setFilter(value)} />
      <CountryFilter
        countries={countries}
        selectedCountry={selectedCountry}
        onSelectCountry={(country) => setSelectedCountry(country)}
      />
      <CityList filter={filter} showFavoritesOnly={false} selectedCountry={selectedCountry} />
    </div>
  )
}

export default Home

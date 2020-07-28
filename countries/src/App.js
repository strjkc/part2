import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CountryView from './CountryView'
import ListOfCountries from './ListOfCountries'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect( () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => setCountries(response.data))
  }, [filter])

  const submitForm = event => {
    event.preventDefault()
  }
  const displayCountries = () => {
    if (countriesToDisplay.length === 1)
      return <CountryView country={countriesToDisplay[0]} />
    else if (countriesToDisplay.length <= 10 )
      return countriesToDisplay.map(country => <ListOfCountries key={country.name} country={country} setCountries={setCountries} /> ) 
    else
      return <div>Too many matches, specify another filter</div>
  }


  let countriesToDisplay = filter.length > 0 
  ? countries.filter( country => country.name.toLowerCase().includes(filter.toLowerCase()))
  : []

  return (
   <div>
     <form onSubmit={submitForm}>
       find countries <input value={filter} onChange={ event => setFilter(event.target.value)} />
     </form>
     {displayCountries()}
  </div>
  );
}

export default App;

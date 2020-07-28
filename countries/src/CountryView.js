import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherView from './WeatherView'

const ConutryView = ({country}) => {
    const [weatherData, setWeatherData] = useState(null)
    const apiKey = `?access_key=${process.env.REACT_APP_API_KEY}`
    const baseUrl = 'http://api.weatherstack.com/current'

    useEffect( () => {
        axios.get(`${baseUrl}${apiKey}&query=${country.capital}`)
        .then( response =>  response.data.current 
                            ? setWeatherData(response.data)
                            : setWeatherData(false))
    },[])

    const displayWether = () => {
        if (weatherData === null)
            return <div>Fetching wether data</div>
        else if (weatherData === false)
            return <div>Unable to fetch wether data</div>
        else
            return  <WetherView weatherData={weatherData} /> 
    }

    return (
        <div>
            <h1>{country.name}</h1>
            <div>capital {country.capital}</div>
            <div>capital {country.population}</div>
            <h2>Languages</h2>
            <ul>{country.languages.map(language => <li key={language.name}>{language.name}</li>)}</ul>
            <img width='200px' height='150px' src={country.flag} alt={`Flag of ${country.name}`} />
            <h2>Wether in {country.capital}</h2>
            {displayWether()}
        </div>
    )
}

export default ConutryView
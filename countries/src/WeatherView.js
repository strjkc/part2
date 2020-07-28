import React from 'react'

const WeatherView = ({weatherData}) => {
    return (
        <div>
            <div><strong>temperature: </strong>{weatherData.current.temperature}</div>
            <img height='50px' width='50px' src={weatherData.current.weather_icons} alt='weather icon'></img>
            <div><strong>wind: </strong>{weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</div>
        </div>
    )
}

export default WeatherView
import React from 'react'
import WeatherItem from './WeatherItem'

export default function WeatherForecast(props) {
  const {hourlyForecast}=props

  return (
    <div className=' mb-8 w-100 max-w-full mx-auto'>
      <ul className='mx-4 flex flex-1 flex-row  bg-gradient-to-r from-indigo-300 shadow-lg rounded-lg overflow-x-auto noscrollbar '>
        {hourlyForecast.map(hourlyWeather=>(
        <WeatherItem key={hourlyWeather.time_epoch} hourlyWeather={hourlyWeather}/>

        ))}
      </ul>
    </div>
  )
}

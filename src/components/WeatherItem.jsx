import React from 'react'
import { weatherCode } from '../../constants';

export default function WeatherItem(props) {
    const {hourlyWeather}=props;
    const temperature=Math.floor(hourlyWeather.temp_c);
    const time= hourlyWeather.time.split(" ")[1].substring(0,5);
    const weatherIcon= Object.keys(weatherCode).find(icon=> weatherCode[icon].includes(hourlyWeather?.condition.code))

  return (
    <li className='flex flex-col p-3 gap-2 sm:gap-3 align-center items-center'>
          <h1 className='text-bold text-lg'>{time}</h1>
          <img src={`icons/${weatherIcon}.svg`} className='aspect-square h-10 w-10' ></img>
          <h1 className='text-bold text-md'>{temperature}°</h1>
    </li>
  )
}

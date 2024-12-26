import React from 'react'
import { weatherCode } from '../../constants'

export default function CurrentWeather(props) {
  const {data}=props
  //find the SVG icon based on the weather Code
  const weatherIcon= Object.keys(weatherCode).find(icon=> weatherCode[icon].includes(data?.current.condition.code))
  return (
    <main className='flex-1 flex flex-col items-center justify-center'>
      <ul className='list-inside flex flex flex-col'>
        <li className='flex flex-col items-center align-between py-5 gap-3 sm:gap-4 md:gap-5 justify-center'>
          <h1 className='text-white text-bold text-4xl'>{Math.floor(data?.current.temp_c)}°C</h1>
          <img src={`icons/${weatherIcon}.svg`} className='object-fill h-40 w-30' ></img>
          <h1 className='text-white text-thin text-2xl'>{data?.current.condition.text}</h1>
        </li>
      </ul>
    </main>
  )
}

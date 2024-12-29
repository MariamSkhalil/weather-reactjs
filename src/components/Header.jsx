import React from 'react'

export default function Header(props) {
  const {fetchAPIData}=props
  const api_key=import.meta.env.VITE_API_KEY
  //Fetch data using Location entered
  const handleSearch =(e)=>{
      e.preventDefault();
      const searchInput = e.target.querySelector(".search-input");
      const API_URL=`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${searchInput.value}&days=2`;
      //console.log(searchInput.value)
      fetchAPIData(API_URL);
  } 

  //Fetch data using coordinates from user's location
  const handleLocationSearch=()=>{
    navigator.geolocation.getCurrentPosition(
      position =>{
        const {latitude, longitude}= position.coords
        const API_URL=`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${latitude},${longitude}&days=2`;
        //console.log(position)
        fetchAPIData(API_URL);
      },
      ()=>{
        alert("Location access denied! Please eneable permissions to use this feature!")
      }
    )
  }

  return (
    <header className='flex items-center justify-center gap-3 p-3 '>
      <form action='#' onSubmit={handleSearch}>
      <input className='search-input shadow-lg bg-white rounded-full ps-6 pe-20 py-2'placeholder='Enter Location..' />
      </form>
         <button className='specialButton px-3 py-2 rounded-full' onClick={handleLocationSearch}>
            <i className="fa-solid fa-location-crosshairs"></i>
         </button>
    </header>
  )
}

//to get the entered Location, used OnSubmit in Form
//pass the location to the API
//get DATA from API to give to other cComponents
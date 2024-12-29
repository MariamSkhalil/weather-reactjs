import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather"
import Header from "./components/Header"
import WeatherForecast from "./components/WeatherForecast"
import NoResultDiv from "./components/NoResultDiv";


function App() {
  const api_key=import.meta.env.VITE_API_KEY
  const [data,setData]=useState();
  const [hourlyForecast,setHourlyForecast]=useState([]);
  const [noResult, setNoResult]=useState(false);

  const filterHourlyForecast=(hourlyData)=>{
    const currentHour=new Date().setMinutes(0,0,0);
    const next24Hours= currentHour + 24*60*60*1000;
    //filter the hourly data to only include the next 24hrs
    const next24HoursData= hourlyData.filter(({time})=>{
      const forecastTime= new Date(time).getTime();
      return forecastTime >= currentHour && forecastTime <= next24Hours
    });
    setHourlyForecast(next24HoursData);
  }
  async function fetchAPIData(API_URL) {
    setNoResult(false)
    try {
      const response= await fetch(API_URL)
      if(!response.ok) throw new Error()
      const apiData= await response.json()
      setData(apiData)
      const combinedHourlyforecast=[...apiData.forecast.forecastday[0].hour,...apiData.forecast.forecastday[1].hour];
      filterHourlyForecast(combinedHourlyforecast)
    } catch{
      //if no result set the state to true
        setNoResult(true)
    }
  }
  //setting the default city as Cairo
  useEffect(()=>{
    // console.log("api_key",api_key)
    const API_URL=`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=Cairo&days=2`;
      //console.log(searchInput.value)
      fetchAPIData(API_URL);
  },[])

  return (
    <div className="flex flex-col min-h-screen mx-auto w-full bg-gradient-to-r from-indigo-500 ...">
      <Header fetchAPIData={fetchAPIData} />
      {noResult?(
        <NoResultDiv/>
      ):(
        <><CurrentWeather data={data} /><WeatherForecast hourlyForecast={hourlyForecast} /></>
      )}
    </div>
  )
}

export default App

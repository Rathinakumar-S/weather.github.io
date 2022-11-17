import React, { useState } from 'react'
import'./App.css'

const App = () => {

  const apiKey='3e103f1627a5a51031000522f563c949'
  const [weatherData,setWeatherData]=useState("")
  const [city,setCity]=useState("")


  const getWeather=(event)=>{
    if (event.key==="Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(
        Response => Response.json() 
      ).then(
        data=>{
          setWeatherData(data)
          setCity("")
        }
      )
    }
  }

//<img className='image' src="image/abc.jpg"></img>

  return (
    <>
    <div className='container'>
      <div>
      <h1>ATMOSPHERIC APP</h1>
    </div>
    <div>
    <input 
    className='input' 
    placeholder='Enter The City....'
    onChange={e=>setCity(e.target.value)}
    value={city}
    onKeyPress={getWeather}/>
    </div>

    {typeof weatherData.main==='undefined'?(
      <div className='msg'>
        <p>Welcome, pls enter the city to know Weather</p>
      </div>
    ):(
      <div className='main'>
        <p>{weatherData.name}</p>
        <p>Temp = {((weatherData.main.temp)-273.15).toFixed(2)} °C</p>
        <p>pressure {weatherData.main.pressure} mb</p>
        <p>humidity {weatherData.main.humidity} %</p>
        <p>wind Speed {weatherData.wind.speed}/kmh</p>     
        <p>{weatherData.visibility} Mts Visibility</p>
     </div>
    )}
    </div> 

    </>
  )
}

export default App

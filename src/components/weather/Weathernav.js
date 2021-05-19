import React, { useEffect, useState } from "react";
import './Weathernav.css';
const baseUrl = "https://api.openweathermap.org/data/2.5";
const apiKey = "d3e238ced3e15356c1c6acb557b2bc2f";

function Weathernav() {
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [weatherdata, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("lat and long values: ", lat, long);
      if(lat.length != 0 && long.length != 0){
        await fetch(
          `${baseUrl}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`
        ).then((res) => res.json())
         .then((result) => {
            setWeatherData(result);
            console.log(result);
          });
      } else {
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log("Position data:", position);
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
      }
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {typeof weatherdata.main != "undefined" ? (
        <div class="weatherData">
          <div class="weatherImage">
            <img class="weatherImageIcon"
              src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`}
              alt="imgicon"
            />
          </div>
          <div class="suburbData">
            <p class="weatherName">{parseFloat(weatherdata.main.temp).toFixed(1)}&deg; <span class="weatherName">{weatherdata.weather[0].main}</span></p>
            <p class="weatherName">

              {weatherdata.name} | {weatherdata.sys.country}
            </p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Weathernav;


// <div>
//   <h4>Local Weather</h4>
//   <div>
//     <img
//       src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`}
//       alt="imgicon"
//     />
//   </div>
//   <h3>{weatherdata.weather[0].main}</h3>
//   <div>
//     <h1>{parseFloat(weatherdata.main.temp).toFixed(1)}&deg;</h1>
//   </div>
//   <div className="location">
//     <h3>
//       <i className="fa fa-street-view"></i>
//       {weatherdata.name} | {weatherdata.sys.country}
//     </h3>
//   </div>
//   <div className="temprature-range">
//     <h6>
//       Min: {parseFloat(weatherdata.main.temp_min).toFixed(1)}
//       &deg;C || Max: {parseFloat(weatherdata.main.temp_max).toFixed(1)}
//       &deg;C || Humidity: {weatherdata.main.humidity}%
//     </h6>
//   </div>
// </div>

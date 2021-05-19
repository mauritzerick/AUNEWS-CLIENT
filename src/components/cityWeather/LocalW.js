//this local weather for homepage display

import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import SearchCity from "../weather/cityWeather/SearchCity";

const baseUrl = "https://api.openweathermap.org/data/2.5";
const apiKey = "d3e238ced3e15356c1c6acb557b2bc2f";

function LocalW() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [weatherdata, setData] = useState([]);
  let isLoading = true;
  useEffect(() => {
    const fetchData = async () => {
      console.log("lat and long values: ", lat, lon);
      if (lat.length != 0 && lon.length != 0) {
        await fetch(
          `${baseUrl}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKey}`
        )
          .then((res) => res.json())
          .then((result) => {
            setData(result);
            isLoading = false;
            console.log(result);
          });
      } else {
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log("Position data:", position);
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        });
      }
    };
    fetchData();
  }, [lat, lon]);
  console.log(weatherdata);

  return (
    <div>
      <h1>Local Weather🌤</h1>

      {weatherdata.coord ? (
        <div>
          <SearchCity
            name={weatherdata.name}
            lon={weatherdata.coord.lon}
            lat={weatherdata.coord.lat}
          />
        </div>
      ) : (
        <div>
          <Loading show={isLoading} />
        </div>
      )}
    </div>
  );
}

export default LocalW;

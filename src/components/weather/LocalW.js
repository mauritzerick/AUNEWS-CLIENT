//this local weather for homepage display

import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import SearchCity from "./cityWeather/SearchCity";

const baseUrl = "https://api.openweathermap.org/data/2.5";
const apiKey = "d3e238ced3e15356c1c6acb557b2bc2f";

function LocalW() {
  const [lat, setLat] = useState("");
  const [long, setLon] = useState("");
  const [weatherdata, setWeatherData] = useState([]);
  let isLoading = true;

  useEffect(() => {
    const fetchData = async () => {
      console.log("lat and long values: ", lat, long);
      if (lat.length != 0 && long.length != 0) {
        await fetch(
          `${baseUrl}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`
        )
          .then((res) => res.json())
          .then((result) => {
            setWeatherData(result);
            isLoading = false;
            console.log(result);
          });
      } else {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            console.log("Position data:", position);
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
          },
          function (error) {
            if (error.code == error.PERMISSION_DENIED) {
              setLat("-33.8679");
              setLon("151.2093");
              fetchData();
            }
          }
        );
      }
    };
    fetchData();
  }, [lat, long]);

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

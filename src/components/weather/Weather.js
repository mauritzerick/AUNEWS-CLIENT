import axios from "axios";
import React, { useState, useEffect } from "react";
import Sydney from "./cityWeather/Sydney";
import Melbourne from "./cityWeather/Melbourne";
import Canberra from "./cityWeather/Canberra";
import Adelaide from "./cityWeather/Adelaide";
import Brisbane from "./cityWeather/Brisbane";
import Darwin from "./cityWeather/Darwin";
import Perth from "./cityWeather/Perth";
import Hobart from "./cityWeather/Hobart";
import SearchCity from "./cityWeather/SearchCity";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "d3e238ced3e15356c1c6acb557b2bc2f";

function Weather() {
  const [weatherdata, setWeatherData] = useState(null);
  const [input, setInput] = useState("a");
  //

  //serach by name
  const url1 = baseUrl + `q=${input},au&appid=${apiKey}`;

  //search by postcode
  const url2 = baseUrl + `zip=${input},au&appid=${apiKey}`;

  // console.log(input);

  let url = "";
  if (parseInt(input) == input) {
    url = url2;
    console.log(typeof parseInt(input));
  } else {
    url = url1;
    console.log(typeof parseInt(input));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        const data = response.data;
        setWeatherData(data);
      })
      .catch((error) => console.error(` Error:${error}`));

    console.log(input);
    console.log(weatherdata);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Please enter the place or local suburb"
          required
        />
        <button id="search" onClick={() => getData()}>
          Search
        </button>
      </form>
      {weatherdata !== null ? (
        <div>
          <SearchCity
            name={weatherdata.name}
            lon={weatherdata.coord.lon}
            lat={weatherdata.coord.lat}
          />
        </div>
      ) : (
        <div>
          <table>
            <tr>
              <td>
                <Sydney />
              </td>
              <td>
                <Melbourne />
              </td>
              <td>
                <Canberra />
              </td>
              <td>
                <Adelaide />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <Brisbane />
              </td>
              <td>
                {" "}
                <Darwin />
              </td>
              <td>
                {" "}
                <Hobart />
              </td>
              <td>
                {" "}
                <Perth />
              </td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
}

export default Weather;

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
import "./Weather.css";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "d3e238ced3e15356c1c6acb557b2bc2f";

function Weather() {
  const [weatherdata, setWeatherData] = useState(null);
  const [input, setInput] = useState("");
  //

  //serach by name
  const url1 = baseUrl + `q=${input},au&appid=${apiKey}`;

  //search by postcode
  const url2 = baseUrl + `zip=${input},au&appid=${apiKey}`;

  // console.log(input);

  let url = "";
  if (parseInt(input) == input) {
    url = url2;
  } else if (input !== "") {
    url = url1;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getData();
  }, []);

  // get data
  const getData = () => {
    if (input == "") {
      return (
        <div className="cityweather">
          <table>
            <tr>
              <td>
                <Darwin />
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
                <Brisbane />
              </td>
              <td>
                <Sydney />
              </td>
              <td>
                <Hobart />
              </td>
              <td>
                <Perth />
              </td>
            </tr>
          </table>
        </div>
      );
    }

    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setWeatherData(data);
      })
      .catch((error) => alert("Cannot find such place, please search again"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="searchbox">
        <input
          type="search"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Please enter the local Suburb or Postcode"
          className="searchinput"
          required
        />
        <button
          id="search"
          className="serachbutton"
          onClick={() => getData()}
        ></button>
      </form>
      {weatherdata !== null ? (
        <div className="searchcity">
          <SearchCity
            name={weatherdata.name}
            lon={weatherdata.coord.lon}
            lat={weatherdata.coord.lat}
          />
        </div>
      ) : (
        <div className="cityweather">
          <table>
            <tr>
              <td>
                <Darwin />
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
                <Brisbane />
              </td>
              <td>
                <Sydney />
              </td>
              <td>
                <Hobart />
              </td>
              <td>
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

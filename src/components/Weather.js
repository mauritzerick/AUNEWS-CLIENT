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
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "d3e238ced3e15356c1c6acb557b2bc2f";

//FIXME: search cityname/postcode at same time

//serach by name
const getWeatherDataCN = async (cityname) => {
  try {
    const { data } = await axios.get(
      baseUrl + `q=${cityname}au&appid=${apiKey}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

//search by postcode
const getWeatherDataPC = async (postcode) => {
  try {
    const { data } = await axios.get(
      baseUrl + `zip=${postcode},au&appid=${apiKey}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

function Weather() {
  const [weatherdata, setWeatherData] = useState(null);
  const [input, setCity] = useState("a");

  const getData = async () => {
    try {
      // const data = await getWeatherDataCN(input + ",");
      const data = await getWeatherDataPC(parseInt(input));
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log("input:", input);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Please enter the place"
          required
        />
        <button id="search" onClick={() => getData()}>
          Search
        </button>
      </form>
      {weatherdata !== null && input !== null ? (
        <div>
          <SearchCity
            name={weatherdata.name}
            lon={weatherdata.coord.lon}
            lat={weatherdata.coord.lat}
          />
        </div>
      ) : (
        <div>
          <Container>
            <Row>
              <Col>
                <Sydney />
              </Col>
              <Col>
                <Melbourne />
              </Col>
              <Col>
                <Canberra />
              </Col>
              <Col>
                <Adelaide />
              </Col>
            </Row>
            <Row>
              <Col>
                <Brisbane />
              </Col>
              <Col>
                <Darwin />
              </Col>
              <Col>
                <Hobart />
              </Col>
              <Col>
                <Perth />
              </Col>
            </Row>
          </Container>

          {/* <Sydney />
          <Melbourne />
          <Canberra />
          <Adelaide />
          <Brisbane />
          <Darwin />
          <Hobart />
          <Perth /> */}
        </div>
      )}
    </div>
  );
}

export default Weather;

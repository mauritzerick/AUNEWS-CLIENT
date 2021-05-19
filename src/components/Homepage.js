import React, { Component } from "react"; // destructuring
import Crypto from "./Crypto";
import News from "./News";
import "./Homepage.css";
import LocalW from "./cityWeather/LocalW";

class Homepage extends Component {
  render() {
    return (
      <div class="home">
        <div class="homeDiv">
          <div class="div1">
            <News props={"General"} />
          </div>
          <div class="div2">
            <div class="div3">
              <LocalW />
            </div>
            <div class="div3">
              <Crypto />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage; // remember to export

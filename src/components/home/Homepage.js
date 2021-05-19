import React, { Component } from "react"; // destructuring
import Crypto from "../crypto/Crypto";
import News from "../news/News";
import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div class="home">
        <div class="homeDiv">
          <div class="div1" >
              <News props ={"General"}/>
          </div>
          <div class="div2">
            <div class="div3" ><Crypto home={true}/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage; // remember to export

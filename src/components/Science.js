import React, { Component } from "react"; // destructuring
import axios from 'axios';

class Science extends Component {
  constructor() {
    super()
    this.state ={

    };
    this.scienceInfo = this.scienceInfo.bind(this)
  }

  scienceInfo() {
    const scienceURL = "http://newsapi.org/v2/top-headlines?country=au&category=science&apikey=a598dbb0d4a24ccf8c3a54a403b3e1ce"

  });
}
  render() {
    return (
      <div>
      <h1>Science News!</h1>;
      </div>
    );
  }
}

export default Science; // remember to export

import React, { Component } from "react"; // destructuring
import axios from 'axios';

class Science extends Component {
  constructor() {
    super()
    this.state ={

    };
    this.scienceInfo = this.scienceInfo.bind(this)
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

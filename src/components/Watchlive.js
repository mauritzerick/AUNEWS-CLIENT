import React, { Component } from "react"; // destructuring

class Watchlive extends Component {
  render() {
    return (
      <div>
        <h1>News Channel</h1>
        <div style={{ margin: "20px" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W1ilCy6XrmI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Watchlive; // remember to export

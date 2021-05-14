import React from "react";
import Homepage from "./Homepage.js";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation1 from "./Navigation1";
import Navigation2 from "./Navigation2";
import General from "./General";
import Business from "./Business";
import Sports from "./Sports";
import Entertainment from "./Entertainment";
import Weather from "./Weather";
import Science from "./Science";

function App() {
  return (
    <div className="Home">
      <Router>
        <Homepage />

        <Navigation1 />
        <Navigation2 />

        <Switch>
          <Route exact path="/general">
            <General />
          </Route>

          <Route exact path="/business">
            <Business />
          </Route>

          <Route exact path="/sports">
            <Sports />
          </Route>

          <Route exact path="/entertainment">
            <Entertainment />
          </Route>

          <Route exact path="/weather">
            <Weather />
          </Route>

          <Route exact path="/science">
            <Science />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

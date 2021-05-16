import React from "react";
import Homepage from "./Homepage.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation1 from "./Navigation1";
import Navigation2 from "./Navigation2";
import General from "./General";
import Business from "./Business";
import Sports from "./Sports";
import Entertainment from "./Entertainment";
import Weather from "./Weather";
import Science from "./Science";
import Crypto from "./Crypto";
import Justin from "./Justin";
import Search from "./Search";


function App() {
  return (
    <div className="Home">
      <Router>
        <Navigation1 />

        <Navigation2 />

        <Homepage />

        <Switch>

          <Route exact path="/search">
            <Search />
          </Route>

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

          <Route exact path="/crypto">
            <Crypto />
          </Route>

          <Route exact path="/justin">
            <Justin />
          </Route>

        </Switch>
      </Router>
    </div>



  );



}

export default App;

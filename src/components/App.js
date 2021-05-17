import React from "react";
import Homepage from "./Homepage.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation1 from "./Navigation1";
import Navigation2 from "./Navigation2";
import Weather from "./Weather";
import Crypto from "./Crypto";
import Justin from "./Justin";
import Search from "./Search";
import News from "./News"

function App() {
  return (
    <div className="Home">
      <Router>
        <Navigation1 />

        <Navigation2 />

        <Homepage />

        <Switch>
          <Route exact path="/news/:category" component={News}/>

          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/weather">
            <Weather />
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

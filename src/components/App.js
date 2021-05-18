import React from "react";
import Homepage from "./Homepage.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation1 from "./Navigation1";
import Navigation2 from "./Navigation2";
import Weather from "./Weather";
import Crypto from "./Crypto";

import "../chart/chart.css";
// import Apps from "../chart/Apps"
// import Header from "../chart/comps/Header"
import CoinSummaryPage from "../chart/pages/CoinSummaryPage";
import CoinDetailPage from "../chart/pages/CoinDetailPage";
import { WatchListContextProvider } from "../chart/context/watchListContext";
import Justin from "./Justin";
import Search from "./Search";
import Weathernav from "./Weathernav";

import News from "./News";

function App() {
  return (
    <div className="Home">
      <Router>
        <Navigation1 />

        <Navigation2 />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/news/:category" component={News} />

          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/weather">
            <Weather />
          </Route>

          <Route exact path="/localweather">
            <Weathernav />
          </Route>

          <Route exact path="/crypto">
            <Crypto />
          </Route>

          {/* <Route exact path="/chart">
            <Apps />
          </Route> */}

          <WatchListContextProvider>
            {/* <Header /> */}
            <Route exact path="/chart" component={CoinSummaryPage} />
            <Route path="/coins/:id" component={CoinDetailPage} />
          </WatchListContextProvider>

          <Route exact path="/justin">
            <Justin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

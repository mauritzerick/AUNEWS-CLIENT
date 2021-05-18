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
import CoinSummaryPage from "../chart/pages/CoinSummaryPage"
import CoinDetailPage from "../chart/pages/CoinDetailPage"
import { WatchListContextProvider } from "../chart/context/watchListContext";
import Justin from "./Justin";
import Search from "./Search";
import Weathernav from "./Weathernav";

<<<<<<< HEAD
import { prettyDOM } from "@testing-library/dom";
=======
import News from "./News"

>>>>>>> a09a560c9df8bbfd6a9f1e44f273f03f54f28c3b

function App() {
  return (
    <div className="Home">
      <Router>
        <Navigation1 />

        <Navigation2 />



        <Switch>
<<<<<<< HEAD
=======
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/news/:category" component={News}/>

>>>>>>> a09a560c9df8bbfd6a9f1e44f273f03f54f28c3b
          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/weather">
            <Weather />
          </Route>

          <Route exact path="/crypto">
            <Crypto />
          </Route>

          {/* <Route exact path="/chart">
            <Apps />
          </Route> */}

          <WatchListContextProvider>

<<<<<<< HEAD
          <Route exact path="/weathernav">
            <Weathernav />
          </Route>

          <Route exact path="/weather">
            <Weather />
          </Route>
=======
            {/* <Header /> */}
            <Route exact path="/chart" component={CoinSummaryPage} />
            <Route path="/coins/:id" component={CoinDetailPage} />
>>>>>>> a09a560c9df8bbfd6a9f1e44f273f03f54f28c3b

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

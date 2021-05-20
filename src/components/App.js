import React from "react";
import Homepage from "./home/Homepage.js";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation1 from "./nav/Navigation1";
import Navigation2 from "./nav/Navigation2";
import Weather from "./weather/Weather";
import Crypto from "./crypto/Crypto";

// import Apps from "../chart/Apps"
// import Header from "../chart/comps/Header"
import CoinSummaryPage from "../chart/pages/CoinSummaryPage";
import CoinDetailPage from "../chart/pages/CoinDetailPage";
import { WatchListContextProvider } from "../chart/context/watchListContext";
import Justin from "./news/Justin";
import Watchlive from "./Watchlive";
import Search from "./news/Search";
import Weathernav from "./weather/Weathernav";
import Footer from "./footer/Footer";
import News from "./news/News";

function App() {
  return (
    <div className="Home">
      <Router>
        <Navigation1 />
        <Navigation2 />

        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route exact path="/news/:category" component={News} />

          <Route exact path="/search" component={Search} />

          <Route exact path="/weather" component={Weather} />

          <Route exact path="/localweather" component={Weathernav} />

          <Route exact path="/crypto" component={Crypto} />

          <Route exact path="/justin" component={Justin} />

          <Route exact path="/watchlive" component={Watchlive} />
          <Watchlive />

          <WatchListContextProvider>
            <Route exact path="/chart" component={CoinSummaryPage} />
            <Route path="/coins/:id" component={CoinDetailPage} />
          </WatchListContextProvider>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

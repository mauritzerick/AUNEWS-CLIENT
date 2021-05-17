import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "../pages/CoinDetailPage";
import CoinSummaryPage from "../pages/CoinSummaryPage";
import Header from "./Header";
import { WatchListContextProvider } from "../context/watchListContext";

const Chartpage = () => {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={CoinSummaryPage} />
          <Route path="/coins/:id" component={CoinDetailPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default Chartpage;

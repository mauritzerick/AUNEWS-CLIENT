import React from "react";
// import "../chart.css";
import AddCoin from "../comps/AddCoin";
import CoinList from "../comps/CoinList";

const CoinSummaryPage = () => {
  return (
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
      <AddCoin />
      <CoinList />
    </div>
  );
};

export default CoinSummaryPage;

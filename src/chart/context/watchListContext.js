import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  console.log();
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList")?.split(",") || [
      "bitcoin",
      "ethereum",
      "ripple",
      "tether",
      "bitcoin-cash",
      "litecoin",
      "eos",
      "okb",
      "tezos",
      "cardano"
    ]
  );

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  const addCoin = (coin) => {
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin]);
    }
  };

  return (
    <div>
      <h3>Charts for crypto currency</h3>
      <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
        {props.children}
      </WatchListContext.Provider>
    </div>

  );
};

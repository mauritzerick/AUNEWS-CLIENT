import React, {useState, useEffect} from 'react';
import axios from 'axios'

import DynamicTable from './DynamicTable';
import CryptoMiniTable from "./CryptoMiniTable";
import CoinSummaryPage from "../../chart/pages/CoinSummaryPage";
import CoinDetailPage from "../../chart/pages/CoinDetailPage";
import { WatchListContextProvider } from "../../chart/context/watchListContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

function Crypto(props) {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      console.log(res.data);
      res.data.map((coin, i) => {
        if(coin['price_change_percentage_24h'] < 0){
          coin["className"] = "red";
        }else{
          coin["className"] = "green";
        }
      });
      console.log("after Class name added", res.data);
      setCoins(res.data);

    }).catch(error => alert('There is an error'));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
    {
      (!props.home ?
        (<div className="coin-app">
          <div className="coin-search">
            <h1 className="coin-text"> Crypto currency</h1>
            <form>
              <input
                type="text"
                placeholder="Search"
                className="coin-input"
                onChange={handleChange}
              />
            </form>
          </div>
          <DynamicTable coins={filteredCoins} />
            <Router>
          <Switch>
            <WatchListContextProvider>
              <Route exact path="/crypto" component={CoinSummaryPage} />
              <Route path="/coins/:id" component={CoinDetailPage} />
            </WatchListContextProvider>
          </Switch>
        </Router>
        </div>) :
        (<div>
          <h1> Crypto Currency </h1>
          <CryptoMiniTable coins={filteredCoins}/>
        </div>
      ))
    }
    </div>


  );


}


export default Crypto;

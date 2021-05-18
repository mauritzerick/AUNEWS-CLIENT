import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Coin from './Coin';
import DynamicTable from './DynamicTable';

function Crypto() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      console.log(res.data);
      res.data.map((coin, i) => {
        if(coin['price_change_percentage_24h'] < 0){
          coin["className"] = "Red";
        }else{
          coin["className"] = "Green";
        }
      });
      console.log("after Class name added", res.data);
      setCoins(res.data);

    }).catch(error => alert('There is an error'));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )


  return (
    <div className='coin-app'>
      <div className="coin-search">
        <h1 className="coin-text">To the Moon 🚀</h1>
          <form>
            <input type="text" placeholder="Search"
             className="coin-input" onChange={handleChange}/>
          </form>
      </div>
      <DynamicTable coins={filteredCoins}/>
    </div>
  );
}

export default Crypto;

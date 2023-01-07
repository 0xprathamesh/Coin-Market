import React, { useState, useEffect } from "react";

import axios from "axios";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Coin from "./routes/Coin";




function App() {

  const [coins, setCoins] = useState([]);
 

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=200&page=1&sparkline=true"

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    
      console.log(response.data[0]);
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <BrowserRouter>
      <Navbar />
    
      <Routes>
        <Route exact path='/' element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
        
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

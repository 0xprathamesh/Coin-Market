import axios from 'axios'
import { useParams,Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

import './Coin.css';
import DOMPurify from 'dompurify';
const Coin = () => {
  const params = useParams()
  const [coin, setCoin] = useState({})
  
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?sparkline=true`



  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data)
    }).catch((error) => {
      console.log(error);
    })
  }, [url]);

  return (

    <div className='coin-div'>
   <Link to='/' className='btn-primary'>
         🔙 back home
        </Link>
      <div className='img-div'>
        <img className='coin-img' src={coin.image?.large} alt='/' />
        <div className='name-price'>
          <p className='coinname'>{coin?.name}</p>
          <p>({coin.symbol?.toUpperCase()} / INR)</p>
        </div>
      </div>

      <div className='grid'>
        <div>
          <div className='flex'>
            {coin.market_data?.current_price ? (
              <p className='price'>₹{coin.market_data.current_price.inr.toLocaleString()}</p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color='teal' />
            </Sparklines>
          </div>
          <div className='market-cap'>
            <div>
              <p className='m-cap'>Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.market_cap.inr.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='v-cap'>Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.total_volume.inr.toLocaleString()}</p>
              ) : null}
            </div>
          </div>

          <div className='high-low'>
            <div>
              <p className='m-cap'>24h High</p>
              {coin.market_data?.high_24h ? (
                <p>${coin.market_data.high_24h.inr.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='m-cap'>24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>${coin.market_data.low_24h.inr.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <p className='m-stats'>Market Stats</p>
          <div className='high-low'>
            <div>
              <p className='m-cap'>Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className='m-cap'>Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p className='m-cap'>Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div className='high-low'>
            <div>
              <p className='m-cap'>Price Change (24h)</p>
              {coin.market_data ? (
                <p>
                {coin.market_data.price_change_percentage_24h > 0 ? (<p className='profit'>+{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>) : (<p className='red'>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>)}
                </p>
              ) : null}
            </div>
            <div>
              <p className='m-cap'>Price Change (7d)</p>
              {coin.market_data ? (
                <p>
                {coin.market_data.price_change_percentage_7d > 0 ? (<p className='profit'>+{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>) : (<p className='red'>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>)}
                </p>
              ) : null}
            </div>
            <div>
              <p className='m-cap'>Price Change (14d)</p>
              {coin.market_data ? (
                <p>
                {coin.market_data.price_change_percentage_14d > 0 ? (<p className='profit'>+{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>) : (<p className='red'>{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>)}
                </p>
              ) : null}
            </div>
          </div>
          <div className='high-low'>
            <div>
              <p className='m-cap'>Price Change (30d)</p>
              {coin.market_data ? (
                <p>
                {coin.market_data.price_change_percentage_30d > 0 ? (<p className='profit'>+{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>) : (<p className='red'>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>)}
                </p>
              ) : null}
            </div>
            <div>
              <p className='m-cap'>Price Change (60d)</p>
              {coin.market_data ? (
                <p>
                {coin.market_data.price_change_percentage_60d > 0 ? (<p className='profit'>+{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>) : (<p className='red'>{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>)}
                </p>
              ) : null}
            </div>
            <div>
              <p className='m-cap'>Price Change (1y)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_1y > 0 ? (<p className='profit'>+{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>) : (<p className='red'>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>)}</p>
              ) : null}
            </div>
          </div>
          
        </div>
      </div>

      {/* Description */}
      <div className='description'>
        <p className='coin-info'>About</p>
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}} ></p>
      </div>
    </div>
  );
}
export default Coin
// Coin Market Shows the crytocurrencies that are gaining the Hike on particular day..
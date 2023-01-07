import React from 'react'

import './Coins.css'
const CoinItem = (props) => {
 
  return (
   
    <div className='coin-row'>
          <p>{props.coins.market_cap_rank}</p>
          <div className="img-symbol">
              <img src={props.coins.image} className='img' alt="coin" />
        <p className='size'>{props.coins.symbol.toUpperCase()}
          <br />
         {props.coins.name}</p>
</div>
          <p>₹ {props.coins.current_price.toLocaleString()}</p>
      <p>
        {props.coins.price_change_percentage_24h > 0 ? (<p className='profit'>+{props.coins.price_change_percentage_24h}%</p>) : (<p className='red'>{props.coins.price_change_percentage_24h}%</p>)}
        
        </p>
          <p className="hide-mobile">₹ {props.coins.total_volume.toLocaleString()} </p>
      <p className="hide-mobile">₹ {props.coins.market_cap.toLocaleString()}</p>
      
      
       
      
      
      
      </div>
  )
}

export default CoinItem

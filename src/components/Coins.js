import React,{useState} from 'react'
import CoinItem from './CoinItem'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'
import "./Coins.css"




const Coins = (props) => {
const [searchText, setSearchText] = useState("")
  return (
    
    <div className='container'>
      <div className='rounded-div'>
        <div className='search'>
         
          <form className='search-form'>
            <div className="form-control">
         
              <input type="text" placeholder='Search Coin' onChange={(e) => setSearchText(e.target.value)} />
              </div>
          </form>
        </div>
      </div>
          <div></div>
              <div className="heading">
                  <p>id</p>
                  <p className='coin-name'>Coins</p>
                  <p>Price</p>
                  <p>24h</p>
                  <p className='hide-mobile'>Volume</p>
        <p className='hide-mobile'>Market Cap</p>
    
      
              </div>

        {props.coins.filter((value) => {
          if (searchText === '') {
            return value
          } else if (
            value.name.toLowerCase().includes(searchText.toLowerCase())
          ){
            return value;
          }
        }).map((coins) => {
                return (
                  <Link to={`/coin/${coins.id}`} element={<Coin />}  key={coins.id} >
                  <CoinItem coins={coins}/>
                    </Link>
       
                  )
})}
     
    </div>
  )
}

export default Coins

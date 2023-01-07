import React from 'react'
// import {MenuItem, Select} from '@mui/material'
import { FaBitcoin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './Navbar.css'
const Navbar = () => {

  return (
    <Link to='/'>
          <div className="navbar">
              <FaBitcoin className='icon' />
        <h1> Coin <span className='gold'>Market</span></h1>
        
      </div>
      {/* <Select variant='outlined' className='select' style={{
          width: 100,
          height: 40,
       marginLeft: 650,
        border: "1px solid white",
        background: "#ffff",
        
        ['@media (max-width:720px)']: {
         display: "none"
        }
        }}>
          <MenuItem value={'INR'}>INR</MenuItem>
          <MenuItem value={'USD'}>USD</MenuItem>
        </Select> */}
    </Link>
  )
}

export default Navbar

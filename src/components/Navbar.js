import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './Navbar.css'
import {Link} from 'react-router-dom'
import UserInfo from './UserInfo'
import { Profile } from './Profile';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <div className='navbar'>
            <FaCoins className='icon'/>
            <h1> Coin<span className='purple'>Search</span></h1>
        </div> 
    </Link>
    <Link to='/userInfo'>Login</Link>
    </nav>
    
  )
}

export default Navbar
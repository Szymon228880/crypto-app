import React from 'react'
import { useAuth } from './auth'
import {FaCoins} from 'react-icons/fa'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import { Profile } from './Profile';


const Navbar = () => {

  const navLinkStyles =({ isActive }) =>{
      return{
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive? 'none' : 'underline'
      }
  }
  const auth = useAuth()
  return (
    <nav>
      <NavLink style={navLinkStyles} to='/'>
        <div className='navbar'>
            <FaCoins className='icon'/>
            <h1> Coin<span className='purple'>Search</span></h1>
        </div> 
    </NavLink>
    <NavLink style={navLinkStyles} to='/profile'>
      <h1 className='bar'>Profile</h1>
      </NavLink>
    {
      !auth.user && (
        <NavLink style={navLinkStyles} to='/login'>
          <h1 className='bar'>Login</h1>
        </NavLink>
      )
    }
    
    </nav>
    
  )
}

export default Navbar
import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { AuthProvider } from './components/auth';
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { RequireAuth} from './components/RequireAuth'
import { Register } from './components/Register';

function App() {

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  const [coins, setCoins] = useState([])
  useEffect(()=>{ //wywolywanie tego co jest w srodku
    axios.get(url).then((response)=>{
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <AuthProvider>
    <Navbar></Navbar>
    <Routes> 
      <Route path='/' element = {<Coins coins ={coins}/> }/>
      <Route path='/coin' element = {<Coin/>}>
        <Route path=':coinId' element={<Coin/>}/>
      </Route>
      <Route path='/profile' element = {<RequireAuth><Profile/></RequireAuth>}></Route>
      <Route path='/login' element = {<Login/>}></Route>
      <Route path='/register' element ={<Register></Register>}></Route>
    </Routes>
     
    </AuthProvider>
  );
}

export default App;

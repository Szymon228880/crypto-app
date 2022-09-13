import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
import { useState } from 'react'

export const Profile = () => {
  const auth = useAuth()
  const [data,setData] = useState(null)
  const [print,setPrint] = useState(false)
const navigate = useNavigate()

  const handleLogout = () =>{
    auth.logout()
    navigate('/')
  }
  function getData(val){
    setData(val.target.val)
    console.warn(val.target.value)
  }
  return (
    <div>
    <div>Welcome {auth.user}
    

        <div class="grid items-center justify-center">
                <div class="shadow-lg rounded-2xl w-auto p-4 bg-white relative overflow-hidden m-11 ">
            {/* <img alt="moto" src="/images/object/1.png" class="absolute -right-20 -bottom-8 h-40 w-40 mb-4"/> */}
            <div class="w-4/6">
                <p class="text-gray-800 text-3xl px-14 font-medium mb-2">
                    Buy 
                    
                </p>
                <p class="text-gray-400 text-xs">
                    BTC
                </p>
                <div class=" relative ">
                <input type="text" onChange={getData} id="rounded-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="for amount"/>
                </div>

                <p class="text-indigo-500 text-2xl px-14 font-medium">
                    USD
                </p>
                <div class=" relative ">
                </div>
                
                <button onClick={()=>setPrint(true)} type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                 Buy
                </button>

            </div>
            </div> 
        </div>
        </div>
        <div class="grid items-center justify-center">
                <div class="shadow-lg rounded-2xl w-auto p-4 bg-white relative overflow-hidden ">
            {/* <img alt="moto" src="/images/object/1.png" class="absolute -right-20 -bottom-8 h-40 w-40 mb-4"/> */}
            <div class="w-4/6">
                <p class="text-gray-800 text-3xl px-14 font-medium mb-2">
                    My Porfolio
                    
                </p>
                <p class="text-gray-800 text-3xl px-14 font-medium mb-2">
                    Wallet
                    
                </p>
                <p class="text-gray-400 text-xl">
                    BTC
                </p>
                <div>
                 {
                    
                    <p class="text-purple-500 text-2xl px-14 font-medium">
                        0.1
                    </p>
                    
                 }
                <div/>
                
            </div>
            </div> 
        </div>
    <button onClick={handleLogout}>Logout</button>
    </div>
    </div>
  )
}

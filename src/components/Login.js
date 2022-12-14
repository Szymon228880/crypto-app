import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
import './Login.css'

export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const url = 'http://localhost:8080/api/login'
    const handleLogin = (e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log({
            username: data.get('username'),
            password: data.get("password"),
        });
        axios.post(url, new URLSearchParams({
            username: data.get('username'),
            password: data.get('password')
        })).then(res => console.log(res.data))
        // auth.login(user)
        navigate('/')


        const navLinkStyles =({ isActive }) =>{
            return{
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: isActive? 'none' : 'underline'
            }
        }
    }
  return (
    
        // <h1>SIGN IN</h1>
        <div>
        <form onSubmit={handleLogin}>
            <section class="text-gray-600 body-font  bg-cover bg-img h-screen">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-6">
            <h1 class="sm:text-7xl text-4xl font-extrabold title-font mb-8 text-violet-800 tracking-widest">
              LOGIN
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto ">
            <div class="grid items-center justify-center">
              <div class="p-4  w-2/2">
                <div class="relative">
                  <label
                    for="name"
                    class="leading-7 text-1xl font-semibold text-gray-600"
                  >
                    Username:{''}
                  </label>
                  <input 
                    type='text' name='username'
                    class="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-4 w-2/2">
                <div class="relative">
                  <label
                    for="name"
                    class="leading-7 text-1xl font-semibold text-gray-600"
                  >
                    Password:{''}
                  </label>
                  <input
                    type='password' name="password"
                    class="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className=" flex justify-center gap-8 pt-5">
                <button
                  type='subbmit'
                  class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring "
                 
                >
                  <span class="absolute inset-0 border border-stone-600 group-active:border-stone-500"></span>
                  <span class="tracking-widest text-2xl block px-10 py-3 transition-transform bg-stone-600 border border-stone-600 active:border-stone-500 active:bg-stone-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                    Sign in
                  </span>
                </button>
              </div>
              <button
                onClick={() => navigate("/register")}>
                Sign up</button>
            </div>
          </div>
        </div>
      </section>
        </form>
                <div class="grid items-center justify-center">
                <div class="shadow-lg rounded-2xl w-auto p-4 bg-white relative overflow-hidden ">
            {/* <img alt="moto" src="/images/object/1.png" class="absolute -right-20 -bottom-8 h-40 w-40 mb-4"/> */}
            <div class="w-4/6">
                <p class="text-gray-800 text-3xl px-14 font-medium mb-2">
                    My Porfolio
                    
                </p>
                <p class="text-gray-400 text-xs">
                    BTC
                </p>
                <p class="text-indigo-500 text-2xl px-14 font-medium">
                    $399
                </p>
            </div>
            </div> 
        </div>

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
                <input type="text" id="rounded-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="amount"/>
                </div>

                <p class="text-indigo-500 text-2xl px-14 font-medium">
                    USD
                </p>
                <div class=" relative ">
                <input type="text" id="rounded-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="for amount"/>
                </div>
                
                <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                 Buy
                </button>

            </div>
            </div> 
        </div>
        </div>
            
    
  )
}

import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

export const Register = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const url = 'http://localhost:8080/api/login'
    const handleLogin = (e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log({
            name: data.get("name"),
            username: data.get('username'),
            password: data.get("password"),
        });
        axios.post(url, new URLSearchParams({
            name: data.get("name"),
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
        <form onSubmit={handleLogin}>
            <section class="text-gray-600 body-font  bg-cover bg-img h-screen">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-6">
            <h1 class="sm:text-7xl text-4xl font-extrabold title-font mb-8 text-violet-800 tracking-widest">
              REGISTER
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
                    Name:{''}
                  </label>
                  <input 
                    type='text' name='name'
                    class="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
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
              
            </div>
          </div>
        </div>
      </section>
        </form>
           
    
  )
}
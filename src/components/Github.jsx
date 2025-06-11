import React from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from './ContextApi'
const Github = () => {
  const {isDarkTheme}=GlobalContext()
  return (
    <div className='w-full flex flex-col justify-center items-center bg-pink-200 text-center text-black min-h-screen'>
      <div className={`w-98 p-5 absolute top-52 shadow-xl rounded ${isDarkTheme?'bg-gradient-to-r from-slate-200 via-[#d6c6c6] to-[#d488db] transition-all duration-[5s]':'bg-white'} bg-white  tracking-wider capitalize `}>Should you go to my GitHub account?
<div className='m-4 p-4'>
<button className='btn btn-accent m-4'><NavLink to="https://github.com/This-is-pawan" >go</NavLink></button>
<button className='btn btn-accent m-4'><NavLink to="/" >back</NavLink></button>
</div>
      
      </div>
    </div>
  )
}

export default Github

import React from 'react'
import img from '../pages/img/Screenshot_2024-02-06-21-13-00-128_com.whatsapp-edit.jpg'
import  {Link}  from 'react-router-dom'
import { GlobalContext } from '../components/ContextApi'
const Home = () => {
  const {isDarkTheme}=GlobalContext()
  return (
    <div className='w-full h-screen '  >
  <div className=''>
    <div className='flex justify-center items-center p-5  '>
      <img src={img} alt="profile_picture"  className=' w-40 h-40 rounded-full  object-cover center mx-auto border-4 border-white shadow-lg mt-20'/>
    </div>
    <div>
 <h1 className=' w-full text-6xl font-bold max-sm:text-3xl text-center'> 👋🏻 Hey I'm pawan  </h1>
    </div>
     <p className={`text-center my-14 leading-10 capitalize ${isDarkTheme?'text-pink-800':'text-pink-300'}   p-4`}>I am full stack  web developer (MERN_STACK ). i have 1+ year's of experience.  </p>

  </div>
  <div className='flex justify-center ' >
  <button className={`btn border-none ${isDarkTheme?"btn-primary bg-gradient-to-r bg-blue-500 from-slate-900 to-slate-500":"btn-secondary bg-gradient-to-r bg-blue-600 from-red-700 to-blue-500 shadow-2xl"} text-center rounded-full  `} > <Link to='/github'>Go to GitHub Account ➟  </Link> </button>
    </div>
  </div> 
  )
}

export default Home

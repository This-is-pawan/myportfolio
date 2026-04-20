
import React from 'react'
import img from '../pages/img/img.png'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../components/ContextApi'

const Home = () => {
  const { isDarkTheme } = GlobalContext()

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center px-4'>

      {/* Profile Image */}
      <div className='flex justify-center items-center p-5'>
        <img
          src={img}
          alt="profile_picture"
          className='w-40 h-40 rounded-full object-cover mx-auto border-4 border-white shadow-lg'
        />
      </div>

      {/* Heading */}
      <h1 className='w-full text-5xl font-bold max-sm:text-3xl text-center'>
        👋🏻 Hey, I'm Pawan
      </h1>

      {/* Description */}
      <p className={`text-center my-6 leading-8 max-w-xl capitalize 
        ${isDarkTheme ? 'text-pink-800' : 'text-pink-300'}`}>
   Full Stack MERN Developer with over 1 year of experience
Experienced in handling both frontend and backend development.
Skilled in building responsive and scalable web applications using React.js, Node.js, Express, and MongoDB, including REST API integration and user authentication systems.
        
      
      </p>

      {/* Buttons Section */}
      <div className='flex flex-wrap gap-4 justify-center mt-6'>

        {/* GitHub Button */}
        <a
          href="https://github.com/This-is-pawan"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn border-none rounded-full px-6 
          ${isDarkTheme
            ? "bg-gradient-to-r from-slate-900 to-slate-500"
            : "bg-gradient-to-r from-red-700 to-blue-500 shadow-2xl"
          }`}
        >
          GitHub ➟
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/pawan-kumar-7a8054329"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn border-none rounded-full px-6 
          ${isDarkTheme
            ? "bg-gradient-to-r from-blue-900 to-blue-500"
            : "bg-gradient-to-r from-blue-600 to-indigo-500 shadow-2xl"
          }`}
        >
          LinkedIn ➟
        </a>

      

      </div>

    </div>
  )
}

export default Home

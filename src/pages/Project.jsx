import React from "react";
import ias from "../pages/img/ias.png";

import cocktail from "../pages/img/cocktail.png";
import unsplashs from "./img/unsplash.png";
import payroll from './img/payrolldashboard.png'

import profile from "../pages/img/profile.png";
import { GlobalContext } from "../components/ContextApi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = () => {
  const { isDarkTheme } = GlobalContext();

  return (
    <div
      className={`w-full${
        isDarkTheme ? "bg-gradient-to-r from-slate-300 to-gray-800" : ""
      }  p-4 min-h-screen `}
    >
      <div className="  grid grid-cols-2 gap-8 mt-20 max-[600px]:grid-cols-1 gap-4 ">
        <div
          className={`shadow-xl ${
            isDarkTheme ? "bg-pink-950" : "bg-pink-800"
          } rounded-xl  transform transition duration-300 hover:scale-95 shadow-2xl shadow-cyan-800 border-none`}
        >
            
           <img
            src={unsplashs}
            alt="unsplashs"
            title="unsplashs"
            className="rounded-t-xl object-cover border-none"
          /> 
           <h1 className=" text-3xl m-4 hover:text-purple-600  transform transition duration-300 cursor-pointer">
            <Link
              className="flex justify-around items-center"
              to="https://g-authentication-frontend.onrender.com"
            >
              
              <FaGithub />
              <p className="text-[0.9rem] text-blue-900 underline">
                Go to project ➟{" "}
              </p>
            </Link>
          </h1>
         <h1 class="text-white text-center pt-5 pb-5">full stack with using MERN STACK technology</h1>

        </div> 
        {/*  */}
        <div
          className={`shadow-xl ${
            isDarkTheme ? "bg-pink-950" : "bg-pink-800"
          } rounded-xl  transform transition duration-300 hover:scale-95 shadow-2xl shadow-cyan-800 border-none`}
        >
          <img
            src={cocktail}
            alt="ias_course"
            title="cocktail"
            className="rounded-t-xl object-cover border-none"
          />
          <h1 className=" text-3xl m-4 hover:text-purple-600  transform transition duration-300 cursor-pointer">
            <Link
              className="flex justify-around items-center"
              to="https://statuesque-marshmallow-7b3bc6.netlify.app"
            >
              {" "}
              <FaGithub />
              <p className="text-[0.9rem] text-blue-900 underline">
                Go to project ➟{" "}
              </p>
            </Link>
          </h1>
          <h1 class="text-white text-center pt-5 pb-5">React frontend using Routing system</h1>

        </div>
        {/*  */}
        <div
          className={`shadow-xl ${
            isDarkTheme ? "bg-pink-950" : "bg-pink-800"
          } rounded-xl  transform transition duration-300 hover:scale-95 shadow-2xl shadow-cyan-800 border-none`}
        >
          <img
            src={ias}
            alt="ias_course"
            title="course"
            className="rounded-t-xl object-cover border-none"
          />
          <h1 className=" text-3xl m-4 hover:text-purple-600  transform transition duration-300 cursor-pointer ">
            <Link
              className="flex justify-around items-center"
              to="https://launchias.netlify.app"
            >
              {" "}
              <FaGithub />
              <p className="text-[0.9rem] text-blue-900 underline">
                Go to project ➟{" "}
              </p>
            </Link>
          </h1>
          <h1 class="text-white text-center pt-5 pb-5 ">pure HTML5,css3 and js</h1>

        </div>
        {/*  */}
        <div
          className={`shadow-xl ${
            isDarkTheme ? "bg-pink-950" : "bg-pink-800"
          } rounded-xl  transform transition duration-300 hover:scale-95 shadow-2xl shadow-cyan-800 border-none`}
        >
          <img
            src={profile}
            alt="profile"
            title="profile"
            className="rounded-t-xl object-cover border-none"
          />
          <h1 className=" text-3xl m-4 hover:text-purple-600  transform transition duration-300 cursor-pointer ">
            <Link className="flex justify-around items-center" to="/">
            
              <FaGithub />
              <p className="text-[0.9rem] text-blue-900 underline">
                Go to project ➟{" "}
              </p>
            </Link>
          </h1>
          <h1 class="text-white text-center pt-5 pb-5 ">vite react  portfolio</h1>

        </div>
        {/*  */}
        
 <div
          className={`shadow-xl ${
            isDarkTheme ? "bg-pink-950" : "bg-pink-800"
          } rounded-xl  transform transition duration-300 hover:scale-95 shadow-2xl shadow-cyan-800 border-none`}
        >
          <img
            src={payroll}
            alt="payroll"
            title="payroll"
            className="rounded-t-xl object-cover border-none"
          />
          <h1 className=" text-3xl m-4 hover:text-purple-600  transform transition duration-300 cursor-pointer ">
            <Link className="flex justify-around items-center" to="https://payroll-advance.vercel.app/">
            
              <FaGithub />
              <p className="text-[0.9rem] text-blue-900 underline">
                Go to project ➟{" "}
              </p>
            </Link>
          </h1>
          <h1 class="text-white text-center pt-5 pb-5 ">payroll Sass frontend project</h1>

        </div>

        {/*  */}
              
      </div>
    </div>
  );
};

export default Project;

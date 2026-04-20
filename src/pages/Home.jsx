import React from "react";
import img from "../pages/img/img.png";
import { GlobalContext } from "../components/ContextApi";

const Home = () => {
  const { isDarkTheme } = GlobalContext();

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center text-center px-4 ${
        isDarkTheme ? "bg-slate-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Image */}
      <img
        src={img}
        alt="profile"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-blue-500 shadow-lg mb-6"
      />

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">
        👋 Hey, I'm Pawan
      </h1>

      {/* Description */}
      <p className="max-w-xl leading-7 text-sm sm:text-base opacity-90">
        Full Stack MERN Developer with 1+ year experience. Skilled in building
        responsive web apps using React, Node.js, Express, and MongoDB with
        authentication and REST APIs.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href="https://github.com/This-is-pawan"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-gray-800 to-black text-white hover:scale-105 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/pawan-kumar-7a8054329"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Home;

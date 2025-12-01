import React, { useContext } from "react";
import { GlobalContext } from "../components/ContextApi";
import skills from "./Data";
import { timeLine } from "./Data";
const About = () => {
  const { isDarkTheme } = GlobalContext();

  return (
    <div
      className={`w-full min-h-screen py-10 px-4 ${
        isDarkTheme
          ? "bg-gradient-to-r from-slate-900 to-slate-500 text-white"
          : ""
      }`}
    >
      {/* Resume Section */}
      <div className="w-60 mx-auto mb-6 flex justify-center items-center text-center p-7 cursor-pointer shadow-xl bg-slate-100 text-black rounded-xl mt-20">
        <a href="/resume.pdf" download>
        📜 Resume
        </a>
      </div>

      {/* Skills Section */}
      <div
        className={`text-center w-80 mx-auto p-4 shadow-xl  rounded-xl max-w-3xl mb-8 font-semibold text-3xl tracking-wider ${
          isDarkTheme ? "bg-white text-pink-800" : "bg-slate-800 text-pink-100"
        }`}
      >
        Skills
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {skills.map((skillname, index) => (
          <div
            key={index}
            className={`${
              isDarkTheme
                ? "bg-slate-50"
                : "bg-gradient-to-br from-blue-500 to-red-600"
            }  text-black text-center shadow-xl rounded-xl p-3 cursor-pointer hover:bg-slate-300 transition-all 5s text- `}
          >
            <div className="flex justify-around  items-center border p-3 font-bold tracking-widest text-pink-800 ">
              <h3 className={`text-3xl ${isDarkTheme?'text-blue-700':'text-white'}`}>{skillname.icon}</h3>
              <h3>{skillname.skill}</h3>
              <div
                className="bg-gradient-to-br from-blue-500 to-pink-300 radial-progress bg-primary text-primary-content border-4 border-primary"
                style={{ "--value": skillname.value }}
                role="progressbar"
              >
                {skillname.percentage} 
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8  border p-4 border-dotted">
        {timeLine.map((time, index) => {
          return (
            <article className="mt-20" key={index}>
              <span className="underline underline-offset-4 text-3xl">
                {time.year}
              </span>
              <ul className="steps steps-vertical">
                <li
                  className={`step ${
                    isDarkTheme ? "step-primary" : "step-info"
                  }`}
                >
                  {time.learnigone}
                </li>
                <li
                  className={`step ${
                    isDarkTheme ? "step-primary" : "step-info"
                  }`}
                >
                  {time.learnigsecond}
                </li>
              </ul>

              <p className="pra">{time.text}</p>
            </article>
          );
        })}
      </div>

      <div
        className={`text-center w-80 mx-auto p-4 shadow-xl  rounded-xl max-w-3xl m-8 font-semibold text-3xl tracking-wider ${
          isDarkTheme ? "bg-white text-pink-800" : "bg-slate-800 text-pink-100"
        }`}
      >
        Interest
      </div >
      <div className={`${isDarkTheme?'bg-slate-100':'bg-slate-100'}m-auto shadow-xl p-6 sm:flex justify-center items-center w-full`}>
     <div className="bg-slate-400 shadow-lg m-4 p-3 rounded-full text-xl text-purple-950">🎧ྀི♪⋆.✮Music</div>
     <div className="bg-slate-400 shadow-lg m-4 p-3 rounded-full text-xl text-purple-950">👨🏻‍💻Learning</div>
     <div className="bg-slate-400 shadow-lg m-4 p-3 rounded-full text-xl text-purple-950">🚜🌾👨Agriculture</div>
     <div className="bg-slate-400 shadow-lg m-4 p-3 rounded-full text-xl text-purple-950">💪Helps other</div>
     
      </div>
    </div>
  );
};

export default About;

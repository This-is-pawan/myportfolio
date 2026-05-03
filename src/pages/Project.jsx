import React from "react";
import { GlobalContext } from "../components/ContextApi";
import { FaGithub } from "react-icons/fa";

import ias from "../pages/img/ias.png";
import cocktail from "../pages/img/cocktail.png";
import unsplashs from "./img/unsplash.png";
import payroll from "./img/payrolldashboard.png";
import profile from "../pages/img/Screenshot 2026-05-03 121633.png";

const projects = [
  {
    img: unsplashs,
    link: "https://g-authentication-frontend.onrender.com",
    text: "Full Stack MERN Authentication App",
  },
  {
    img: cocktail,
    link: "https://delicate-manatee-661e56.netlify.app",
    text: "React Routing Project",
  },
  {
    img: ias,
    link: "https://statuesque-marshmallow-7b3bc6.netlify.app",
    text: "HTML, CSS, JS Project",
  },
  {
    img: deployment,
    link: "https://frontend-deployment-project.vercel.app",
    text: "React deployment project",
  },
  {
    img: payroll,
    link: "https://payroll-advance.vercel.app/",
    text: "Payroll SaaS Frontend",
  },
];

const Project = () => {
  const { isDarkTheme } = GlobalContext();

  return (
    <div
      className={`min-h-screen py-10 px-4 ${
        isDarkTheme ? "bg-slate-900 text-white" : "bg-slate-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden shadow-lg hover:scale-105 transition ${
              isDarkTheme ? "bg-slate-800" : "bg-white"
            }`}
          >
            <img
              src={p.img}
              alt="project"
              className="w-full h-48 object-cover"
            />

            <div className="p-4 text-center">
              <p className="mb-3">{p.text}</p>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center gap-2 text-blue-500 hover:underline"
              >
                <FaGithub />
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

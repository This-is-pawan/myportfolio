import React from "react";
import { GlobalContext } from "../components/ContextApi";
import skills, { timeLine } from "./Data";

const About = () => {
  const { isDarkTheme } = GlobalContext();

  const container = "max-w-6xl mx-auto px-4";

  return (
    <div
      className={`min-h-screen py-10 ${
        isDarkTheme
          ? "bg-slate-900 text-white"
          : "bg-slate-100 text-gray-800"
      }`}
    >
      {/* Resume */}
      <div className={`${container} flex justify-center mt-10`}>
        <a
          href="/src/pages/PawanJalandhara_InternshalaResume.pdf"
          download
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          📜 Download Resume
        </a>
      </div>

      {/* Skills */}
      <div className={`${container} mt-12`}>
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-5 rounded-xl shadow-lg transition hover:scale-105 ${
                isDarkTheme ? "bg-slate-800" : "bg-white"
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-semibold">{skill.skill}</span>
              </div>

              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div
                  className="bg-gradient-to-r from-blue-500 to-pink-500 h-2 rounded-full"
                  style={{ width: skill.percentage }}
                ></div>
              </div>

              <p className="text-right mt-2 text-sm">{skill.percentage}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className={`${container} mt-16`}>
        {timeLine.map((time, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-2xl font-bold mb-4">{time.year}</h3>

            <ul className="space-y-2">
              <li>✔ {time.learnigone}</li>
              <li>✔ {time.learnigsecond}</li>
            </ul>

            <p className="mt-3 text-sm opacity-80">{time.text}</p>
          </div>
        ))}
      </div>

      {/* Interest */}
      <div className={`${container} mt-12 text-center`}>
        <h2 className="text-3xl font-bold mb-6">Interests</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["🎧 Music", "👨🏻‍💻 Learning", "🚜 Agriculture", "💪 Helping"].map(
            (item, i) => (
              <span
                key={i}
                className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
const skills = [
  { skill: "HTML5",  icon :<FaHtml5/> },
  { skill: "CSS3" , icon : <SiCss3/> },
  { skill: "Javascript",icon:<IoLogoJavascript/>},
  { skill: "Reactjs",  icon: <FaReact/>},
  { skill: "Nodejs", icon:<FaNodeJs/>},
  { skill: "Mongodb" ,icon:<SiMongodb/>},
  { skill: "Express" ,icon:<SiExpress/>},
  { skill: "deployment",icon: <AiOutlineDeploymentUnit/>},
  { skill: "Nextjs",icon: <RiNextjsFill />},
  { skill:"Typescript",icon:<SiTypescript/>},
  { skill:"MySql",icon:<SiMysql/>},
  { skill: "Git" ,icon:<FaGitAlt/>},
  { skill: "Github" ,icon:<FaGithub/>},
];

export default skills;

export const timeLine = [
  {
    text: "I started my web development journey in September and built a strong foundation in frontend technologies.",
    year: "Sep 2024",
    learnigone: "Learning HTML5, CSS3, and basic JavaScript.",
    learnigsecond: "Built small projects to understand layouts and responsiveness.",
  },
  {
    text: "I improved my frontend skills and started working with modern tools and frameworks.",
    year: "Late 2024",
    learnigone: "Learning advanced JavaScript (ES6+) and DOM manipulation.",
    learnigsecond: "Started React.js and built beginner-level projects.",
  },
  {
    text: "I moved into full-stack development and understood how frontend connects with backend systems.",
    year: "2025",
    learnigone: "Learning Node.js, Express, and MongoDB.",
    learnigsecond: "Built full-stack projects like authentication systems and CRUD apps.",
  },
  {
    text: "I became confident in MERN stack development and started building real-world scalable applications.",
    year: "Early 2026",
    learnigone: "Working on API integration, authentication (JWT), and project structuring.",
    learnigsecond: "Improving UI/UX, performance, and deployment skills.",
  },
  {
    text: "By April 2026, I completed my core MERN stack journey and started preparing for interviews and advanced topics.",
    year: "Apr 2026",
    learnigone: "Practicing Data Structures and Algorithms (DSA) in JavaScript.",
    learnigsecond: "Solving problems on platforms like LeetCode and improving problem-solving skills.",
  },
];

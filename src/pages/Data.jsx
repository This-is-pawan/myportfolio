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
  { skill: "HTML5", percentage: "90%", value: 90, icon :<FaHtml5/> },
  { skill: "CSS3", percentage: "90%", value: 89 , icon : <SiCss3/> },
  { skill: "Javascript", percentage: "90%", value: 88 ,icon:<IoLogoJavascript/>},
  { skill: "Reactjs", percentage: "95%", value: 95, icon: <FaReact/>},
  { skill: "Nodejs", percentage: "90%", value: 90 ,icon:<FaNodeJs/>},
  { skill: "Mongodb", percentage: "70%", value: 70 ,icon:<SiMongodb/>},
  { skill: "Express", percentage: "78%", value: 78 ,icon:<SiExpress/>},
  { skill: "deployment", percentage: "70%", value: 70,icon: <AiOutlineDeploymentUnit/>},
  { skill: "Nextjs", percentage: "60%", value: 60,icon: <RiNextjsFill />},
  { skill:"Typescript", percentage: "40%", value: 40,icon:<SiTypescript/>},
  { skill:"MySql", percentage:"60%", value:60,icon:<SiMysql/>},
  { skill: "Git", percentage: "70%", value: 70 ,icon:<FaGitAlt/>},
  { skill: "Github", percentage: "80%", value: 80 ,icon:<FaGithub/>},
];

export default skills;

export const timeLine = [
  {
    text: "I learned the basics this year and understood how it works.",
    year: 2023,
    learnigone: "Learning HTML5 and CSS3.",
    learnigsecond: "Made basic projects.",
  },
  {
    text: "I completed learning the basics and frontend with frameworks like React.js and its hooks and redux toolkit.",
    year: 2024,
    learnigone: "Learning HTML5, CSS3, and JavaScript.",
    learnigsecond:
      "Made a basic project 'LaunchpadIAS' on my GitHub profile and learned about Git and GitHub.",
  },
  {
    text: "I completed my backend learning and built some full-stack projects like authentication and e-commerce.",
    year: 2025,
    learnigone: "Learning Node.js, Express, and MongoDB.",
    learnigsecond: "Learning frontend and backend (MERN Stack).",
  },
];

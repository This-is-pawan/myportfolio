import { Routes, Route, Link,  } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Project from "./pages/Project";
import Github from "./components/Github";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Feedback from "./pages/Feedback";
import { GlobalContext } from "./components/ContextApi";
import { useState } from "react";

const App = () => {
  const [show,setShow]=useState(true)
  const handle=()=>setShow(!show)
 const {isDarkTheme}=GlobalContext()
  return (
    <div>
      <ToastContainer    position="top-right"         
        autoClose={3000}/>
      <div className="w-full fixed z-10">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/github" element={<Github />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <div className={`w-20 h-10 leading-10 m-auto fixed top-60 right-0 shadow-xl  shadow-slate-500 ${isDarkTheme?'bg-black ':'bg-pink-200 '} ${show && <Feedback/>}  text-center rounded-2xl  cursor-pointer translate-x-12 hover:translate-x-0 transition-all 6s`}>
      <Link to='/feedback'><p>feedback</p></Link>
      </div>
    </div>
  );
};

export default App; 
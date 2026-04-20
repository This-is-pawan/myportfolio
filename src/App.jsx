import { Routes, Route, Link,  } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Project from "./pages/Project";
import Github from "./components/Github";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
     
    </div>
  );
};

export default App; 

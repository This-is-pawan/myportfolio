import { RiFeedbackLine } from "react-icons/ri";

import  { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { GlobalContext } from "../components/ContextApi";
const Feedback = () => {
 const navigate=useNavigate()
  const { isDarkTheme,toast } = GlobalContext();
  const [name,setName]=useState()
  const [password,setPassword]=useState()
  const submitHandle=(e)=>{
e.preventDefault();
// console.log(name,password);
if(name && password){
toast.success(`Thanks ${name} For Feedback!`)
navigate('/')
setName('')
setPassword('')
}else{
  toast.error("something short!")
}
  }
  return (
    <div>
      <div className={` w-40 m-auto fixed top-60 right-0 left-0 shadow-xl  shadow-slate-500 ${isDarkTheme?'bg-black ':'bg-pink-200 '}  text-center rounded-2xl  cursor-pointer `}>
              <h2 className="p-2 flex justify-center items-center" ><RiFeedbackLine className="p-1 text-2xl"/>feedback</h2>
              <form onSubmit={submitHandle}  >
                <div className="w-40 ">
                  <div className="w-full p-2">
                    <input type=" text" className="text-[0.8rem] p-1 w-full rounded-full px-2 focus:outline-none" onChange={(e)=>{setName(e.target.value)}} placeholder="Name"/>
                  </div>
                  <div className="w-full p-2" >
                    <input type="email" className="text-[0.8rem] p-1 w-full rounded-full px-2 focus:outline-none" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Email" />
                  </div>
                 <div className="w-full p-2">
  <textarea
    className="text-[0.8rem] p-1 w-full rounded-xl px-2 focus:outline-none"
    onChange={(e) => setPassword(e.target.value)}
    placeholder="write"
    rows={3} 
  />
</div>

                </div>
                <button className={`btn ${isDarkTheme?"bg-pink-200":"bg-pink-800"}  border-none w-16 h-6 mb-4`}>submit</button>
              </form>
            </div>
    </div>
  )
}

export default Feedback

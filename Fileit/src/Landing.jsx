import React from 'react'
import { Link } from "react-router-dom";
import fileitlogo from './home-assets/whitelogo.svg';
import './App.css'
function Landing(){
  return(
    <>
     <div className="flex flex-col hero_section h-[100vh] ">
      
      
      <div className="flex flex-row justify-between item-center px-8 py-4">
      <label className="flex flex-row justify-center items-center">
      <img src={fileitlogo} alt="Logo" className="h-auto"></img>
        <h1 className="font-semibold text-xl mt-2 ml-2">Fileit</h1>
        </label>
       
      </div>
      
      
      <div className="flex flex-col justify-center items-start  pl-5">
      <h1 className=" text-blue-500 text-[6rem] mb-[-20px] head-txt">Securely</h1>
      <h1 className=" text-[6rem] mt-[-30px] head-txt">Send files</h1>
      <p className=" text-[#484848]">Fileit Business is a secure file sharing and storage solution <br/> that employees love and IT admins trust.</p>
      <Link to="/Register" className="my-2 py-2 px-4 w-[300px] text-center  bg-[#2196F3] rounded-md text-white text-[25px]">Get Started</Link>
      <Link to="/Login" className="text-[20px] text-[#484848]" >Already have account <span className="underline text-blue-600">Login</span></Link>
      </div>
    
    </div>
    </>
  )
}

export default Landing

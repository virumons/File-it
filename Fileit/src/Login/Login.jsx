import React, { useState } from 'react'
import  { Form, Link, useNavigate } from "react-router-dom";
import loginback from "./assets/loginback.svg";
import logo from "./assets/logo.svg";
import axios from 'axios';

function App(){

  const Navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [Formdata,Setformdata] = useState({
    email:'',
    password:'',
  })
  const handlechange =(e)=>{  
    const {name,value} = e.target;
    Setformdata({
      ...Formdata, [name] : value
    });
    console.log(Formdata)
   }
   
  const handlesubmit =(e)=>{
    e.preventDefault();
    const errorValues={};

    const numbers = /\d+/;
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(!Formdata.password.length > 8){
      errorValues.password = "Password should be more then 8 character";
    }else if(!specialCharacters.test(Formdata.password)){
      errorValues.password = "Password must contain one special characters";
    }else if(!numbers.test(Formdata.password)){
      errorValues.password = "Password must contain one or more number";
    }
    setErrors(errorValues);
    
    if(Object.keys(errorValues).length === 0){
      try{
      // let Senddata = Object.values(Formdata)
      let Senddata = {...Formdata};
      console.log(Senddata)
      
      
        axios.post("http://localhost:8080/login",Senddata)
        .then(res=>{
          console.log(res.data)
          console.log("succcess")
          if(res.data == "no"){
            alert("Invalid Email or Password")
          }else{
            // const navdata = Object.keys(res.data);
            // console.log(navdata)
            Navigate('/Dashboard',{state:res.data})
          }
        })
        
      }catch(err){
        console.log(err)
      }
    }

  }


  
  return (
    <>
    <div className="flex h-[100vh] bg-white">
      {/*First Div*/}
    <div className="w-1/2  bg-blue-500 flex flex-col justify-between items-center">
      <div className='flex flex-col justify-center items-center mt-4'>
      <img src={logo} alt="Logo" className="h-[60px] "></img>
      <p className="text-white  font-bold text-4xl">Fileit</p>
      <p className="text-white font-bold text-3xl">Welcome back!</p>
      <p className="text-gray-300">Login and start sharing files</p>
      </div>
      <img src={loginback} className="h-[448.5px] max-w-full "/>
    </div>

    {/*second div*/}
    <Link to="/" > <img width="40" height="40" className='ml-[20px] mt-[20px]' src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1"/></Link>
    <div className="w-1/2 p-4 flex flex-col justify-center items-center">
    
      <p className="font-semibold text-xl">Login</p>
    {/* input fields */}
      <form onSubmit={handlesubmit} className='w-[100%]' action='POST'>
      <div className='flex flex-col w-[90%]' >
        <input type="email" 
        id="Email" 
        onChange={handlechange}
        name='email'
        placeholder="Email" 
        className=" border border-gray-300 rounded-lg px-4 py-2 m-2" required></input>
        {errors.email && <span>{errors.email}</span>}
        
        <input type="password" 
        id="password" 
        onChange={handlechange}
        name='password'
        placeholder="Fileit-Password" 
        className=" border border-gray 300 rounded-lg px-4 m-2 py-2" required></input>
        {errors.password && <span>{errors.password}</span>}

        {/* <Link to="/Password" className='text-[#7e7e7e] text-[18px] my-2 text-end'>Forgot password ?</Link> */}
        
        {/*submit button  */}
        <div className='bg-gray-800 w-full flex flex-row justify-center rounded-md py-2 '>
        <button type="submit" className='text-white '>Login</button>
        </div>
        
      </div>
        </form>
     </div>
    </div>
    
  
   </>
  )
}

export default App
        

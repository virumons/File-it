import React, { useState } from 'react'
import register from './assets/register.svg';
import logo from './assets/logo.svg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// import Newuser from './Newuser.jsx';
function Register(){
  const navigate = useNavigate();
  const [Formdata, Setformdata] = useState({
    fullname:'',
    phoneno:'',
    email:'',
    npwd:'',
    waddress:'',
    cpwd:'',
    userid:'',
  })
  const [errors,seterrors] = useState({})
  
 const handlechange =(e)=>{  
  const {name,value} = e.target;
  Setformdata({
    ...Formdata, [name] : value
  });
  console.log(Formdata)
 }



  const HandleSubmit = (e) =>{
    
    e.preventDefault();
    const ValidateErrors = {};

    if(!Formdata.phoneno.trim()){
      ValidateErrors.phoneno = "Phone number is required";
    }else if(!/^\d{10}$/.test(Formdata.phoneno)){
      ValidateErrors.phoneno = "Phone number is invalid";
    }

    const numbers = /\d+/;
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(Formdata.npwd.length < 8){
      ValidateErrors.npwd = "You need a strong password";
    }else if(!specialCharacters.test(Formdata.npwd)){
      ValidateErrors.npwd = "Password must contain one special characters";
    }else if(!numbers.test(Formdata.npwd)){
      ValidateErrors.npwd = "Password must contain one or more number";
    }

    if(Formdata.npwd != Formdata.cpwd){
      ValidateErrors.cpwd = "password not matched !!";
    }

    seterrors(ValidateErrors);

    // genrate unique id
    const min = 100; // Minimum 3-digit number
    const max = 999; // Maximum 3-digit number
    Formdata.userid = Math.floor(Math.random() * (max - min + 1)) + min;
    const uuid = Formdata.userid;

    if(Object.keys(ValidateErrors).length === 0){
      navigate('/Dashboard',{state:uuid});
      // const arrdata = Object.values(Formdata);
      // <Newuser Formdata={Formdata.fullname} />
      // console.log(arrdata);
     let Senddata = {...Formdata}
       axios.post("http://localhost:8080/All_Users", Senddata)
       .then((res)=>console.log("success"))
      // console.log('Response from server:', response.data);
    }
     
  }
    return(
        <>
        <div className="flex h-[100vh] bg-white">
            {/*First div*/}
            <div className="w-1/2  bg-blue-500 flex flex-col justify-between items-center">
                <div className='flex flex-col justify-center items-center mt-5'>
                <img src={logo} alt="Logo" className="h-auto w-16 mb-2"></img>
                <p className="text-white mb-2 font-bold text-4xl">Fileit</p>
                <p className="text-white mb-2 font-bold text-3xl">Welcome!</p>
                <p className="text-gray-300">Create account and start sending files securely</p>
                </div>
                <img src={register} className="h-[400px] max-w-full "></img>
            </div>

            {/*Second div*/}
            <Link to="/" > <img width="40" height="40" className='ml-[20px] mt-[20px]' src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1"/></Link>
            <div className="w-1/2 p-4 flex flex-col justify-center items-center  ">
             
              <p className="font-semibold  text-xl">Create account</p>
            <form className='w-[90%]' onSubmit={HandleSubmit}>
              
              <div className='flex flex-col w-[90%]'>
              <input type="text" name='fullname' onChange={handlechange} placeholder="First Name" 
              className=" border border-gray-300 rounded-lg px-4 py-2  m-2  h-12 "/>

              <input type="text" id="num" name='phoneno' onChange={handlechange} placeholder="Phone-no" 
              className=" border border-gray-300 rounded-lg px-4 py-2 m-2  h-12" required/>
              {errors.phoneno && <span className='text-[#e04646] pl-4'>{errors.phoneno}</span>}

              <input type="email" id="email" placeholder="E-mail" name='email' onChange={handlechange}
              className=" border border-gray-300 rounded-lg px-4 py-2  m-2 h-12" required/>

              <input type="text" id="wallet_addr" placeholder="Wallet address" name='waddress' onChange={handlechange}
              className=" border border-gray-300 rounded-lg px-4 py-2 m-2 h-12" required></input>

              <input type='password' id="pwd" placeholder="New Password" name='npwd' onChange={handlechange}
              className=" border border-gray-300 rounded-lg px-4 py-2 m-2 h-12" required/>
              {errors.npwd && <span className='text-[#e04646] pl-4'>{errors.npwd}</span>}

              <input type="password" id="cpwd" placeholder="Confirm Password" name='cpwd' onChange={handlechange}
              className=" border border-gray-300 rounded-lg px-4 py-2 m-2 h-12"required/>
              {errors.cpwd && <span className='text-[#e04646] pl-4'>{errors.cpwd}</span>}
              </div>

              <div className='bg-gray-800 w-[90%] flex flex-row justify-center rounded-md py-2 '>
              {/* <Link to="/Dashboard" className=" text-white px-2 py-0 rounded-lg">Create account</Link> */}
              <button type="submit" className='text-white '>Create account</button>
              </div>
           
            </form>
        </div>
        </div>
        
        </>
    )
}

export default Register

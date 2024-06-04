import React from 'react'
import logo from './assets/whitelogo.svg'
import file from './assets/File.svg'
import './App.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className=' bg-[#F7F7F7] text-[#434343] h-[100vh] rounded-tr-2xl flex flex-col  justify-between items-center rounded-br-2xl p-[20px]'>
      <div>
      <label className='flex flex-row items-center mb-6'>
        <img src={logo} className='h-[40px]'></img>
        <h1 className='text-[25px] font-medium pl-2 '>Fileit</h1>
      </label>

      <div >
        <label className='flex flex-row items-center my-2 p-[10px] rounded-2xl hov-side-icon'>
        <img width="35" height="35" src="https://img.icons8.com/fluency-systems-regular/48/home--v1.png" alt="home--v1"/>
        {/* <h1 className='text-[20px] font-normal pl-2'>Home</h1> */}
        <Link to='/Dashboard'  className='text-[20px] font-medium pl-2'>Home</Link>
        </label>
        <label className='flex flex-row items-center my-2 p-[10px] rounded-2xl hov-side-icon'>
        <img width="35" height="35" src="https://img.icons8.com/fluency-systems-regular/48/sent--v1.png" alt="sent--v1"/>
       {/* <h1 className='text-[20px] font-normal  pl-2'>Send</h1> */}
       <Link to='/send' className='text-[20px] font-medium  pl-2'>Send</Link>
        </label>
        <label className='flex flex-row items-center my-2 p-[10px]  rounded-2xl hov-side-icon '>
        <img width="35" height="35" src="https://img.icons8.com/metro/26/file.png" alt="file"/>
        {/* <h1 className='text-[20px] font-normal pl-2'>Received</h1> */}
        <Link to='/received' className='text-[20px] font-medium pl-2'>Received</Link>
        </label>
      </div>
      </div>
        <div>
            <label className='flex flex-row items-center'>
                <h1 className='pl-2'>Logout</h1>
            </label>
        </div>
    </div>
  )
}

export default Sidebar

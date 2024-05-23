import React from 'react'
import Sidebar from '../Dashboard/Sidebar.jsx'

const Shares = () =>{
    return(
      <>
      <div className='p-[20px] flex flex-col justify-start items-start mt-3 table-d'>
        <h1 className='pl-4'>Shared</h1>
      <div className='w-[100%] flex flex-col justify-start p-4'>
        {/* <div className='flex flex-row justify-between w-[80%] mt-4 '>
          <h1></h1>
          <h1>Filename</h1>
          <h1>Type</h1>
          <h1>Date</h1>
          <h1>Status</h1>
          <h1>Sharable</h1>
        </div> */}
        <div className='flex flex-row justify-between items-center w-[80%] pl-2 '>
          <input type='checkbox'></input>
          <h1 className='font-medium'>CCR-PDF</h1>
          <h1>PDF</h1>
          <h1>13-Feb-2024</h1>
          <h1>Sent</h1>
          <h1>Private</h1>
        </div>
      </div>
      </div>
      </>
    )
  }

function Send() {
  return (
    <div className='flex flex-row '>
      <div className='w-[20%] '>
        <Sidebar />
      </div>
      <div className='bg-[#f7f7fa] w-[80%]'>
          {/* recent shares */}
          <div>
            <Shares />
          </div>
      </div>
    </div>
  )
}

export default Send

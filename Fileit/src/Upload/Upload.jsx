import React, { useRef } from 'react';
import '../Dashboard/App.css';


function Upload() {
  const toast = useRef(null);

  const onUpload = () => {
      toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  };
  return (
    <div className='h-[100vh] bg-[#f4f4f4] flex flex-col justify-center items-center'>
      <h1>Fileit</h1>
      <div className='bg-white p-4 w-[40%] rounded-2xl shadow-[0px_13px_33px_1px_rgba(255,_255,_255,_0.2)] flex flex-col justify-center items-center'>
        
        <label className='flex flex-row items-center justify-around my-2'>
            
            <input type='text' size='20' placeholder='To,Username' className='border-2 rounded-3xl px-3 py-2'></input>
        </label>

        <label className='flex flex-row items-center justify-around my-2'>
            <input type='text' size='20' placeholder='wallet address' className='border-2 rounded-3xl  px-3 py-2'></input>
        </label>

        <label className='flex flex-col items-center my-3'>
          <input type='file' placeholder='Choose file' className='bg-blue-500 p-2 ' id='file-input'></input>
          <label for='file-input'>Choose File</label>
        </label>

        <button className='bg-black px-4 py-2 rounded-2xl w-[150px] text-white'>Send it</button>
      </div>
    </div>
  )
}

export default Upload

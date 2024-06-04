
import React, { useRef, useState } from 'react';
import axios from "axios";
import '../Dashboard/App.css'; // Adjust the path to your CSS file as necessary

function Upload() {
  const [file, setFile] = useState("");
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);

  const handleUpload = async (e)  => {
    e.preventDefault();
    console.log(file)
    if (!file) {
      console.log("no file selected");
      setMsg("no file selected");
      return;
    }
    try {
      const fd = new FormData();
      fd.append('file', file);
      
      const response =  await axios({
        method:"post",
        url:"https://api.pinata.cloud/pinning/pinFileToIPFS",
        data:fd,
        headers:{
            pinata_api_key: "41e55f076665914186ad",
            pinata_secret_api_key:" 3659ebd1afc84d23bcc16d68a35495091fdc8ce4bbbf4e9caf3d43794a409e52",
            "Content-Type":"multipart/form-data",
        }
    })
    const fileURL = "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash;
    console.log(fileURL);

    } catch (error) {
      console.log(error);
    }

    setMsg("uploading yay");
    setProgress(prevState => {
      return { ...prevState, started: true };
    });

    
  }

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
        <form>
        <input type='file' onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleUpload} className='bg-black px-4 py-2 rounded-2xl w-[150px] text-white'>upload file</button>
        </form>
        {progress.started && <progress max="100" value={progress.pc}></progress>}
        {msg && <span>{msg}</span>}
      </div>
    </div>
  );
}

export default Upload;
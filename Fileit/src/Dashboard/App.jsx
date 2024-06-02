import React,{useState} from 'react'
import Sidebar from './Sidebar'
import './App.css'
import search from './assets/search.svg'
import { Link } from 'react-router-dom'
import brake from './assets/Brake.svg'
import { useLocation } from 'react-router-dom'

const Draft = () =>{
  const [isOpen, setIsOpen] = useState(false);


  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    // Handle delete logic here
    console.log("Deleting...");
    // Close the dialog after deletion
    closeDialog();
  };
  return(
    <>
      <div className='w-[50%] px-6 py-4 my-3 bg-[#fff] rounded-2xl'>
        <div className='flex flex-row justify-between items-center border-b-2 border-b-[#e0e0e0]'>
          <h1>Draft-Today </h1>
          <div className="relative">
      <button onClick={openDialog} className=" text-black px-4 py-2 flex flex-row rounded-lg focus:outline-none">
      <img width="28" height="28" src="https://img.icons8.com/pastel-glyph/64/FA5252/trash.png" alt="trash"/> 
      </button>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
          {/* <div className="absolute z-9 inset-0 bg-gray-500 opacity-75"></div> */}
          <div className="bg-white z-11 rounded-lg p-8">
            <div className="text-xl font-semibold flex flex-row items-center mb-4"><img src={brake} className='pr-4'></img> Are you sure you want to delete?</div>
            <div className="flex justify-end">
              <button onClick={closeDialog} className="mr-4 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg focus:outline-none">Cancel</button>
              <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg focus:outline-none">Delete</button>
            </div>
          </div>
        </div>
      )}
          </div>
        
        </div>
        <div className='flex flex-row justify-between items-center mt-3'>
          <label className='flex flex-row items-center'>
          <input type='checkbox'></input>
          <h1 className='pl-4 text-[20px] font-medium text-[#323232]'>Draft to - Karan</h1>
          </label>
          <label className='flex flex-row items-center'>
            <Link className='bg-[#FEC93D] px-3 py-1 mx-2 rounded-3xl text-[18px] font-semibold'>Re-Send</Link>
            <p>Feb 15</p>
          </label>
        </div>

      </div>
    </>
  )
}
const AddRec = () =>{
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const openDialogAdd = () => {
    setIsOpenAdd(true);
  };

  const closeDialog = () => {
    setIsOpenAdd(false);
  };

  const handleDeleteAdd = () => {
    // Handle delete logic here
    console.log("Deleting...");
    // Close the dialog after deletion
    closeDialog();
  };
  const saveit =()=>{
    let username = document.getElementById('usr').value;
    let wallet = document.getElementById('wall').value;
    document.getElementById('addsave').innerHTML=`${username} ${wallet}`; 
  }
  return(
    <>
    <div className='w-[40%] p-[25px] rounded-2xl bg-[#fff]'>
      <div className=' flex flex-row justify-between items-center '>
        <h1>Add Favourites</h1>
        <div className="relative">
      <button onClick={openDialogAdd} className=" text-black px-4 py-2 flex flex-row rounded-lg focus:outline-none">
      <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/plus-math.png" alt="plus-math"/>
      </button>
      {isOpenAdd && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
          {/* <div className="absolute z-9 inset-0 bg-gray-500 opacity-75"></div> */}
          <div className="bg-white z-11 rounded-lg p-8">
            <div className="text-xl font-semibold flex flex-col items-center mb-4">

            <input type='text' size='20' id='usr' placeholder='Username' className='border-2 text-[18px] rounded-3xl px-3 py-2 my-2'></input>
            <input type='text' size='20' id='wall' placeholder='wallet address' className='border-2 text-[18px] rounded-3xl  px-3 py-2 my-2'></input>
            
            </div>
            <div className="flex justify-end">
              <button onClick={closeDialog} className="mr-4 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg focus:outline-none">Cancel</button>
              <button onClick={saveit}  className='bg-black px-4 py-2 rounded-lg w-[150px] text-white'>Save</button>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
      <div id='addsave'>

      </div>
    </div>
    </>
  )
}

const Shares = () =>{
  const location = useLocation();
  const recdata = location.state;
  console.log(recdata)
  const userId = recdata?.match?.userid || recdata;

  return(
    <>
    <div className='p-[20px] flex flex-col justify-start items-start mt-3 table-d'>
      <h1 className='pl-4'>Recents</h1>
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
        {/* <h1>13-Feb-2024</h1>
        <h1>Sent</h1>
        <h1>Private</h1> */}
        
        {/* <h1>hj{recdata.match.userid || recdata}</h1> */}
        <h1>hj{userId}</h1>
        {/* <h1>{recdata}</h1>
        <h1>{recdata}</h1> */}
      </div>
    </div>
    </div>
    </>
  )
}

function App() {
  return (
    <div className='flex flex-row '>
      <div className='w-[20%] '>
        <Sidebar />
      </div>
      <div className='bg-[#F2F2F7] w-[80%]'>
          
          {/* top bar */}
          <div className='flex flex-row justify-around items-center p-4 px-5'>
            
            <div className='flex flex-row items-center w-[80%] p-2 border border-[#454545] rounded-full '>
              <img src={search} className='h-[30px]'></img>
              <input type='text' id='search' placeholder='Search Wallet address' className='w-[60%] ml-2 bg-transparent focus:outline-none '></input>
            </div>
            
            <div>
              <Link to='/upload' className='bg-[#2598F2] px-6 py-3 rounded-3xl text-[22px] font-semibold text-white'>Send File</Link>
            </div>
          </div>
          
          {/* drft and add contact */}
          <div className='flex flex-row justify-around items-center'>
            {/* Draft */}
              <Draft />
            {/* Add received */}
              <AddRec />
          </div>
          {/* recent shares */}
          <div>
            <Shares />
          </div>
      </div>
    </div>
  )
}

export default App

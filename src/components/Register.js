import React, { useRef } from 'react'
import  { useState } from 'react';

export default function Register({onClose,onClose2}) {
  const [isToggled, setIsToggled] = useState(false);
  const togglebtn=()=>{
    setIsToggled(!isToggled);
  }
  const modalRef=useRef();
  const closeModal=(e)=>{
    if(modalRef.current === e.target){
      onClose();
    }
  }
  const switchCard=()=>{
    onClose();
    onClose2();
  }
  return (
     <div id='logincomp' className='pt-8 fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm '>
      <div onClick={onClose} className='flex items-center justify-center sm:hidden'><i class="fa-solid fa-xmark fa-2xl" style={{color:"#ffffff"}}></i></div>
      <div  ref={modalRef} onClick={closeModal} className='flex items-center justify-center max-sm:pt-4'>
      <div  className='w-[40rem] h-[43rem] max-sm:h-[47rem] max-sm:w-[24rem] rounded-3xl bg-white flex flex-col items-center justify-center py-48 px-12 '>
      <div>
        <h1 id='logintext' className='text-md bg-white text-center rounded-t-lg px-6 border-2 border-black'><span className='text-[#952BE8]'>Create</span> a new account.</h1>
      </div>
      <div id='logincard' className='flex flex-col max-sm:w-80  items-start w-[30rem]  bg-red border-2 border-black rounded-2xl shadow'>
         <div className='bg-white rounded-t-2xl p-10 space-y-3 w-full h-full'>
          <div className='flex flex-row space-x-2 max-sm:flex-col max-sm:space-x-0'>
          <div className='flex flex-col  '>
          <h1 id='emailtext'>First Name: &nbsp;&nbsp;</h1>
          <input id='input' className='border-2 border-black rounded-lg px-3 max-sm:w-64 text-sm w-48 h-10' placeholder='Rahul'></input>
         </div>
          <div className='flex flex-col '>
          <h1 id='emailtext'>Last Name: &nbsp;&nbsp;</h1>
          <input id='input' className='border-2 border-black rounded-lg px-3 max-sm:w-64 text-sm w-48 h-10' placeholder='Verma'></input>
         </div>
         </div>
         
          <div className='flex flex-col '>
          <h1 id='emailtext'>Email: &nbsp;&nbsp;</h1>
          <input id='input' className='border-2 border-black rounded-lg px-3 max-sm:w-64 text-sm w-96 h-10' placeholder='name@lakshya.com'></input>
         </div>
         <div className='flex flex-col'>
          <h1 id='passtext'>Create Password: &nbsp;</h1>
          <div className='space-x-1'>
          <input id='input' className='border-2 border-black rounded-lg px-3 text-sm max-sm:w-48 w-[21rem] h-10' type={isToggled?"":"password"}></input>
          <button onClick={togglebtn} className='py-[0.4rem] w-12 max-sm:w-10 border-2 border-black rounded-lg'><i className={isToggled?"fa-solid fa-eye-slash":"fa-solid fa-eye"}></i></button>
          </div>
        <div>
        <h1 id='passtext'>Confirm Password: &nbsp;</h1>
          <div className='space-x-1'>
          <input id='input' className='border-2 border-black rounded-lg px-3 text-sm max-sm:w-48 w-[21rem] h-10' type={isToggled?"":"password"}></input>
          <button onClick={togglebtn} className='py-[0.4rem] w-12 max-sm:w-10 border-2 border-black rounded-lg'><i className={isToggled?"fa-solid fa-eye-slash":"fa-solid fa-eye"}></i></button>
          </div>
        </div>
         </div>
         </div>
         <button id='login' onClick={onClose} className=' border-2 border-black text-white bg-[#be6aff] hover:bg-[#d39efc] w-full h-16 rounded-b-2xl  bottom-0' type='submit'>SignUp</button>
      </div>
      <div className='my-1'>
        <h1 id='logintext' className='text-md bg-white text-center rounded-b-lg px-6 border-2 border-black'>Already have an account? <span onClick={switchCard} className='text-[#952BE8] cursor-pointer'>Login</span></h1>
      </div>
      <div className='flex flex-col justify-center items-center space-y-1 pt-2'>
        <h1  id='text2' className='text-black max-sm:hidden'>OR</h1>
        <h1 id='text2'  className='text-black'><span className='sm:hidden hover:translate-y-2 transition-all duration-300'>Or</span> SignUp with</h1>
        <div className='flex space-x-3 pt-3'>
        <div id='icon'  className='bg-white p-6 border-2 cursor-pointer hover:translate-y-2 transition-all duration-300 border-black rounded-full '><i className="fa-brands fa-google fa-2xl" style={{color:"#952be8"}}></i></div>
        <div id='icon'  className='bg-white p-6 border-2 cursor-pointer hover:translate-y-2 transition-all duration-300 border-black rounded-full '><i className="fa-brands fa-apple fa-2xl" style={{color:"#952be8"}}></i></div>
        <div  id='icon' className='bg-white p-6 border-2 cursor-pointer hover:translate-y-2 transition-all duration-300 border-black rounded-full '><i className="fa-brands fa-facebook fa-2xl" style={{color:"#952be8"}}></i></div>
        </div>
      </div>
    </div>
    </div>
    </div>
    
  )
}

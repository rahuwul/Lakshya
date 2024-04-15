import React,{ useRef } from 'react'


export default function Box ({onClose}) {
    const modalRef=useRef();
    const closeModal=(e)=>{
      if(modalRef.current === e.target){
        onClose();
         }
    }
  return (
    <div onClick={onClose} className='fixed inset-0'>
       
        <div  ref={modalRef} onClick={closeModal}   id='menubox' className='absolute bg-[white]  rounded-lg w-48 h-36 top-[3.5rem] right-5'>
        <ul className='text-[#952BE8] px-3 py-5 '>
            <li>Profile</li>
            <li>Settings</li>
            <li className='pb-4 pt-3'><div className='bg-[#9525e8] w-32 h-[0.01rem]'></div></li>
            <li>Logout</li>
        </ul>
        </div>
        </div>
        
   
  )
}
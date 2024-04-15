import React from 'react'


export default function Card(props) {
  return (
    <>
   
              <div id='card' class=" w-80  bg-red border-2  border-black rounded-xl shadow" key={props.id}>
                <div className='rounded-xl'>
         <div className='flex justify-center items-center bg-[#EEBCFF] border rounded-t-xl border-black '>
           <img src={props.img} className="py-4" alt=''></img>
         </div>
         <div className='bg-[#ffffff]'>
         <h1
                     id="class"
                     className="flex text-2xl text-center  justify-center py-5 border border-black  md:text-4xl "
                   >
                    {props.text}
                   </h1>
         </div>
         <div id='button' className='flex items-center rounded-b-xl bg-[#ffffff] border border-black p-5'>
         <button
                   id="getstarted"
                   className="flex hover:translate-y-2 transition-all duration-300 bg-white shadow shadow-[#952BE8] place-self-center rounded-3xl border-2 border-black  text-2xl text-[#952BE8] py-4 px-10  "
                 >
                   TAKE TEST{" "}
                   <i className="px-2 ml-2 rounded-full border-2 border-[#952BE8] ">
                     {" "}
                     <i class="fa-sharp fa-solid fa-arrow-right"></i>
                   </i>
                 </button>
         </div>
         </div>
         </div>
    
   
    </>
  )
}

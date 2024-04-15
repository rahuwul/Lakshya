import React from 'react'

export default function About() {
  return (
    <div className='py-20 flex justify-center w-full  '>
      <div className='w-[50rem]'>
        <div className='p-5'>
        <div className=''>
        <h1 className='flex flex-col items-end  text-[#952be8]'><span id='about' className='text-5xl'>about</span> <span id='lakshya' className='text-6xl'>Lakshya</span></h1>
        </div>
        <div className='flex justify-end py-2 '>
          <div className='bg-[#9525e8] w-48 h-1'></div>
        </div>
        <div className='' >
          <h1 id='abouttext' className='text-right'>Lakshya started as a project during a hackathon, where I took the lead in crafting the entire frontend experience from scratch. From whipping up designs in Figma to coding them into a proper webpage with <b>ReactJS</b> and <b>TailwindCSS</b>, it was fun learning experience! In this project, I fine-tuned my frontend skills and tackled everything from React Hooks to the "fine art of centering a div" using Tailwind :D . Looking forward to design more! </h1>
          </div>
          <div className='flex justify-end py-2 '>
          <div className='bg-[#9525e8] w-24 h-1'></div>
        </div>
        <div className='' >
          <h1 id='abouttext' className='text-right'>If you're interested in getting a design like this or something similar for your website, feel free to reach out to me on LinkedIn or drop me a message at vermarahulkolkata@gmail.com. I'd love to chat and discuss how to jazz up your online presence!    </h1>
          </div>
          <div className='flex justify-end py-2 '>
          <div className='bg-[#9525e8] w-12 h-1'></div>
        </div>
        <div className='flex flex-row  justify-center' >
        <div id='linkbox' className='flex flex-row  justify-center border-black border-2 w-[13rem] rounded-lg bg-[#9525e8]'>
          <div className='relative border-2 cursor-pointer  border-black bg-white hover:-translate-y-3 transition-all duration-300  p-2 rounded-tl-lg rounded-bl-lg'><a href='https://www.linkedin.com/in/rahul-verma-568ab9217/' target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin fa-2xl" style={{color:"#9525e8"}}></i></a></div>
          <div className='relative border-2 cursor-pointer  border-black bg-white hover:-translate-y-3 transition-all duration-300  p-2 '><a href='https://twitter.com/rahuwul' target="_blank" rel="noreferrer" ><i class="fa-brands fa-x-twitter fa-2xl" style={{color:"#9525e8"}}></i></a></div>
          <div className='relative border-2 cursor-pointer  border-black bg-white hover:-translate-y-3 transition-all duration-300  p-2 '><a href='https://github.com/rahuwul' target="_blank" rel="noreferrer" ><i class="fa-brands fa-github fa-2xl" style={{color:"#9525e8"}}></i></a></div>
          <div className='relative border-2 cursor-pointer  border-black bg-white hover:-translate-y-3 transition-all duration-300  p-2 rounded-tr-lg rounded-br-lg'><a href='https://www.behance.net/rahul-designs' target="_blank" rel="noreferrer" ><i class="fa-brands fa-behance fa-2xl" style={{color:"#9525e8"}}></i></a></div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

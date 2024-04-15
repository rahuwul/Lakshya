import React from 'react'

export default function Footer() {
  const company = [
    { link: "/", text: "About", id: 1 },
    { link: "/", text: "Careers", id: 2 },
    { link: "/", text: "Brand Center", id: 3 },
    { link: "/", text: "Blog", id: 4 },
  ];
  const legal = [
    { link: "/", text: "Privacy Policy", id: 5 },
    { link: "/", text: "Licensing", id: 6 },
    { link: "/", text: "Terms and Conditions", id: 7 },
    { link: "/", text: "Contact", id: 0 },
  ];
  const download = [
    { link: "/", text: "iOS", id: 8 },
    { link: "/", text: "Android", id: 9 },
    { link: "/", text: "Windows", id: 10 },
    { link: "/", text: "MacOS", id: 11 },
  ];
  return (
<footer>
    <div className='flex items-center justify-center  bg-[#FBF2FF]  w-full h-96 max-md:w-full right-0 max-md:h-full  bottom-0'>
        <div className='flex flex-col py-10 px-8 w-[45rem] space-y-12'>
        <div className='flex flex-row max-md:flex-col items-center space-x-7 max-md:space-x-0  max-md:space-y-4 max-md:py-4'>
        <div className='bg-[#FBF2FF] w-60 max-md:w-80 '>
          <h1 id='foothead'>Company</h1>
          <ul>
            {company.map((item)=>(
              <li id='footitem'>{item.text}</li>
            ))}
          </ul>
        </div>
        <div className='bg-[#952be8] max-md:h-[0.2px] max-md:w-48  w-[0.2px] h-24 '></div>
        <div className='bg-[#FBF2FF]  w-60 max-md:w-80'>
        <h1 id='foothead'>Legal</h1>
          <ul>
            {legal.map((item)=>(
              <li id='footitem'>{item.text}</li>
            ))}
          </ul>
        </div>
        <div className='bg-[#952be8] max-md:h-[0.2px] max-md:w-48  w-[0.2px] h-24 '></div>
        <div className='bg-[#FBF2FF] w-60 max-md:w-80'>
        <h1 id='foothead'>Download</h1>
          <ul>
            {download.map((item)=>(
              <li id='footitem'>{item.text}</li>
            ))}
          </ul>
        </div>
        </div>
        <div className=''>
          <div className='flex flex-row max-sm:flex-col justify-between bg-[#FBF2FF] w-full h-14'>
            <div id='foothead'>© 2024 Lakshya™. All Rights Reserved.</div>
            <div><ul className='flex flex-row space-x-3'>
              <li><i class="fa-brands fa-facebook" style={{color:" #952be8"}}></i></li>
              <li><i class="fa-brands fa-discord" style={{color:" #952be8"}}></i></li>
              <li><i class="fa-brands fa-twitter" style={{color:" #952be8"}}></i></li>
              <li><i class="fa-brands fa-github" style={{color:" #952be8"}}></i></li>
              <li><i class="fa-brands fa-instagram" style={{color:" #952be8"}}></i></li>
              </ul>
               </div>
          </div>
        </div>
        </div>
    </div>
</footer>
  )
}

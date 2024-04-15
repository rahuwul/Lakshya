import React from 'react';
import six from '../assets/six.png';
import nine from '../assets/nine.png';
import eleven from '../assets/eleven.png';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './styles.css';
import { motion } from "framer-motion"


export default function Home2() {
  const cardItems = [
    { img: six, text: "Classes 6th-8th", id: 1 },
    { img: nine, text: "Classes 9th-10th", id: 2 },
    { img: eleven, text: "Classes 11th-12th", id: 3 },
  ];

  return (
    <div className='pb-20'>
    <div className='flex items-center justify-center py-4 px-2'>
    
   <div id='non-swipe' className='grid grid-cols-3 gap-14'>
      {cardItems.map((item)=>(
        <motion.div
        initial={{ opacity: 0 , transform:"translateY(18px)" }}
        whileInView={{ opacity: 1, transform:"translateY(0px)" }}
        transition={{ ease: "easeIn", duration: 0.5}}
      ><Card img={item.img} id={item.id} text={item.text}/> </motion.div>
      ))}
    </div>
    <motion.div
        initial={{ opacity: 0 , transform:"translateY(18px)" }}
        whileInView={{ opacity: 1, transform:"translateY(0px)" }}
        transition={{ ease: "easeIn", duration: 0.5}}
      >
    <div id='swiper' className='hidden'> 
     <Swiper
        spaceBetween={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
      <div className='flex items-center justify-center' >
      {cardItems.map((item)=>(
       <SwiperSlide ><div className='px-10'><Card img={item.img} id={item.id} text={item.text}/></div></SwiperSlide>
      ))}
    </div> 
      </Swiper>
      </div> 
      </motion.div>
    </div>
    <div className='flex justify-center items-center '>
    <div id='textbody2' className='flex flex-col text-center items-center px-5  w-[800px] py-10'>
   <h2 id='home2text1'>Why Aptitude Test?</h2>
       <h1 id='home2text2'>Taking an aptitude test is a valuable step towards a successful career. These tests help you identify your unique strengths and interests, guiding you to make informed decisions about your professional path. <span className='max-md:hidden'>By aligning your career choices with your natural aptitudes, you can increase job satisfaction, personal growth, and efficiency in planning your education and career development.</span>
       <h1 id='readmore' className='py-2'><button  className='border border-[#BD6AFE] px-5 rounded-md'>Read More</button></h1>
       </h1>
       </div>
      </div>
    </div>
  )
}

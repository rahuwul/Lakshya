import React from "react";
import image1 from "../assets/image1.png";

export default function Home1() {
  return (
    <div className="pb-20 pt-20">
      <div className="py-5 md:grid md:grid-cols-2 md:h-96">
        <div id='textbody' className="md:grid  md:grid-rows-3 md:gap-3 md:w-7 md:pt-24 md:z-10 md:pl-10 ">
          <h1
            id="home1text1"
            className="flex text-4xl text-center px-4  md:text-6xl  md:text-left "
          >
            PERSONALIZED PATHWAY TO SUCCESS!
          </h1>

          <h1
            id="home1text2"
            className="flex py-3 text-lg text-center px-16  text-[#952BE8] leading-5 md:py-0 md:text-left md:text-xl md:px-4"
          >
            Empowering Your Future with AI-Enhanced Career Counselling.<br/>Unleash Your Potential through Precision Guidance and Assessment.
          </h1>
         
        </div>
        <div id='image1' className="max-md:hidden md:w-full -z-10">
          <img src={image1} alt="hagemaru"></img>
        </div>
      </div>
      <div className="grid grid-row-3 gap-3 py-5  md:hidden">
        <h1
          id="home1text1"
          className="flex text-3xl text-center   place-self-center  text-[#952BE8]"
        >
          GET
        </h1>
        <div
          id="box"
          className="flex bg-[#F6E6FC] w-72 h-10  place-self-center justify-center items-center text-[#952BE8] rounded-lg"
        >
          Course Recommendation
        </div>
        <div
          id="box"
          className="flex bg-[#F6E6FC] w-72 h-10  place-self-center justify-center items-center text-[#952BE8] rounded-lg"
        >
          AI Counselling
        </div>
        <div
          id="box"
          className="flex bg-[#F6E6FC] w-72 h-10  place-self-center justify-center items-center text-[#952BE8] rounded-lg"
        >
          Career Guidance
        </div>
      </div>
        <div className="max-md:hidden md:flex  md:grid-cols-3 md:-top-48 md:gap-3 md:pt-24 md:self-center md:justify-center md:px-5 ">
          <h1
            id="home1text3"
            className="flex text-3xl text-center   place-self-center  text-[#952BE8]"
          >
            GET
          </h1>
          <div
            id="box"
            className="flex bg-[#F6E6FC] w-72 h-10  place-self-center justify-center items-center text-[#952BE8] rounded-lg"
          >
            Course Recommendation
          </div>
          <h1 className="text-[#952BE8] place-self-center justify-center">|</h1>
          <div
            id="box"
            className="flex bg-[#F6E6FC] w-72 h-10  place-self-center justify-center items-center text-[#952BE8] rounded-lg"
          >
            AI Counselling
          </div>
          <h1 className="text-[#952BE8] place-self-center justify-center">|</h1>
          <div
            id="box"
            className="flex bg-[#F6E6FC] w-72 h-10  place-self-center justify-center items-center text-[#952BE8] rounded-lg"
          >
            Career Guidance
          </div>
        </div>
      <div className="flex justify-center items-center v-screen py-5">
        <button
          id="getstarted"
          className="flex bg-white place-self-center hover:translate-y-2 rounded-3xl border-2 border-black  text-3xl text-[#952BE8] py-4 px-10 shadow shadow-[#952BE8] "
        >
          GET STARTED{" "}
          <i className="px-2 ml-2 rounded-full border-2 border-[#952BE8] ">
            {" "}
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
          </i>
        </button>
      </div>
    </div>
  );
}

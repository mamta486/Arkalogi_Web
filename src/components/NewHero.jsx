import React from "react";
import heroBg from "../assets/Blend_Group_4.png";
import chartLine from "../assets/graph.png";
import circleImg from "../assets/circle.png"; // Import your circle image
import card2img from "../assets/card2sqr.svg";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-[98vh] flex items-center justify-center z-0 bg-[#1F3161]"
      style={{ backgroundImage: `url(${heroBg})` }}
      
    >
      {/* Overlay */}


      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Tagline */}
        <span className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-[#FFFFFF36] text-sm mb-4 font-Inter">
          Welcome to Arkalogi
          <svg
            className="w-4 h-4 opacity-50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>

        {/* Heading */}
        <h1 className="text-[32px] sm:text-[42px] md:text-[58px] lg:text-[67.92px] leading-tight font-medium tracking-[-0.04em] font-jost capitalize">
          Innovative Software <br /> <span className=" text-[#96C5FF] ">Solution For Your Business.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-[14px] sm:text-lg leading-[180%] font-medium text-[#FFFFFFED] font-Inter ">
          We build trading platforms, AI tools, and custom software <br className="hidden sm:block" />
          that fits your business perfectly and helps it grow.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 mt-10 justify-center items-center">
          <button className="w-[200px] h-[46px]  flex  items-center justify-center gap-2  text-lg rounded-full bg-[#6064C142] border-none outline-none whitespace-nowrap 
  [box-shadow:inset_-1px_3px_7.5px_rgba(255,255,255,0.25),inset_0px_-2px_6.5px_rgba(255,255,255,0.09),1px_5px_6.5px_rgba(96,100,193,0.26)]">
            <span className="text-[14px] text-[#FFFFFF] font-medium font-Inter leading-[11px] tracking-normal ">Schedule a meeting</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff">
              <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Chart Card Bottom-Left */}
      <div className="absolute bottom-10 left-10 z-10">
        <div className="bg-[#142555] py-10 rounded-2xl w-[210px] h-[209.2754364013672px] shadow-xl border border-white/10">
          <div className="flex justify-between items-center mb-4 ml-5 mr-5">
            <span className="text-white font-medium text-sm">Currency</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" /></svg></span>
          </div>
          <img src={chartLine} alt="Chart" className="w-full pt-1 object-cover" />
          <div className="flex justify-between text-white/60 text-xs px-1">
            <span className="pl-3">Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Jun</span><span className="pr-3">Jul</span>
          </div>
        </div>
      </div>

      {/* Card Top-Right */}
      <div className="absolute top-[99.98px] left-[1185.71px]  ">
        <div className="rounded-[5.5px] w-[212.38px] h-50 bg-[#19264B] border border-[#304171] shadow-[0px_19.25px_41.24px_-8.25px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between relative top-[27px] ">
            <div className="flex pl-3 ">
              <span>
                <svg width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="insta-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#a133ff" />
                      <stop offset="50%" stop-color="#ff5e62" />
                      <stop offset="100%" stop-color="#f9d423" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="512" height="512" rx="115" fill="#19264B" />
                  <rect x="80" y="80" width="352" height="352" rx="100" fill="none" stroke="url(#insta-gradient)" stroke-width="40" />
                  <circle cx="256" cy="256" r="96" fill="none" stroke="url(#insta-gradient)" stroke-width="40" />
                  <circle cx="370" cy="142" r="28" fill="url(#insta-gradient)" />
                </svg>
              </span>
              <p className="text-[12px] pl-1">Media Type</p>
            </div>
            <div className="flex pr-4">
              <span className="mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e3e3e3">
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm320-320v240h240v-240H520Zm0-80h240v-240H520v240Zm-80 0v-240H200v240h240Zm0 80H200v240h240v-240Z" />
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e3e3e3">
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
              </span>
            </div>



          </div>

          <div className="relative">
            {/* Background or Below Image */}
            <div className="pl-3 relative top-[30px] z-10">
              <img src={circleImg} alt="Circle Icon" className="w-auto h-auto" />
            </div>

            {/* Image Above */}
            <img
              src={card2img}
              alt="card2"
              className="relative -mt-[95px] ml-3 z-20"
            />
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;


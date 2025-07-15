import React from "react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We build easy-to-use web and desktop apps designed to fit your business and boost productivity.",
    icon: (
      <svg
        className="w-[24.9px] h-[27.8px] mb-8 text-black group-hover:text-white transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
      >
        <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z" />
      </svg>
    ),
  },
  {
    title: "Trading & Financial Systems",
    description:
      "From backtesters to exchange integration — robust systems that power financial performance.",
    icon: (
      <svg
        className="w-[21.67px] h-[25px] mb-8 text-black group-hover:text-white transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
      >
        <path d="M280-160v-80h-80v-480h80v-80h80v80h80v480h-80v80h-80Zm0-160h80v-320h-80v320Zm320 160v-200h-80v-280h80v-160h80v160h80v280h-80v200h-80Zm0-280h80v-120h-80v120Z" />
      </svg>
    ),
  },
  {
    title: "IT Consulting & \n DevOps",
    description:
      "Expert advice and scalable DevOps implementation to elevate your tech infrastructure.",
    icon: (
      <svg
        className="w-[31.67px] h-[25px] mb-18 text-black group-hover:text-white transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
      >
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z" />
      </svg>
    ),
  },
  {
    title: "API Design & Integration",
    description:
      "We design powerful, developer-friendly APIs and handle secure integration with ease.",
    icon: (
      <svg
        className="w-[28.33px] h-[27.92px] mb-18 text-black group-hover:text-white transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
      >
        <path d="M200-120q-33 0-56.5-23.5T120-200v-500q0-14 4.5-26.5T138-750l56-68q9-11 20.5-16.5T240-840h480q14 0 25.5 5.5T766-818l56 68q9 11 13.5 23.5T840-700v500q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm-16 520h560v-440H200v440Zm382-78 142-142-142-142-58 58 84 84-84 84 58 58Zm-202 0 58-58-84-84 84-84-58-58-142 142 142 142Z" />
      </svg>
    ),
  },
];

const Services = () => (
  <section className="pb-45 pt-39 px-4 sm:px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] leading-[110%] tracking-[-0.02em] font-semibold text-[#2C5186] mb-12 text-center sm:text-left font-Syne">
        What we do best?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="group p-6 sm:p-8 rounded-xl border border-[#EBEAEA] bg-white shadow-[0px_1px_4.9px_0px_#C6D6E3] hover:shadow-lg transition duration-300 hover:bg-[#1F4376] hover:text-white"
          >
            {service.icon}
            <h3 className="text-lg sm:text-xl font-semibold mb-2 font-Inter text-[18px] leading-[111.00000000000001%]">{service.title}</h3>
            <p className="text-sm sm:text-base  font-light font-Inter tracking-normal text-[14px] leading-[170%]">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

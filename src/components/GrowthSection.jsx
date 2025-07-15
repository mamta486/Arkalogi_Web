import React, { useState } from "react";
import portfolioImg from "../assets/homebg-phone.png";

const accordionItems = [
    {
        title: "Custom Software That Fits You",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Smarter Decisions with AI",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "IT Consulting That Guides You",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Completely customisable",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const GrowthSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-[#FFFCF5] w-full py-10">
            <div
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-8
        px-[clamp(20px,5vw,61px)] max-w-[1440px] mx-auto"
            >
                {/* LEFT COLUMN */}
                <div className="w-full">
                    <h2 className="text-[36px] md:text-[56px] leading-[110%] tracking-[-2%] font-semibold text-[#1F4376] mb-8">
                        Helping You Grow with <br className="hidden md:block" />
                        Smart Tech Solutions
                    </h2>


                    {accordionItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="border-t-[1px] border-[#E6E6EB] py-4 gap-[16px]"
                        >
                            <button
                                className="flex items-start gap-[12px]"
                                onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                            >
                                <span
                                    className={`text-[26px] font-syne font-medium leading-[110%] tracking-normal ${idx === openIndex ? "text-[#1F4376]" : "text-[#3A3A31]"
                                        }`}
                                >
                                    {idx === openIndex ? "—" : "+"}
                                </span>
                                <span className="text-[20px] md:text-[26px] font-syne font-medium leading-[110%] tracking-normal">
                                    {item.title}
                                </span>

                            </button>
                            {idx === openIndex && item.content && (
                                <p className="text-[16px] md:text-[18px] w-full mt-[15px] mb-[15px] leading-[160%] font-normal text-[#141B38] opacity-60">
                                    {item.content}
                                </p>
                            )}
                        </div>
                    ))}

                    <div className="w-full flex justify-center md:justify-start">
                        <button
                            className="
    mt-8 
    bg-[#1F4376] 
    hover:bg-[#16395e] 
    text-white 
    py-3 px-6 
    rounded-md 
    font-semibold 
    text-base 
    whitespace-nowrap 
    transition-all 
    duration-200  cursor-pointer
  "
                        >
                            Try for Free
                        </button>

                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="w-full flex justify-center">
                    <img
                        src={portfolioImg}
                        alt="Smart Tech Portfolio"
                        className="w-full max-w-[590px] h-auto rounded-[7px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default GrowthSection;

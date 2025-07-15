import React from "react";
import { MessageSquareText, Cog, Rocket } from "lucide-react"; // Optional icon lib
import rocketIcon from '../assets/rocket.png';
import chat from "../assets/chat.png";
import cogs from "../assets/cogs.png";





export default function Process() {
  return (
    <section className="py-12 px-4 bg-[#FFFFFF] w-full h-[754px] gap-[30px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[56px] font-bold mb-10 text-[#2C5186] font-Syne leading-[110.00000000000001%] tracking-[-2%]">How we work with you</h2>
        <div className="lg:px-2 lg:py-[65px] h-125 flex justify-center items-center bg-[#052B51] rounded-[19px]">
          <div className="bg-[#052B51] gap-12  grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0   overflow-hidden w-[1211.687744140625px] h-[347.756591796875px]  ">

            {/* Step 1 */}
            <div className=" pl-8 py-20 flex flex-col items-start gap-4 border-l-[2px] border-[#1B3B5BE0]  ">
              <img src={chat} alt="chat box" className="w-15 h-15 inline-block" />


              <h3 className="font-medium font-Inter text-[#FFFFFF] text-[24px] leading-[140%] tracking-normal">Let’s Talk</h3>
              <p className="font-normal text-[16px] text-[#FFFFFF6E] font-Inter leading-[170%] tracking-normal text-sm">
                We start with a friendly conversation to understand what you need.
              </p>
            </div>

            {/* Step 2 */}
            <div className="pl-8 py-20 flex flex-col items-start gap-4 border-l-[2px] border-[#1B3B5BE0] ">
              <img src={cogs} alt="cogs" className="w-15 h-15 inline-block" />
              <h3 className="font-medium font-Inter text-[#FFFFFF] text-[24px] leading-[140%] tracking-normal">We Build It for You</h3>
              <p className="font-normal text-[16px] text-[#FFFFFF6E] font-Inter leading-[170%] tracking-normal text-sm">
                Our team designs the perfect solution that fits your business.
              </p>
            </div>

            {/* Step 3 */}
            <div className="pl-8 py-20 flex flex-col items-start gap-4  border-l-[2px] border-[#1B3B5BE0]  ">
              <img src={rocketIcon} alt="Rocket Icon" className="w-15 h-15 inline-block" />
              <h3 className="font-medium font-Inter text-[#FFFFFF] text-[24px] leading-[140%] tracking-normal">Launch & Support</h3>
              <p className="font-normal text-[16px] text-[#FFFFFF6E] font-Inter leading-[170%] tracking-normal text-sm">
                We set everything up and stay by your side for ongoing help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

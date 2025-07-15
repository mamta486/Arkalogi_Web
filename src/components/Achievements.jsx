import achivementImage from '../assets/achivement.jpg';

export default function AchievementsSection() {
  return (
    <div className="bg-[#FFFCF4] py-50 px-15 h-[800px]">
      <div className="w-full  flex flex-col md:flex-row items-center gap-35">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src={achivementImage}
            alt="Achievements"
            className="rounded-[2px] w-162 h-136 "
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-[56px] md:text-4xl leading-[110.00000000000001%] tracking-normal text-[#052B51] font-semibold mb-4 font-Syne">
            What We’ve <br /> Achieved
          </h2>
          <p className="text-[#666B81] font-medium mb-6 font-Inter ">
            With over 200 projects completed, we pride ourselves on delivering exceptional results.
            Our clients consistently rate us with a satisfaction score of 95%.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-start gap-8 mb-6">
            <div>
              <h3 className="text-[36px] font-medium text-[#44607D] leading-[110.00000000000001%] tracking-normal font-Syne">95%</h3>
              <p className="text-[16px]  text-[#666B81] leading-[24px] font-Inter">Client satisfaction is our top priority.</p>
            </div>
            <div>
              <h3 className="text-[36px] font-medium text-[#44607D] leading-[110.00000000000001%] tracking-normal font-Syne">200</h3>
              <p className="text-[16px]  text-[#666B81] leading-[24px] font-Inter">Project delivered on time.</p>
            </div>
          </div>

        <button className="px-6 py-2 bg-[#1F4376]  border-[1px] border-[#8B8B8B] text-white rounded-md shadow hover:bg-[#44607D] transition  cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

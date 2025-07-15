import React, { useState } from "react";

// Import square (big) images
import man1 from "../assets/man1.jpg";
import man2 from "../assets/man2.jpg";
import man3 from "../assets/man3.jpg";
import man4 from "../assets/man4.jpg";
import man5 from "../assets/man5.jpg";

// Import circle (thumb) images
import man1_thumb from "../assets/man1_thumb.jpg";
import man2_thumb from "../assets/man2_thumb.jpg";
import man3_thumb from "../assets/man3_thumb.jpg";
import man4_thumb from "../assets/man4_thumb.jpg";
import man5_thumb from "../assets/man5_thumb.jpg";

const reviewers = [
  {
    square: man1,
    thumb: man1_thumb,
    name: "Rakesh Sharma",
    title: "Founder @Emelia.io",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus est iste voluptatum, dolorem voluptas, excepturi harum quos omnis sunt, ex quia expedita ab enim repellat a quibusdam deserunt. Molestiae.",
  },
  {
    square: man2,
    thumb: man2_thumb,
    name: "Amit Verma",
    title: "CTO @TechieHub",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus est iste voluptatum, dolorem voluptas, excepturi harum quos omnis sunt, ex quia expedita ab enim repellat a quibusdam deserunt. Molestiae.",
  },
  {
    square: man3,
    thumb: man3_thumb,
    name: "Vikram Singh",
    title: "Lead @PixelPlay",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus est iste voluptatum, dolorem voluptas, excepturi harum quos omnis sunt, ex quia expedita ab enim repellat a quibusdam deserunt. Molestiae.",
  },
  {
    square: man4,
    thumb: man4_thumb,
    name: "Sahil Khurana",
    title: "Manager @NextGen",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus est iste voluptatum, dolorem voluptas, excepturi harum quos omnis sunt, ex quia expedita ab enim repellat a quibusdam deserunt. Molestiae.",
  },
  {
    square: man5,
    thumb: man5_thumb,
    name: "Neha Joshi",
    title: "Engineer @OpenSoft",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus est iste voluptatum, dolorem voluptas, excepturi harum quos omnis sunt, ex quia expedita ab enim repellat a quibusdam deserunt. Molestiae.",
  },
];

export default function ReviewerGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="bg-[#fffdf6] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[66px] leading-[110.00000000000001%] tracking-[-2%] font-bold text-[#214577] mb-10 font-Syne ">
          Our top pick reviewed 
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Big Square Image */}
          <div className="flex-shrink-0 ">
            <img
              src={reviewers[selectedIndex].square}
              alt={reviewers[selectedIndex].name}
              className="w-122 h-132 object-cover rounded-md shadow-lg"
            />
          </div>

          {/* Right: Review content */}
          <div className="text-left max-w-xl">
            <div className="text-2xl text-[#0C0C56] mb-2">★★★★★</div>
            <p className="text-[#3A3A31C2] font-medium text-[24px] leading-[160%] tracking-normal font-Inter mb-4">
              {reviewers[selectedIndex].review}
            </p>
            <p className="font-semibold text-[#052B51] leading-[160%] tracking-normal text-[16px] font-Inter">
              {reviewers[selectedIndex].name}
            </p>
            <p className="text-sm text-[18px]  text-[#0000008F] leading-[160%] tracking-normal font-normal font-Inter">
              {reviewers[selectedIndex].title}
            </p>
          </div>
        </div>

        {/* Bottom: Circle Thumbnails */}
        <div className="flex justify-start mt-10 gap-4">
          {reviewers.map((r, index) => (
            <img
              key={index}
              src={r.thumb}
              alt={`Reviewer ${index + 1}`}
              onClick={() => setSelectedIndex(index)}
              className={`w-18 h-18 rounded-full border-3 border-[#628CC8] cursor-pointer  transition-transform ${
                index === selectedIndex
                  ? "border-blue-600 scale-110"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

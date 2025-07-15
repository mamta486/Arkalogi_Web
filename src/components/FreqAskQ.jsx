import React, { useEffect } from "react";
import faqImage from "../assets/footer-bg.png";
import Navbar from "../components/Navbar.jsx";
import ContactFooterPage from "../components/ContactFooterPage.jsx";

export default function FAQPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <section className=" border-[#E6E6EB] flex items-center justify-center mt-15   " >
                <div className="text-center">
                    <h1 className="md:max-w-146  md:max-h-10 leading-[100%] font-semibold text-[50px] text-[#253E7F] tracking-normal font-syne mt-2 " >Help Center Resources</h1>
                    <p className="md:max-w-121 md:max-h-16 text-[#141B38] opacity-60 font-normal text-[14px]  leading-[160%] tracking-normal mt-6 mx-4 px-2 mb-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, vitae illum nam commodi cum velit iusto aperiam dolorum incidunt praesentium libero.

                    </p>
                </div>


            </section>

            <div className="flex justify-center">
                <div className="w-[1201.5px] h-px bg-[#cecece9c]"></div>
            </div>


            {/* Main Content Grid */}
            <main className="max-w-7xl  ">

                {/* Sidebar */}
                <div className="md:col-span-1 space-y-10 ml-29 ">
                    <div>
                        <h3 className="text-[#000000] font-semibold mt-8 text-[18px] leading-[160%] tracking-normal">Getting started</h3>
                        <div className="space-y-2 text-sm text-gray-700 gap-[10px] ">
                            <div className="pl-2  bg-[#DEE6FA] mt-2 w-47 h-9 pt-2">
                                <span className=" font-normal text-[14px] leading-[160%] tracking-normal justify-center h-[10px] w-[99px]">Getting started</span></div>
                            <div className="pl-2 pt-2  w-47 h-9 ">
                                <span className="font-normal text-[14px] leading-[160%] tracking-normal justify-center h-[10px] w-[99px]">How do I set my account?</span></div>

                            <div className="pl-2 pt-2  w-47 h-9 ">
                                <span className="font-normal text-[14px] leading-[160%] tracking-normal justify-center h-[10px] w-[99px]">How much does it cost</span></div>

                            <div className="pl-2 pt-2  w-47 h-9">
                                <span className="font-normal text-[14px] leading-[160%] tracking-normal justify-center h-[10px] w-[99px]">Is my data safe</span></div>

                        </div>
                        <div className="flex items-center">
                            <div className="h-[143.87px] w-[2px] -mt-33 -ml-0.5  bg-[#C4C4C4]"></div>
                        </div>

                        <div className="flex items-center">
                            <div className="h-[35.87px] w-[2px] -mt-81 -ml-0.5  bg-[#1D397A]"></div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-black font-bold mb-2">Contact</h3>
                        <div className="space-y-2 text-sm text-gray-700 gap-[10px]">
                            <div className="pl-2 pt-2  w-47 h-9  ">
                                <span className="font-normal text-[14px] leading-[160%] tracking-normal justify-center h-[10px] w-[99px]">Email support</span></div>
                            <div className="pl-2 pt-2  w-47 h-9">
                                <span className="font-normal text-[14px] leading-[160%] tracking-normal justify-center h-[10px] w-[99px]">Ask questions</span></div>
                        </div>

                        <div className="flex items-center">
                            <div className="h-[71.87px] w-[2px]  -ml-0.5 -mt-22  bg-[#C4C4C4]"></div>
                        </div>
                    </div>
                </div>

                {/* Main FAQs */}
                <div className="md:col-span-3 space-y-10">

                    {/* Static FAQ Section */}
                    <section className="space-y-8  ml-121 -mt-92">
                        <div className="md:max-w-177 md:max-h-28 ">
                            <h2 className="text-3xl font-semibold">Getting started</h2>
                            <p className="md:max-h-19 mt-2 opacity-60 font-normal text-[16px] leading-[160%] tracking-normal text-[#0A183CCC]">
                                Welcome to our resources page! Here, you'll find helpful tools and guides to get the most out
                                of our services. If you need further assistance, our chat widget and dedicated support team
                                are just a click away.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">How do I set my account?</h3>
                            <p className="md:max-h-19 mt-2 opacity-60 font-normal text-[16px] leading-[160%] tracking-normal text-[#0A183CCC]">
                                Welcome to our resources page! Here, you'll find helpful tools and guides to get the most out
                                of our services. If you need further assistance, our chat widget and dedicated support team
                                are just a click away.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">How much does it cost</h3>
                            <p className="md:max-h-19 mt-2 opacity-60 font-normal text-[16px] leading-[160%] tracking-normal text-[#0A183CCC]">
                                Welcome to our resources page! Here, you'll find helpful tools and guides to get the most out
                                of our services. If you need further assistance, our chat widget and dedicated support team
                                are just a click away.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Is my data safe</h3>
                            <p className="md:max-h-19 mt-2 opacity-60 font-normal text-[16px] leading-[160%] tracking-normal text-[#0A183CCC]">
                                Welcome to our resources page! Here, you'll find helpful tools and guides to get the most out
                                of our services. If you need further assistance, our chat widget and dedicated support team
                                are just a click away.
                            </p>
                        </div>
                    </section>

                    {/* Expandable FAQ Section */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-sm text-gray-500 mb-6">
                            If you do not find the answer you're looking for here, please reach out via the chat widget in
                            the bottom right of our website or reach out via email.
                        </p>
                        {/* <FAQAccordion /> */}
                    </section>

                    {/* Support CTA */}
                    <div className="gap-2 p-2 rounded-xl bg-[#F9F9FA] max-w-300 max-h-42">
                        <div className="bg-[#FFFFFF] rounded-xl p-6 flex items-center justify-between border-[#E6E6EB] max-w-296 max-h-38  ">
                            <div className="flex items-center gap-7 ">
                                <span className="text-2xl font-inter font-semibold size-[43px] leading-[130%] tracking-normal max-width-[43px] max-h-[56px] mt-2">🤔</span>
                                <p className="text-[32px] font-semibold text-[#141B38] leading-[130%] tracking-[-1%]">Couldn’t find your answer in the docs?</p>
                            </div>
                            <button className="bg-[#F9F9FA] text-[#141B38] font-semibold border-1px border-[#E6E6EB] pl-5 pr-3 py-3  rounded-sm hover:bg-[#253E7F] hover:text-white transition flex gap-2 text-[16px] leading-[170%] text-center w-56 h-[51px]">
                                <span className=" text-[16px] leading-[170%] w-[131px] h-[27px] ml-4">Contact Support</span>
                                <svg
                                    className="w-[20px] h-[20px] mt-1.5  group-hover:text-white transition-colors "
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 -960 960 960"
                                    fill="currentColor"
                                >
                                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                                </svg>

                            </button>
                        </div>
                    </div>

                </div>
            </main>

            <ContactFooterPage />
        </div>
    );
}

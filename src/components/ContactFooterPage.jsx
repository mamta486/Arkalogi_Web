import React from 'react';
import logo from '../assets/logo3.png';
import bgImage from '../assets/footer-bg.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


export default function CTAAndFooter() {
  const icons = [
    { id: 'facebook', icon: <FaFacebook /> },
    { id: 'instagram', icon: <FaInstagram /> },
    { id: 'twitter', icon: <FaTwitter /> },
    { id: 'youtube', icon: <FaYoutube /> },
  ];

  return (
    <div
      className="w-full bg-[#101F43] text-white pt-8 pb-28"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* CTA Section */}
      <section className="w-full flex justify-center pt-7 pb-12">
        <div className="w-full max-w-[1480px] mx-auto bg-[#183271] rounded-[13px] shadow-lg relative overflow-hidden flex flex-col items-center justify-center px-8 py-20 -mt-8">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.10) 0%, rgba(24,50,113,0.95) 80%)',
              zIndex: 0,
            }}
          />
          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-[60px] sm:text-5xl font-semibold mb-4 leading-tight text-center font-Syne">
              Learn how we <br className="hidden sm:block" /> can help.
            </h2>
            <p className="text-gray-300 mb-8 text-center max-w-2xl font-Inter text-[16px]">
              Get expert tips, service updates, and real-world solutions<br />
              on how Arkalogi can help your business thrive.
            </p>
            <button className="w-[202px] h-[41px] rounded bg-white flex items-center justify-center gap-2 cursor-pointer py-[18px] group">
              <span className="font-medium text-[16px] tracking-[-0.01em] leading-[170%] text-[#062361] font-inter">
                Let’s talk
              </span>
              <svg
                className="w-6 h-6 text-[#062361]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="w-full flex justify-center max-h-screen">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 px-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-3 items-start">
            <img src={logo} alt="Arkalogi Logo" className="h-12 w-auto object-contain" />
            <p className="text-sm text-gray-400 text-[16px] font-Inter leading-[150%] tracking-normal">Copyright © 2013 - 2021 Arkalogi</p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {/* Product */}
            <div
              className="flex flex-col"
              style={{ width: '105px', height: '115px', gap: '14px' }}
            >
              <div>
                <h4 className="font-bold mb-[14px] text-[14px] leading-[150%] tracking-normal">Product</h4>
                <ul className="space-y-3 font-Inter text-[14px] leading-[170%] tracking-[2%] text-gray-400">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Help & Support</li>
                </ul>
              </div>
            </div>

            {/* Legal */}
            <div
              className="flex flex-col"
              style={{ width: '134px', height: '87px', gap: '14px' }}
            >
              <div>
                <h4 className="font-bold mb-[14px] text-[14px] leading-[150%] tracking-normal">Legal</h4>
                <ul className=" font-Inter text-[14px] leading-[170%] tracking-[2%] text-gray-400">
                  <li className='mb-3'>Terms & Conditions</li>
                  <li className='mb-3'>Privacy Policy</li>
                </ul>
              </div>
            </div>

            {/* Company + Connect with Us */}
            <div className="flex flex-col  h-76 sm:h-54 w-auto">
              <div className="flex flex-col">
                <h4 className="font-bold mb-[14px] text-[14px] leading-[150%] tracking-normal">Company</h4>
                <ul className="space-y-1 font-Inter text-[14px]  leading-[170%] tracking-[2%] text-gray-400">
                  <li className='mb-3'>About</li>
                  <li className='mb-3'>Contact</li>
                  <li className='mb-3'>Careers</li>
                  <li className="font-medium mb-2 text-[14px] font-sans text-white mt-6">Connect With Us</li>
                </ul>
                <div className="flex space-x-2">
                  {icons.map(({ id, icon }) => (
                    <button
                      key={id}
                      
                    >
                      <div className="w-7 h-7 flex items-center justify-center text-[20px] opacity-60 hover:opacity-100 text-white cursor-pointer">
                        {icon}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
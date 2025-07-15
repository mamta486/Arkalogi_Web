import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: 'What services do you offer?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        question: 'How does the process work?',
        answer:
            'We follow a streamlined process involving consultation, planning, execution, and feedback to ensure client satisfaction.',
    },
    {
        question: 'What is your pricing?',
        answer:
            'Our pricing is flexible and tailored to your project scope. Contact us for a detailed quote.',
    },
    {
        question: 'Do you offer support?',
        answer:
            'Yes, we provide dedicated support after project delivery through email and live chat.',
    },
];

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto h-[824px] py-36 px-20 text-center">
            <h2 className="lg:text-6xl md:text-4xl font-semibold font-Syne text-[#2C5186] mb-12 leading-[100%] tracking-normal">
                Your answers to <br /> popular questions
            </h2>
            <div className="space-y-5 text-left">
                {faqs.map((faq, index) => (
                    <div key={index} className=" pt-2 border-[#E6E6EB]">
                        <button
                            className="w-full flex items-center gap-5  text-blue-900 font-medium text-lg "
                            onClick={() => toggleFAQ(index)}
                        >
                           
                            {activeIndex === index ?  (
                                <ChevronUp className="w-5 h-5  " />
                            )
                             : 
                            (
                                <ChevronDown className="w-5 h-5" />
                            )}

                             <span className='text-[20px] font-Inter font-medium leading-[100%] tracking-normal'>{faq.question}</span>
                        </button>
                        {activeIndex === index && (
                            <p className="pl-10 mt-2 text-sm text-[#0E274A] font-Inter font-normal text-[14px] leading-[170%] tracking-normal opacity-60">{faq.answer}</p>
                        )}

                        <div className="flex justify-center">
                <div className="w-[1400.5px] mt-7 h-px bg-[#cecece9c]"></div>
            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Where i can find instructions to technology process?',
    answer:
      'We are committed to providing our customers with exceptional service while offering our employees the best training. There are many variations of passages of lorem ipsum is simply free text.',
  },
  {
    question: 'How to work with industrum?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    question: 'inim veniam, quis nostrud exercitation ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#001103] px-4 sm:px-6 md:px-8 xl:px-[3.75rem] pt-10 md:pt-[4.1rem] xl:pt-[5.125rem] pb-12 md:pb-[6rem] xl:pb-[7.5rem] flex flex-col md:flex-row items-start gap-8 md:gap-10">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <p className="text-[#16A831] text-sm sm:text-[0.95rem] md:text-[1rem] font-semibold">FAQs</p>
        <h2 className="text-[#F8FAFC] leading-tight sm:leading-snug md:leading-none font-['Plus_Jakarta_Sans'] text-[1.875rem] sm:text-[2.25rem] md:text-[2.4275rem] lg:text-[3rem] font-extrabold">
          Lorem Ipsum is not simply random text
        </h2>
        <p className="text-[#94A3B8] text-[0.875rem] sm:text-[0.9rem] md:text-[1rem] max-w-full md:max-w-[75%] lg:p-[0.625rem] sm:p-[0.5625rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <button className="font-['Open_Sans'] bg-[#16a831] text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-[4px] w-max">
          Read More &rarr;
        </button>
      </div>

      {/* Right Content - FAQ Accordion */}
      <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-4 mt-6 md:mt-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-xs font-['Open_Sans'] overflow-hidden transition-all duration-300 bg-white`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left px-4 sm:px-6 md:px-6 py-3 sm:py-4 flex justify-between items-center font-semibold text-sm sm:text-[0.95rem] md:text-[1rem] ${
                activeIndex === index ? 'text-[#eba000]' : 'text-gray-700'
              }`}
            >
              <span>{index + 1}. {faq.question}</span>
              <span className="text-xl sm:text-[1.25rem]">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <p className="px-4 sm:px-6 md:px-6 pb-3 sm:pb-4 md:pb-4 text-[0.875rem] sm:text-[0.95rem] md:text-[1rem] text-gray-700">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

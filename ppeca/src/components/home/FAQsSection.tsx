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
    <section className="bg-[#041904] py-20 px-6 md:px-20 flex flex-col md:flex-row items-start gap-10">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <p className="text-green-500 text-sm font-semibold">FAQs</p>
        <h2 className="text-white text-4xl font-bold leading-tight">
          Lorem Ipsum is not simply random text
        </h2>
        <p className="text-gray-300 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md w-max hover:bg-green-600 transition">
          Read More &rarr;
        </button>
      </div>

      {/* Right Content - FAQ Accordion */}
      <div className="md:w-1/2 flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-md overflow-hidden transition-all duration-300 ${
              activeIndex === index ? 'bg-white' : 'bg-white'
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left px-6 py-4 flex justify-between items-center font-semibold ${
                activeIndex === index ? 'text-orange-400' : 'text-gray-700'
              }`}
            >
              <span>{index + 1}. {faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <p className="px-6 pb-4 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

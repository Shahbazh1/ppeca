"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "923194436740"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hello! I want to chat.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-5 right-5 z-[9999]
        bg-green-500 hover:bg-green-600
        p-3 rounded-full
        shadow-md
        transition-all duration-300
        hover:scale-110
      "
    >
      <FaWhatsapp size={34} className="text-white" />
    </a>
  );
}

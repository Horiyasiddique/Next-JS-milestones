import React from "react";

interface ServProps {
  service: string;
  serviceDescription: string;
  bgColor: string;
}

function ServiceCard({ service, serviceDescription, bgColor }: ServProps) {
  return (
    <div
      className="relative w-full sm:w-[300px] md:w-[400px] h-[200px] flex flex-col justify-center items-center gap-5 py-6 px-4 rounded-2xl shadow-md shadow-slate-400 overflow-hidden transition-all duration-500 transform group hover:scale-105"
      style={{ backgroundColor: bgColor }}
    >
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FDC435] group-hover:animate-glow"></div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FDC435] via-[#FFD700] to-[#FDC435] opacity-0 group-hover:opacity-100 group-hover:animate-borderGlow"></div>
      <div className="relative z-10 text-center">
        <h1 className="comfortaa-semibold text-2xl sm:text-3xl md:text-4xl text-black transition-all duration-500 group-hover:text-gray-800">
          {service}
        </h1>
        <p className="comfortaa-regular text-sm sm:text-base md:text-[1rem] text-black transition-all duration-500 group-hover:text-gray-600">
          {serviceDescription}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;

import React from "react";
import Image from "next/image";
import images from "../../public/yellow-bg-image.png";

export default function Home() {
  return (
    <div
      className="w-screen min-h-screen px-5 sm:pl-20 flex flex-col-reverse lg:flex-row items-center relative"
      id="home"
    >
      {/* Text part [left] */}
      <div className="lg:w-[55%] w-full flex flex-col justify-center gap-5 z-10 text-center lg:text-left">
        <h1 className="text-xl sm:text-2xl text-[#FDC435] comfortaa-regular">
          Frontend Developer
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-black comfortaa-semibold lg:w-[90%]">
          Hello, my name is Hooriya Siddique
        </h1>
        <p className="text-sm sm:text-[18px] text-slate-500 font-sans mx-auto lg:mx-0 lg:w-96">
          I am Horiya Siddique, a passionate Frontend web developer. Explore my
          journey, projects, and skills as I aim to build impactful digital
          experiences.
        </p>

        {/* Buttons for social media and projects */}
        <div className="flex justify-center lg:justify-start gap-4 sm:gap-8 items-center mt-4">
          <button className="bg-[#FDC435] text-black rounded-md px-5 py-2">
            Projects
          </button>
          <button className="border-2 border-black text-black rounded-md px-5 py-2">
            <a
              href="https://www.linkedin.com/in/hooriya-siddique-b08754301"
              target="_blank"
            >
              LinkedIn
            </a>
          </button>
        </div>
      </div>

      {/* Image part [right] */}
      <div className="w-full lg:w-auto lg:absolute lg:top-0 lg:right-0 flex justify-center lg:justify-end z-10">
        <Image
          src={images}
          alt="yellow background image for portfolio hero section"
          className="w-[300px] sm:w-[400px] lg:w-[600px]"
        />
      </div>
    </div>
  );
}

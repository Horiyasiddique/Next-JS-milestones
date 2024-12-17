import React from "react";
import Image from "next/image";
import images from "../../public/bg-2.png";

export default function Page() {
  return (
    <div className="w-screen min-h-screen px-5 sm:px-14 py-10" id="about">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start gap-10">
        {/* Text Section */}
        <div className="lg:w-[55%] flex flex-col justify-start gap-5 text-center lg:text-left">
          <h1 className="comfortaa-semibold text-3xl sm:text-4xl text-slate-950">
            About Me
          </h1>

          <p className="text-sm sm:text-lg text-slate-800 comfortaa-regular leading-7 lg:w-[700px]">
            I am a passionate frontend developer skilled in GSAP, Locomotive
            Scroll, Barba.js, and Lenis. With these powerful tools, I specialize
            in creating visually appealing, highly interactive, and smoothly
            animated websites that captivate users and provide a memorable
            browsing experience. An engaging and well-animated website not only
            grabs attention but also enhances user interaction and
            accessibility, ensuring visitors stay longer and connect better with
            your content. I believe that every detail matters, from subtle
            transitions to immersive animations, and I strive to create designs
            that are both functional and aesthetically pleasing. Whether you're
            looking to modernize your website or build an entirely new frontend
            with seamless animations and elegant designs, I can help bring your
            vision to life and ensure your digital presence stands out.
          </p>

          <button className="w-36 sm:w-44 h-10 rounded-xl bg-[#FDC435] text-black text-[15px] sm:text-[17px] comfortaa-semibold mx-auto lg:mx-0">
            <a
              href="https://milestone-1-sigma-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
          <Image
            src={images}
            alt="Description of the image"
            width={502}
            height={465}
            className="object-cover rounded-full w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import images from "../../public/image.jpg"

export default function About() {
  return (
    <div id="about">
      <div id="about-container">
        <div id="about-text-sec">
          <h1 id="about-heading">
            ABOUT <span id="me">ME</span>
          </h1>

          <p className="about-paras">
            I am a passionate frontend developer skilled in GSAP, Locomotive
            Scrol, Barba.js, and Lenis. With these powerful tools I specialize
            in creating visually appealing, highly interactive, and smoothly
            animated websites that captivate users and provide a memorable
            browsing experience. An engaging and well-animated website not only
            grabs attention but also enhances user interaction and
            accessibility, ensuring visitors stay longer and connect better with
            your content. I believe that every detail matters, from subtle
            transitions to immersive animations and I strive to create designs
            that are both functional and aesthetically pleasing. Whether you are
            looking to modernize your website or build an entirely new frontend
            with seamless animations and elegant design, I can help bring your
            vision to life and ensure your digital presence stands out
          </p>

          <button id="button">
            <a
              href="https://milestone-1-sigma-eight.vercel.app/"
              target="_blank"
            >
              View Resume
            </a>
          </button>
        </div>

        <div id="about-img-sec">
          <Image
            src={images}
            alt="Description of the image"
            width={502}
            height={465}
            id="about-img"
          />
        </div>
      </div>
    </div>
  );
}

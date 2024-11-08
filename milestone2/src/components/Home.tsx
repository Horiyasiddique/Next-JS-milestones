import React from "react";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import images from "../../public/images.jpeg";

export default function Home() {
  return (
    <div className="bg-slate-950 w-screen h-screen" id="home">
      <div className="flex flex-col justify-center items-center my-32 mx-10 ">
        <div>
          <Image
            src={images}
            alt="Description of the image"
            width={300}
            height={300}
            className="object-cover rounded-full w-[200px] h-[200px]"
          />
        </div>
        <div>
          <h1 className="font-extrabold text-4xl text-slate-300 my-4">
            HOORIA SIDDIQUI
          </h1>

          <p className="text-xl text-white font-medium text-center">
            I'm Frontend Web Developer
          </p>

          <div className="flex justify-center items-center text-white text-2xl m-4 gap-3 ">
            <a
              href="https://www.linkedin.com/in/hooriya-siddique-b08754301"
              target="_blank"
              className="hover:scale-125"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://github.com/Horiyasiddique"
              target="_blank"
              className="hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/horiyasiddique/profilecard/?igsh=MW9sZTAycXdyaW9ybg=="
              target="_blank"
              className="hover:scale-125"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/12GKtnQNmLP/"
              target="_blank"
              className="hover:scale-125"
            >
              <FaFacebook />
            </a>
          </div>

          <button className="w-48 h-9 rounded-2xl bg-pink-700 text-white text-xl font-semibold p-1 my-4 mx-12 hover:scale-105">
            <a
              href="https://milestone-1-sigma-eight.vercel.app/"
              target="_blank"
            >
              View Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

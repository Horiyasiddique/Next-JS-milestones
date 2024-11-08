import React from "react";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import images from "../../public/images.jpeg";

export default function Home() {
  return (
    <div id="home">
      <div id="home-container">
        <div>
          <Image
            src={images}
            alt="Description of the image"
            width={300}
            height={300}
            id="home-image"
          />
        </div>
        <div>
          <h1 id="home-name">HOORIA SIDDIQUI</h1>

          <p id="home-para">I'm Frontend Web Developer</p>

          <div id="socialmedia-link-container">
            <a
              href="https://www.linkedin.com/in/hooriya-siddique-b08754301"
              target="_blank"
              className="social-media-icons"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://github.com/Horiyasiddique"
              target="_blank"
              className="social-media-icons"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/horiyasiddique/profilecard/?igsh=MW9sZTAycXdyaW9ybg=="
              target="_blank"
              className="social-media-icons"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/12GKtnQNmLP/"
              target="_blank"
              className="social-media-icons"
            >
              <FaFacebook />
            </a>
          </div>

          <button>
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

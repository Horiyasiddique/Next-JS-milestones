import React from "react";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

import images from "../../public/image.jpg"

export default function Home() {
  return (
    <div id="home">
      <div id="home-container">
        <div id="home-img-part">
          <Image
            src={images}
            alt="Description of the image"
            width={300}
            height={300}
            id="home-image"
          />
        </div>
        <div id="home-text-part">
          <h1 id="home-name">Hello I am Hooriya Siddique</h1>

          <h1 id="profession">FRONTEND DEVELOPER</h1>

          <p id="home-para">
            I am Horiya Siddique , A passionate Frontend web developer. Explore
            my journey, projects, and skills as I aim to build impactful digital
            experiences.
          </p>

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

          <button id="button">
            <a href="#contact">Contact Me</a>
          </button>
        </div>
      </div>
    </div>
  );
}

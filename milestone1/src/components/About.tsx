import React from 'react';
import Image from "next/image";
import images from "../../public/images.jpeg";

export default function About() {
  return (
    <div id="about">
      <div id="about-container">
        <div>
          <h1 id="about-heading">
            HI, I&apos;M <span id="about-name">HOORIA SIDDIQUI</span>
          </h1>

          <p className="about-paras">
            I&apos;m based in Karachi, Pakistan. As a brilliant student in 9th grade
            at Modern Islamic Grammar School, I'm also passionate about Web 3.0,
            AI, and the metaverse, actively learning at the Governor Initiative
            for Generative AI, Metaverse, and Web 3.0.
          </p>

          <p className="about-paras">
            I&apos;m building a strong foundation in technology with skills in HTML,
            CSS, JavaScript, TypeScript, and Tailwind CSS, and I’m now exploring
            Next.js and React.js
          </p>

          <p className="about-paras">
            My vision is to apply my knowledge to solve real-world challenges,
            develop impactful solutions, and keep growing in the fields of web
            development and artificial intelligence.
          </p>

          <button>
            <a
              href="https://milestone-1-sigma-eight.vercel.app/"
              target="_blank"
            >
              View Resume
            </a>
          </button>
        </div>

        <div>
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

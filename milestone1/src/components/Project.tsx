import React from "react";
import Image from "next/image";
import project1 from '../../public/project1.jpeg';
import project2 from '../../public/project2.jpeg';
import project3 from '../../public/project3.jpeg';

export default function Project() {
  return (
    <div id="project">
      <h1 id="project-heading">
        Projects
      </h1>

      <div id="projects-card-container">
        {/* first card projects 01 */}
        <div className="projects-cards">
          <Image
            src={project1}
            alt="Description of the image"
            width={502}
            height={465}
            className="object-cover rounded-full w-[200px] h-[200px]"
          />

          <a
            href="https://hackathons-resume-builder.vercel.app/"
            target="_blank"
            className="text-3xl text-slate-800 font-bold mt-3"
          >
            {" "}
            Resume Builder
          </a>
        </div>

         {/* second card projects 02 */}
         <div className="projects-cards">
          <Image
            src={project2}
            alt="Description of the image"
            width={502}
            height={465}
            className="object-cover rounded-full w-[200px] h-[200px]"
          />

          <a
            href="https://tic-tac-toe-chi-mauve.vercel.app/"
            target="_blank"
            className="text-3xl text-slate-800 font-bold mt-3"
          >
            {" "}
            Tic-Tac-Toe Game
          </a>
        </div>

         {/* third card projects 03 */}
         <div className="projects-cards">
          <Image
            src={project3}
            alt="Description of the image"
            width={502}
            height={465}
            className="object-cover rounded-full w-[200px] h-[200px]"
          />

          <a
            href="https://java-script-gray.vercel.app/"
            target="_blank"
            className="text-3xl text-slate-800 font-bold mt-3"
          >
            {" "}
           Rock Paper Scissors 
          </a>
        </div>
      </div>
    </div>
  );
}

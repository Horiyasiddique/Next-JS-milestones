import React from "react";
import Image from "next/image";
import project1 from '../../public/project1.jpeg'
import project2 from '../../public/project2.jpeg'
import project3 from '../../public/project3.jpeg'

export default function page() {
  return (
    <div  id="project">
      <h1 className="font-extrabold text-4xl text-slate-300 my-20 mx-10 ">
        Projects
      </h1>

      <div className="flex justify-around items-center flex-wrap gap-6">
        {/* first card projects 01 */}
        <div className="h-[300px] w-[300px] bg-slate-300 rounded-md flex flex-col justify-center items-center">
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
         <div className="h-[300px] w-[300px] bg-slate-300 rounded-md flex flex-col justify-center items-center">
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
         <div className="h-[300px] w-[300px] bg-slate-300 rounded-md flex flex-col justify-center items-center">
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

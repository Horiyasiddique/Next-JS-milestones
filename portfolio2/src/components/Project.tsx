// import React from 'react'
// import ProjectCard from './ProjectCard'
// import Project1 from "../../public/project1.jpeg"
// import Project2 from "../../public/project2.jpeg"
// import Project3 from "../../public/project3.jpeg"
// function Project() {
//   return (
//     <div className='w-screen min-h-screen py-10 px-16 flex flex-col gap-7'>
//       <div className='flex justify-center items-center'>
//         <h1 className='py-2 text-4xl text-black comfortaa-semibold border-b-2 border-[#FDC435]'>Projects</h1>
//       </div>
//       <div className='flex justify-between items-center flex-wrap'>
//       <ProjectCard image={Project1} name='Resume Generator' ProjectDescription='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolore sapiente eveniet! Quia quaerat harum quos omnis reiciendis ad rem!' VercelURL='#'/>
//       <ProjectCard image={Project2} name='Tic-Tac-Toe Game' ProjectDescription='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolore sapiente eveniet! Quia quaerat harum quos omnis reiciendis ad rem!' VercelURL='#'/>
//       <ProjectCard image={Project3} name='Rock Paper Scissors Game' ProjectDescription='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolore sapiente eveniet! Quia quaerat harum quos omnis reiciendis ad rem!' VercelURL='#'/>
//     </div>
//     </div>
//   )
// }

// export default Project


import React from 'react';
import ProjectCard from './ProjectCard';
import Project1 from "../../public/project1.jpeg";
import Project2 from "../../public/project2.jpeg";
import Project3 from "../../public/project3.jpeg";

function Project() {
  return (
    <div className="w-screen min-h-screen py-10 px-5 sm:px-10 md:px-16 flex flex-col gap-10">
      {/* Section Title */}
      <div className="flex justify-center items-center">
        <h1 className="py-2 text-3xl sm:text-4xl text-black comfortaa-semibold border-b-2 border-[#FDC435]">
          Projects
        </h1>
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center md:justify-between gap-10">
        <ProjectCard
          image={Project1}
          name="Resume Generator"
          ProjectDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolore sapiente eveniet! Quia quaerat harum quos omnis reiciendis ad rem!"
          VercelURL="https://hackathons-resume-builder.vercel.app/"
        />
        <ProjectCard
          image={Project2}
          name="Tic-Tac-Toe Game"
          ProjectDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolore sapiente eveniet! Quia quaerat harum quos omnis reiciendis ad rem!"
          VercelURL="https://tic-tac-toe-chi-mauve.vercel.app/"
        />
        <ProjectCard
          image={Project3}
          name="Rock Paper Scissors Game"
          ProjectDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolore sapiente eveniet! Quia quaerat harum quos omnis reiciendis ad rem!"
          VercelURL="https://java-script-gray.vercel.app/"
        />
      </div>
    </div>
  );
}

export default Project;

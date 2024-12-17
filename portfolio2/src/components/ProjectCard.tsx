import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface Props {
  name: string;
  ProjectDescription: string;
  image: StaticImageData;
  VercelURL: string;
}

function ProjectCard({ name, ProjectDescription, image, VercelURL }: Props) {
  return (
    <div className="relative w-[300px] h-[350px] overflow-hidden rounded-lg shadow-lg group">
      {/* Project Image */}
      <Image
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />

      {/* Sliding Overlay */}
      <div className="absolute bottom-[-100%] left-0 w-full h-full bg-[rgba(253,196,53,0.9)] text-white flex flex-col justify-center items-center text-center px-4 group-hover:bottom-0 transition-all duration-500">
        <h3 className="text-3xl text-black comfortaa-semibold">{name}</h3>
        <p className="text-sm text-slate-600 mt-2">{ProjectDescription}</p>
        <a
          href={VercelURL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 border-[1px] border-black text-black py-2 px-4 rounded-3xl"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { RiLinkM } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

interface CardProps {
  imageSource: StaticImageData;
  name: string;
  GitHubURL: string;
  VercelLink: string;
}
function ProjectCards({ imageSource, name, GitHubURL, VercelLink }: CardProps) {
  return (
  
    <div className="project-cards">
      {/* Image */}
      <div className="image-container">
        <Image src={imageSource} alt="Project Image" />
      </div>
      {/* Project Details */}
      <div className="project-detail">
        <h2>{name}</h2>
        <div className="project-links">
          <a href={GitHubURL} target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href={VercelLink} target="_blank" rel="noopener noreferrer">
            <RiLinkM />
          </a>
        </div>
      </div>
    </div>
  );
}





export default ProjectCards;

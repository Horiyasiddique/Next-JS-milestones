import React from "react";
import Image from "next/image";
import project1 from "../../public/project1.jpeg";
import project2 from "../../public/project2.jpeg";
import project3 from "../../public/project3.jpeg";
import ProjectCards from "./ProjectCards";

export default function Project() {
  return (
    <div id="project">
      <h1 id="project-heading">Projects</h1>

      <div id="projects-card-container">
        <ProjectCards
          imageSource={project1}
          name="Resume Builder"
          GitHubURL="https://github.com/Horiyasiddique/Hackathons-Resume-Builder/tree/6ef69cc6aacc625f00c4f86810913f396b013162/Milestone%205%20(dynamic%20resume%20builder%20with%20shareable%20link%20and%20download%20button%20)"
          VercelLink="https://hackathons-resume-builder.vercel.app/"
        />

        <ProjectCards
          imageSource={project2}
          name="Tic Tac Toe Game"
          GitHubURL="https://github.com/Horiyasiddique/JavaScript/tree/1bde42b2868c570a5bbb4354de272c2f1d78f09b/Tic-Tac-Toe"
          VercelLink="https://tic-tac-toe-chi-mauve.vercel.app/"
        />

        <ProjectCards
          imageSource={project3}
          name="Rock Paper Scissors Game"
          GitHubURL="https://github.com/Horiyasiddique/JavaScript/tree/1bde42b2868c570a5bbb4354de272c2f1d78f09b/Rock%20Paper%20Scissors%20Game"
          VercelLink="https://java-script-gray.vercel.app/"
        />

       


        
      </div>
    </div>
  );
}

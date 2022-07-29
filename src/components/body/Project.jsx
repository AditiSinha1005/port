import React from 'react'
import ProjectCard from './ProjectCard'
import ashes from "../../assets/Studying-bro.png";
import Separator from './Separator';

const Project = () => {
  return (
    <>
      <Separator/>
      <div style={{marginTop: "1rem", fontSize:"2rem"}}>Project</div>
      <div className="projectCardBox">
        <span>
          <ProjectCard
            title="Movie Finder"
            description="It's an app that lets you find the movies of your choice made in react js"
            link=""
            image={ashes}
          />
        </span>
        <span>
          <ProjectCard
            title="HumbaBumba"
            description="adlsjfl fjalkdsfj laksdjf lkasdfj klasdfj kl;asdjf l;kasdjf l;kasdjf kl;asdfj lkasdjf akl;sdfj l;aksd"
            link="instagram.com"
            image={ashes}
          />
        </span>
        <span>
          <ProjectCard
            title="HumbaBumba"
            description="adlsjfl fjalkdsfj laksdjf lkasdfj klasdfj kl;asdjf l;kasdjf l;kasdjf kl;asdfj lkasdjf akl;sdfj l;aksd"
            link="instagram.com"
            image={ashes}
          />
        </span>
        <span>
          <ProjectCard
            title="HumbaBumba"
            description="adlsjfl fjalkdsfj laksdjf lkasdfj klasdfj kl;asdjf l;kasdjf l;kasdjf kl;asdfj lkasdjf akl;sdfj l;aksd"
            link="instagram.com"
            image={ashes}
          />
        </span>
      </div>
    </>
  );
}

export default Project
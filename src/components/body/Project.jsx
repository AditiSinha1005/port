import React from 'react'
import ProjectCard from './ProjectCard'
import ashes from "../../assets/Studying-bro.png";
import hulu from "../../assets/hulu.png";
import Separator from './Separator';

const Project = () => {
  return (
    <>
      <Separator/>
      <div style={{marginTop: "1rem", fontSize:"2rem"}}>Project</div>
      <div className="projectCardBox">
        <span>
          <ProjectCard
            title="Hulu"
            description="It's an app that lets you find the movies of your choice made in react js"
            link="https://port-umber-tau.vercel.app/"
            image={hulu}
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
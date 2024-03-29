import React from 'react'
import ProjectCard from './ProjectCard'
import ashes from "../../assets/Studying-bro.png";
import hulu from "../../assets/hulu.png";
import instantmoviefinder from  "../../assets/instantmoviefinder.png"
import googlekeep from "../../assets/newgooglekeep.png"
import chat from "../../assets/chatt.png"
import auth from "../../assets/auth.png"
import newgooglekeep from "../../assets/newgooglekeep.png"
import Separator from './Separator';

function Project() {
  return (
    <>
      <Separator />
      <div style={{ marginTop: "1rem", fontSize: "2rem" }}>Project</div>
      <div className="projectCardBox" id="proj">
        <span>
          <ProjectCard
            title="Hulu"
            description="It's an app similar to netflix that shows you the best shows,movies, webseries etc "
            link="https://zinder.vercel.app/"
            image={hulu} />
        </span>
        <span>
          <ProjectCard
            title="Instant movie finder"
            description="It's instantly helps you search your favourite movies and info about them"
            link="https://blog-cyan-nine.vercel.app/"
            image={instantmoviefinder} />
        </span>
        <span>
          <ProjectCard
            title="Google keep clone"
            description="It's basically a clone of Googlekeep that lets you add tasks to your list to keep track of the day"
            link="https://googlekeepclone.vercel.app/"
            image={newgooglekeep}/>
        </span>
         <span>
          <ProjectCard
            title="Mern Chat App "
            description="It is a real  chat apllication made using socket.io html javascript and nodejs "
            link="https://github.com/AditiSinha1005/chatbot"
            image={chat}/>
        </span>
        <span>
        <ProjectCard
            title="Login and Signup"
            description="Made the signup and login  frontend and backend  with user authentication using mongodb,
             jwt token,nodejs,react js,chakra ui for a group project "
            link="https://github.com/himanshu070/SmokeFreeMe"
            image={auth}/>
        </span>
      </div>
    </>
  );
}

export default Project
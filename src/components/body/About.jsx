import React from 'react'
import Social from './Social';
const About = () => {
  return (
      <>
      <div className='about'>
    <div className='about-top'>
    <div className='about-info'>
     Hello there 👋, <span className='aditi'>Aditi Sinha </span> this side.<br/>
     I am a web enthusiast and <br/>
      I am  looking for opportunities to enhance my skills and learn 
      new skills and work on projects.
    </div>
    <div className='about-photo'>
     <img src={require('../../assets/Studying-bro.png')} className='picture' alt='okay'/>
    </div>
    </div>

    <div className='about-bottom'><Social/></div>
    </div>
    </>
    

  );
}

export default About
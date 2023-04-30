import React from 'react'
import {Link} from 'react-scroll'
const Web = () => {
  return (
    <>
    <div className='weboption'>
      {/* <a href='#project'> */}
      <i class="fi fi-rr-edit-alt optionicon"></i><Link to="proj" spy={true} smooth={true} offset={50} duration={500} > PROJECTS </Link>
      {/* </a> */}
    </div>
    <div className='weboption'>
      <a href='#skill'>
      <i class="fi fi-rr-laptop optionicon"></i><Link to="skill" spy={true} smooth={true} offset={50} duration={500} > SKILLS</Link>
      </a>
    </div>
    <div className='weboption'>
      <a href='#work'>
      <i class="fi fi-rr-briefcase optionicon"></i><Link to="experience" spy={true} smooth={true} offset={50} duration={500} >EXPERIENCE</Link>
      </a>
    </div>
    <div className='weboption' id="contact">
      <a href='#user'>
      <i class="fi fi-rr-user-add"></i><Link to="experience" spy={true} smooth={true} offset={50} duration={500} >CONTACT</Link>
      </a>
    </div>
    <div className='weboption'>
      <a href='#user'>
      </a>
    </div>
    </>
  );
}

export default Web
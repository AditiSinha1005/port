import React from 'react'
const Mobile = ({Open,Setopen}) => {
  return (
    <div className='mobile'>
    <div onClick={() => Setopen(!Open)} className="close-icon">
        {/* <i class="fi-rr-cross-circle"></i> */}
        <div className='mobileoptions'>
        <i class="fi fi-rr-home hom"></i>
        <div className='mobileoption'>
      <a href='#project'>
      <i class="fi fi-rr-edit-alt optionicon"></i> PROJECTS
      </a>
    </div>
    <div className='mobileoption'>
      <a href='#skill'>
      <i class="fi fi-rr-laptop optionicon"></i>SKILLS
      </a>
    </div>
    <div className='mobileoption'>
      <a href='#work'>
      <i class="fi fi-rr-briefcase optionicon"></i>EXPERIENCE
      </a>
    </div>
    <div className='mobileoption'>
      <a href='#user'>
      <i class="fi fi-rr-user-add"></i>CONTACT
      </a>
    </div>
      </div>
      </div>
    </div>
  );
}

export default Mobile
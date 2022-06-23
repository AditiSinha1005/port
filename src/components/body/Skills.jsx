import React from 'react'
import { b } from '../data/skills'
import Separator from './Separator'
const Skills = () => {
  const data=b;
  return (
    <div className='skills'>
    <>
    <Separator/>
    <label className='title'>Skills</label>
    <div className='skilllist'>
     {data.map((item)=>{
       return(
        <div className='skillsection'>
          <label className='skillname'>{item.type}</label>
          <div className='skillicon'>
            {item.list.map((item)=>{
              return(
                <div className='cmain'>
               <div className='card'>
               <div className='icon'>{item.icon}</div>
               <label className='iconname'>{item.name}</label>
               </div>
               </div>
              );
            })}
          </div>
        </div>
       )
     })}
    </div>
    </>
    </div>
  ) 
}

export default Skills
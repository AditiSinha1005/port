import React from 'react'
import { work } from '../data/work'
import Separator from './Separator'

const Experience = () => {
  const data=work;
  return (
    <>
     <div className='experience'>
     <Separator/>
    <label className='title'>Experience</label>
    <div className='exp'>
     {data.map((item)=>{
       return (
        <div className='experiencecard'>
         
         <img src={item.logo} className="expohoto"/>
         <div className='expdesc'>
         <label className='expname'>{item.name}</label>
         <div className='expdate'>
         {item.joining}
         </div>
         <div className='expwork'>
         <p >{item.work}</p>
         </div>
        
         

         </div>
         
        </div>
       
        
       );
         
       
     })}
    </div>
    </div>
    </>
  )
}

export default Experience
import React from 'react'
import {a} from "../data/social"
const Social = () => {
    const data=a;
  return (
    <div className='boss' id="social">
      {data.map((item)=>{
          return (
       <a href={item.link}  target="aditi">
       <div className='socialcontact'>
         <img src={item.icon} className='socialicon'/>
         </div>
       </a>

          );
      }
      )}
      </div>
   
  )
}

export default Social
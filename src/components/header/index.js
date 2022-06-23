import React, { useState } from 'react'
import Mobile from './Mobile'
import Web from './Web'
const Header = () => {
    const[Open,Setopen]=useState(true)
  return (
    <div className='header'>
        <div className='logo'>Portfolio</div>
        <div className='menu'>
            <div className='web'>
               <Web/>
            </div>
            <div className='mobile'>
            <div onClick={()=>Setopen(!Open)}>
            <i class="fi fi-rr-apps menu-icon ham"></i>
               </div>
               {Open && <Mobile Open={Open} Setopen={Setopen}/>}
            </div>
        </div>
    </div>
  );
}

export default Header
import React from 'react'
import About from './About'
import Contact from './Contact';
import Project from './Project';
import Skills from './Skills';
// import Work from './Experience';
import Experience from './Experience';

const Body = () => {
  return (
    <>
    <div><About/></div>
    
    <div><Project/></div>
    <div><Skills/></div>
    <div><Experience/></div>
    <div><Contact/></div>
    </>
  );
}

export default Body
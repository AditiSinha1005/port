import React from 'react'
import ContactLogos from './ContactLogos';
import Separator from './Separator';
const Contact = () => {
  return (
    <>
      <Separator/>
      <div id="contact">
      <div style={{ marginTop: "1rem", fontSize: "2rem" }}>Contact</div>
      <ContactLogos/>
      </div>
      {/* <div className='download'>
     <a download  href={require('../../assets/aditi.pdf').default}>download here </a>
      </div> */}
    </>
  );
}

export default Contact
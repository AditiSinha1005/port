import React from 'react'
import ContactLogos from './ContactLogos';
import Separator from './Separator';

const Contact = () => {
  return (
    <>
      <Separator/>
      <div style={{ marginTop: "1rem", fontSize: "2rem" }}>Contact</div>
      <ContactLogos/>
    </>
  );
}

export default Contact
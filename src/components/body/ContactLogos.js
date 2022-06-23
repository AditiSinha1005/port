import React from "react";
import { a } from "../data/contact";
const ContactLogos = () => {
  const data = a;
  return (
    <>
      <div className="boss">
        {data.map((item) => {
          return (
            <a href={item.link} target="aditi">
              <div className="socialcontact">
                <img src={item.icon} className="socialicon" />
              </div>
            </a>
          );
        })}
      </div>
      <div style={{margin: "1rem"}}>Email ID: 2006105@kiit.ac.in</div>
    </>
  );
};

export default ContactLogos;

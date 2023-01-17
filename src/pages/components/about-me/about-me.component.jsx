import React, { useState } from 'react';
import { Link } from 'gatsby'
import './about-me.css'
import profileImage from "../../../images/Profile_Pic.jpg"

function AboutMe() {
  const [name] = useState("Gabe Sousa");


  return (
    <div className="about-me">
      <img className="profile-image" src={profileImage} alt="Profile Image" />
      <div className="inner-container">
        <h1 className="about-me__name">{name}</h1>
        <p>I am a skilled frontend developer with experience building SPAs, WordPress sites, and pretty much anything a designer can throw at me. With my keen eye for design and a passion for learning new technologies. I am able to quickly adapt to the processes and workflow of any team. I have a love of code and a positive attitude that energizes those around me.</p>
				<div className='about-me__links'>
      <Link to="https://dev.to/gabe" target="_blank">👨🏽‍💻 Developer</Link>
      <Link to="/photographer">📷 Photographer</Link>
      <Link to="/HireMe">🤠 Hire Me</Link>
    </div>
      </div>
    </div>
  );
}

export default AboutMe;
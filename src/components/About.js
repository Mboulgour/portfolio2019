import React from 'react';

import './styles/About.scss';

const About = () => {
  return(
    <section className="about__container">
      <p className="about__title">
        Hi! My name is 
        <span className="about__name">Mathieu</span> 
        and this is my portfolio.
      </p>
    </section>
  );
};

export default About;
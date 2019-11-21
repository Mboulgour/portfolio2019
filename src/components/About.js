import React from 'react';

import './styles/About.scss';

const About = () => {
  return(
    <>
      <section className="about__container">
        <p className="about__title">
          Hi! My name is 
          <span className="about__name">Mathieu</span> 
          and this is my portfolio.
        </p>
        <p className="about__description">I'm a Junior developer looking for an internship.</p>
      </section>

      <section className="about__container--second">
        <p className="about__title--second">
          I'm studying 
          <span className="about__name--second">Javascript</span> 
          @ Wild Code School in Paris
        </p>
        <p className="about__description--second">Take a look at my projects!</p>
      </section>
    </>
  );
};

export default About;
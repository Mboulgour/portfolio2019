import React from 'react';

// import Codepen from "react-codepen-embed";
/* <Codepen hash="LYYmOgZ" user="mboulgour" height={500} width={500}/>
<Codepen hash="mddGaJP" user="mboulgour" />
<Codepen hash="wvvQWyv" user="mboulgour" /> */
import './styles/Portfolio.scss';

const projects = [{
  title: "Pixel-Hub",
  img: "https://user-images.githubusercontent.com/45493113/69327929-a5640780-0c4e-11ea-86b4-ae5d596098bb.png",
  description: `We decided to build a platform around photography, 
  where users would choose between different categories and could buy a special course with professional photographers. 
  We named it Pixel-Hub.`
},
{
  title: "TEST",
  img: "https://user-images.githubusercontent.com/45493113/69327929-a5640780-0c4e-11ea-86b4-ae5d596098bb.png",
  description: `We decided to build a platform around photography, 
  where users would choose between different categories and could buy a special course with professional photographers. 
  We named it Pefezferzf.`
},
{
  title: "3children",
  img: "https://user-images.githubusercontent.com/45493113/69327929-a5640780-0c4e-11ea-86b4-ae5d596098bb.png",
  description: `We decided to build a platform around photography, 
  where users would choose between different categories and could buy a special course with professional photographers. 
  We named it Pefezferzf.`
}
]

const Portfolio = () => {
  return(
    <section className="Portfolio__container" id="projects">
      {projects.map((elm, index) =>(
        <div key={index} className="Portfolio__article">
          <div className="Portfolio__title">
            {elm.title}
          </div>
          <div className="Portfolio__img_container">
            <img src={elm.img} alt="img-project" />
          </div>
          <div className="Portfolio__description">
            {elm.description}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
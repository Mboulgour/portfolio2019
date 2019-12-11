import React from 'react';

import Codepen from "react-codepen-embed";
import './styles/Portfolio.scss';

const projects = [{
  title: "Pixel-Hub",
  description: `First group project (7 students) at Wild Code School. HTML- CSS only (Javascript is bonus). We decided to build a platform around photography, 
  where users would choose between different categories and could buy a special course with professional photographers. 
  We named it Pixel-Hub.`,
  live: false,
  githubLink: 'https://github.com/Mboulgour/WildCodeSchool--Project1',
  liveLink: '',
},
{
  title: "PlantMe",
  description: `PlantMe is a web API based app using Trefle.io which is a database of plants. It provides documentation for each plant, a search engine and the capacity to add plants to a local garden. It also provide access to weather through another public API.`,
  live: false,
  githubLink: 'https://github.com/Mboulgour/WildCodeSchool--Project2.1',
  liveLink: '',
},
{
  title: "Hackloween",
  description: `As students at Wild Code Scool, we had to use an API (around the haloween theme) to build a website. The challenge lasted 24 hours. We were a group of 4 students and decided to build an RPG-like only for mobile game (try-and-die).`,
  live: false,
  githubLink: 'https://github.com/Mboulgour/WildCodeSchool--Hackathon--hackloween',
  liveLink: '',
},
{
  title: "Mini-Spotify",
  description: `Mini-spotify is an app using the Spotify developers Web-API. 
  It demands the authorization to access data from the user's Spotify Account (saved albums), returns a random artist and his albums from an array of my favorite artists
  and can access user's saved albums and display a list of it`,
  live: true,
  githubLink: 'https://github.com/Mboulgour/mini-spotify',
  liveLink: 'http://mini-spotify.netlify.com',
}
]

const Portfolio = () => {
  return(
    <section className="Portfolio__container" id="projects">
      <h1 className="Portfolio__section_title">Projects</h1>
      {projects.map((elm, index) =>(
        <div key={index} className="Portfolio__article">
          <div className="Portfolio__title">
            {elm.title}
          </div>
          <div className="Portfolio__description">
            <p>{elm.description}</p>
            <div className="Portfolio__btns">
              <a href={elm.githubLink} target='_blank' rel="noopener noreferrer" class="Portfolio__btn Portfolio__btn--primary">Github</a>
              {elm.live && <a href={elm.liveLink} target='_blank' rel="noopener noreferrer" class="Portfolio__btn">Live</a>}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
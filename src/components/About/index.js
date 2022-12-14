import React from 'react';
import selfPortrait from '../../assets/images/self.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="row about">
        <div className="col-4">
          <h1>Skills</h1>
          <p className="skills bio">
             JavaScript, React, CSS, MongoDB, Node, Responsive Web Design, HTML, Express, SQL, noSQL, Sequelize, GitHub, HandleBars, JQuery, Bootstrap
          </p>
        </div>
        <div className="col-8">
          <h1 id="about">About Me</h1>
          <img src={selfPortrait} className="self-portrait" alt="self portrait" />
          <p className="personal bio">Front-end web developer with a background in communication and communication disorders. Builds upon background to create a more straight-forward user experience. Recently earned a full stack development certificate from the University of Utah. Designs projects with a goal to make the experience intuitive and simplistic for the user, combining design and functionality of the webpage to do so. Previously designed online portfolios, responsive websites, React applications, and a full MERN stack video library as a member of teams. Currently assists in maintaining a website for a martial arts school. Excited for the opportunity to make and improve upon new projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
import React from "react";
import Gabby1 from '../main-images/gabby1.jpeg';
import projectsList from "../project-data";

import {Link} from 'react-router-dom'


export default function Home (){

    const recentProjects = projectsList.map((project, index) =>{
        return (
            <div className="work__box" key={index + 1}>
                <div className="work__text">
                <h3>#{index + 1} {project.title}</h3>
                <p>{project.description}</p>
                {project.tools.map((tool, index)=>{
                    return (
                        <ul key={index + 1} className="work__list">
                            <li>{tool}</li>
                        </ul>
                    )
                })}

                <div className="work__links">
                    <Link to={project.projectlink} target="_blank" className="link__text">
                     Visit Site <span>&rarr;</span>
                    </Link>
                    <Link to={project.githublink} title="View Source Code" target="_blank">
                    <img src={`${project.githubicon}`} className="work__code" alt="GitHub"/>
                    </Link>
                </div>
                </div>
                <div className="work__image-box">
                <img src={`${project.projectimage}`} className="work__image" alt={`Project ${index + 1}`} />
                </div>
            </div>

        )
    }).slice(0, 3)

    console.log(recentProjects)
    return (
    <div>
    
    <div className="header__text-box row">
      <div className="header__text">
        <h1 className="heading-primary">
          <span>Gabriel Egwu</span>
        </h1>
        {/* Put a small paragraph about yourself*/}
        <p>A Front-End Developer based in London, UK
        </p>
        <Link to="contact" className="btn btn--pink">Get in touch</Link>
      </div>
    </div>
    <main role="main">

    <section className="work" id="work">
    <div className="row">
        <h2>My Work</h2>
        <div className="work__boxes">
            {recentProjects}
        </div>
        
        <div>
        <Link to="projects" className="link__text view-more-projects">VIEW MORE PROJECTS</Link>
        </div>
    </div>
    </section>

 
        <section className="client" id="clients">
        <div className="row">
            <h2>Skills</h2>
            <div className="client__logos">
                <h4 className="client__logo">React</h4>
                <h4 className="client__logo">JavaScript</h4>
                <h4 className="client__logo">HTML</h4>
                <h4 className="client__logo">CSS</h4>
                <h4 className="client__logo">SCRUM</h4>
                <h4 className="client__logo">Agile</h4>
                <h4 className="client__logo">Git Version Control</h4>
                <h4 className="client__logo">UI/UX design</h4>
                <h4 className="client__logo">Responsive web desig</h4>
            </div>
        </div>
        </section>

        <section className="about" id="about">
        <div className="row">
            <h2>About Me</h2>
            <div className="about__content">
            <div className="about__text">
            <p>I'm a web developer and designer based in Newcastle, United Kingdom. I love building apps that solve real-world problems, and that are delightful to use. My specialities include JavaScript, React JS, Tailwind CSS, and Styled Components.</p>
                <p>I have  background in teaching and marketing, and I have a Masters Degree in Engineering Management from Northumbria University Newcastle.</p>
                <Link to="#" className="btn">My Resume</Link>
            </div>

            <div className="about__photo-container">
                <img className="about__photo" src={Gabby1} alt="" />
            </div>
            </div>
        </div>
        <div>
            {/* <iframe src="../images/jane.jpg" width="80%" height="600px" title="Your CV" /> */}
        </div>
        </section>
        </main>


        <section className="contact" id="contact">
        <div className="row">
        <h2>Get in Touch</h2>
        <div className="contact__info">
            <p>
            Are you looking for a fast-performing and user-friendly website to
            represent your product or business? or looking for any kind of
            consultation? or want to ask questions? or have some advice for me
            or just want to say "Hi 👋" in any case feel free to Let me know. I
            will do my best to respond back. 😊 The quickest way to reach out to
            me is via an email.
            </p>
            <Link to="mailto:gabrielchibu@gmail.com" className="btn">Email me</Link>
        </div>
        </div>
        </section>


    </div>
    )
}
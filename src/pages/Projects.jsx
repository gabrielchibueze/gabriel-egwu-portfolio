import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import github from '../images/github.svg';

import projectsList from '../project-data'

export default function Projects(){

console.log(projectsList)
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
    })
    return (
        <div className="layout-main">
            <section className="work" id="work">
            <h2>Recent Projects</h2>
                <div className="row">
                    <div className="work__boxes">
                        {recentProjects}
                    </div>
                </div>

            </section>

{/* Future Projects */}

            <section>
                <h2>Personal Portfolio</h2>
                <div className="row">
                    <h3>You can view the source code of this my personal portfolio on my Github repositories</h3>
                    <div className="work__links">
                    <Link to="https://github.com/gabrielchibueze/gabriel-egwu-portfolio" target="_blank" className="link__text">
                     See my repo on Github <span>&rarr;</span>
                    </Link>
                    <Link to="https://github.com/gabrielchibueze/gabriel-egwu-portfolio" title="View Source Code" target="_blank">
                    <img src={github} className="work__code" alt="GitHub"/>
                    </Link>
                    </div>
                </div>
            </section>

            <div className="hire-me">
                <h2>Hire me</h2>
                <div className="row hire-contact">
                    <h3>I am open to offers... Hire me</h3>
                    <Link to="/contact" className="btn btn--pink hire">Get in touch</Link>
                </div>
            </div>
        </div>
    )
}

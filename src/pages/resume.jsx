import React from "react";
import resume from "../resume";
import { IoMdClose } from "react-icons/io";

export default function Resume(props){
    

    console.log(resume.name)
    return (
        <div className="resume-section">
            <div className="resume-close-btn"> <button className="close-resume-btn" onClick={props.toggleResume}><IoMdClose /></button>
</div>
            <h1>{resume.name}</h1>
            <h2>{resume.role}</h2>
            <div className="objectives-section">
                        <h1>OBJECTIVE</h1>
                        <p>{resume.objective}</p>
                    </div>
            <div>
                <div className="work-expereiences-section">
                    <h1>WORK EXPERIENCE</h1>
                    {resume.experiences.map(experience =>{
                        return (
                            <div className="experience">
                                <h2>{experience.role}</h2>
                                <h3>{experience.company}</h3>
                                <div className="duration-section">
                                    <p>{experience.start} - {experience.end}</p>
                                    <p>{experience.location}</p>
                                </div>
                                {experience.description.map(desc =>{
                                    return (
                                        <ul>
                                            <li>{desc}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className="myprojects-section">
                    <h1>PROJECTS</h1>
                    <h2>{resume.projects.title}</h2>
                    <h3>{resume.projects.role}</h3>
                    <p>{resume.projects.start} - {resume.projects.end}</p>
                    {resume.projects.description.map(desc => <ul><li>{desc}</li></ul>)}
                </div>
            </div>
            <div className="education-skills">
                <div className="education-section">
                    <h1>EDUCATION</h1>
                    <div className="education1">
                        <h2 className="e">{resume.education.education1.type}</h2>
                        <h2 className="education-type">{resume.education.education1.course}</h2>
                        <h3 className="education-institution">{resume.education.education1.institution}</h3>
                    </div>
                    <div className="education2">
                        <h2>{resume.education.education2.type}</h2>
                        <h3>{resume.education.education2.institution}</h3>
                        <p>{resume.education.education2.duration}</p>
                        <p>{resume.education.education2.location}</p>
                    </div>
                </div>
                <div className="skills-section">
                    <h1>SKILLS</h1>
                    {resume.skills.map(skill => <ul><li>{skill}</li></ul>)}
                </div>
            </div>
        </div>
    )
}
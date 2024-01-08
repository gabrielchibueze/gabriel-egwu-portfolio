import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import AboutPhoto from '../main-images/gabriel8.jpeg'
import GabrielGallery1 from '../main-images/gabriel1.jpeg'
import GabrielGallery2 from '../main-images/gabriel3.jpeg'
import GabrielGallery3 from '../main-images/gabriel10.jpeg'
import GabrielGallery4 from '../main-images/gabriel11.jpeg'
import GabrielGallery5 from '../main-images/gabriel5.jpeg'
import GabrielGallery6 from '../main-images/gabriel12.jpeg'

export default function About(){
    return (
        <div className="layout-main">
            <div className="about-container">
                <section>
                    <div className="about-wrap">
                        <h2>about.me</h2>
                        <img src={AboutPhoto} className="aboutme-photo" />
                    </div>
                    <div className="aboutme-text">               
                        <p>I'm a Frontend Developer based in Newcastle, United Kingdom.</p>
                        <p>
                            Since 2022, I've enjoyed turning complex problems into simple, 
                            beautiful and intuitive designs by using continous integration and development.                    
                            When am not pushing keyboard buttons, I spend time cooking or playing Chess. 
                            If you don't see me at home, then am out with friends and family or at the park working out  
                        </p>
                    </div>
                </section>
                <section>
                <div className="gabriel-gallery">
                        <h2>galleries.me</h2>
                        <div className="gallery-list">
                            <img src={GabrielGallery6} className="gabriel-photo-gallaries"/>
                            <img src={GabrielGallery1} className="gabriel-photo-gallaries"/>
                            <img src={GabrielGallery2} className="gabriel-photo-gallaries"/>
                            <img src={GabrielGallery3} className="gabriel-photo-gallaries"/>
                            <img src={GabrielGallery4} className="gabriel-photo-gallaries"/>
                            <img src={GabrielGallery5} className="gabriel-photo-gallaries"/>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>lifestyle.me</h2>
                    <div>
                        <p>Coding, web development and researching have become my lifestyle. I am excited with the way technology has improved life. I am 3 years into IT as a frontend developer, 
                            and it has been an interesting journey of continious improvement. Hurray!! 😆 </p>

                    </div>
                </section>
                <section>
                    <h2>skills.me</h2>
                    <div className="skills-section about-all">
                        {/* <img className="about-all-image" src={Coding}/> */}
                        <div className="skills about-some">
                            <div className="client__logos all-skills">
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
                            <p>I have experience in web performance optimization and page speed, resource identification, cross-browser compatibility and testing, problem-solving and debugging, good communication and presentation, product improvement, and a flexible team member.</p>
                            <p>With a bachelors degree in Mcehanical Engineering and MSc. in Engineering Management, I have an expereince in Computer aided design and Life cycle analysis.</p>
                        </div>
                    </div>
                </section>
                <div className="hobbies">
                    <h2>hobbies.me</h2>
                    <div className="hobbies-all about-all">
                        {/* <img src={Chess} className="about-all-image"/> */}
                        <div className="hobbies-some about-some">
                            <p>I like playing board games. Chess and Checkers is my dashcam.</p>
                            <p>I like spending time with my lovely wife watching <span>Korean Movies 🤓</span>. I bareley concentrate on movies as I will end up checking on my phone when its not <span>action movie 🤪🤩</span> </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

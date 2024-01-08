import React from "react";
// import arrowUp from './images/arrow-up.svg';
// import bullseye from './images/bullseye.png';
// import chippy from './images/chippy.png';
// import codepen from './images/codepen.svg';
// import dashboard2 from './images/dashboard-2.png';
// import dashboard from './images/dashboard.png';
// import fastlane from './images/fastlane.png';
// import favion from './images/favion.png';
// import github from './images/github.svg';
// import goldengrid from './images/goldengrid.png';
// import header from './images/header.png';
// import heart from './images/heart.svg';
// import jane from './images/jane.jpg';
// import ligthhousereport from './images/ligthhouse-report';
// import mightyfurnitures from './images/mighty-furnitures.png';
// import password from './images/passwordj.pg';
// import project1 from './images/project-1.png';
// import project2 from './images/project-2.png';
// import project3 from './images/project-3.png';
// import quiz from './images/quiz.jpg';
// import ronjones from './images/ronjones.png';
// import sayedAli from './images/syed-ali-hussnain.jpg';
// import twitter from './images/twitter.jpg';

import {Link} from 'react-router-dom'

export default function Header(){
  return (
    <header className="header" role="banner" id="top">
    <div className="row">
      <nav className="nav" role="navigation">
        <ul className="nav__items">
            <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
            <li className="nav__item"><Link to="about" className="nav__link">About</Link></li>
            <li className="nav__item"><Link to="projects" className="nav__link">Projects</Link></li>
            {/* <li className="nav__item"><Link to="blog" className="nav__link">Blog</Link></li> */}
            <li className="nav__item"><Link to="contact" className="nav__link">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
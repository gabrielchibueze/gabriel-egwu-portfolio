import React, { useState, useEffect } from "react";
import arrowUp from '../images/arrow-up.svg';
import { FaLinkedinIn, FaFacebookF, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"

import {Link} from 'react-router-dom'

export default function (){

    const [isBackToTopRendered, setIsBackToTopRendered] = useState(false)
    const [subscriber, setSubscriber] = useState({firstname: "", lastname: "", email: ""})

    const handleSubscriberForm = (e)=>{
        const { name, value } = e.target

        setSubscriber(prevValue => (
            {
            ...prevValue, [name]: value
        })
        )
        console.log(subscriber)
    }

    const handleSubscriberSubmit = (e)=>{
        e.preventDefault()
        console.log(subscriber)
    }


  useEffect(() => {
    function setScreenSize() {
        if (window.scrollY > 700) {
          setIsBackToTopRendered(true);
        } else {
          setIsBackToTopRendered(false);
        }
      }

        window.addEventListener('scroll', setScreenSize);
        return () => window.removeEventListener('scroll', setScreenSize);
    // Implement the logic to move to the top when the arrow is clicked
  
    }, []); // Adding empty dependency array to run this effect only once
 
    function handleMoveToTop() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    }
    return (
    <div className="row">

        <div className="footer-top">
        <div className="subscription">
            <h1>Join for monthly insights</h1>
            <form onSubmit={handleSubscriberSubmit} className="subscription-form">
                <input type="text" name="firstname" 
                value={subscriber.firstname} 
                placeholder="First name" 
                onChange={handleSubscriberForm} 
                className="form-input"/>

                <input type="text" name="lastname" 
                value={subscriber.lastname} 
                placeholder="Last name" 
                onChange={handleSubscriberForm} 
                className="form-input"/>

                <input type="email" name="email" 
                value={subscriber.email} 
                placeholder="Email" 
                onChange={handleSubscriberForm} 
                className="form-input"/>
            
            <button className="subscribe-btn">Subscribe</button>

            </form>
            <p className="subscriber-privacy">I will never share or spam your email address. By clicking "Sign Up" you agree to the Terms of Use and Privacy Policy</p>
        </div>

        <ul className="footer__social-links">
            <li className="footer__social-link-item">
                <Link to="https://twitter.com/ChibuezeEgwu" title="Link to Twitter Profile" target="_blank">
                    <h3><FaSquareXTwitter /></h3>
                </Link>
            </li>
            <li className="footer__social-link-item">
                <Link to="https://github.com/gabrielchibueze" title="Link to Github Profile" target="_blank">
                 <h3><FaGithub /></h3>
                </Link>
            </li>
            <li className="footer__social-link-item">
            <Link to="https://linkedin.com/in/gabriel-egwu" title="Link to Linkedin Profile" target="_blank">
                <h3><FaLinkedinIn /></h3>
            </Link>
            </li>
            <li className="footer__social-link-item">
                <Link to="https://www.facebook.com/egwu.gabrielchibueze" title="Link to Facebook Profile" target="_blank"> <h3><FaFacebookF /></h3></Link>
            </li>
        </ul>

        </div>
        <p className="gabriel-trademark">
            &copy; 2024 - Template designed & developed by <Link to="https://gabriel.dev" className="link">Gabriel</Link>.
        </p>
        
        

        <Link to="#top" className="back-to-top"
            style={
                {
                visibility: isBackToTopRendered ? "visible" : "hidden",
                opacity: isBackToTopRendered ? 1 : 0,
                transform: isBackToTopRendered ? "scale(1)" : "scale(0)",
            }} 
            title="Back to Top" 
            onClick={handleMoveToTop}
            >
            <img src={arrowUp} alt="Back to Top" className="back-to-top__image"/>
        </Link>

    </div>
    )
}
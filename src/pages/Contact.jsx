import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaGithub, FaEnvelope } from "react-icons/fa";


export default function Contact(){
    return (
        <div className="layout-main">
            <section>
                <div className="contacts-all">
                    <h2>contact.me</h2>
                    <div className="contact-details">
                        <h3>Location:</h3>
                        <h3> Newcastle United Kingdom</h3>
                    </div>
                    <div className="contact-details">
                        <h3>Phone:</h3>
                        <h3> +447444388706</h3>
                    </div>
                    <div className="contact-details">
                        <h3>Email:</h3>     
                        <Link to="mailto:gabrielchibu@gmail.com" target="_blank"> <h3> gabrielchibu@gmail.com</h3></Link>
                    </div>
                </div>
            </section>

            <section>
            <div className="contacts-all">
            <h2>social.me</h2>
                <div className="contact-social-links">
                    <Link to="https://linkedin.com/in/gabriel-egwu" target="_blank" title="Link to my Linkedin page"> <FaLinkedinIn /> </Link>
                    <Link to="https://twitter.com/ChibuezeEgwu" target="_blank" title="Link to my twitter page"> <FaTwitter /> </Link>
                    <Link to="https://www.facebook.com/egwu.gabrielchibueze" target="_blank" title="Link to my facebook page"> <FaFacebookF /></Link>
                    <Link to="https://github.com/gabrielchibueze" target="_blank" title="Link to my GitHub page"> <FaGithub /></Link>  
                    <Link to="mailto:gabrielchibu@gmail.com" target="_blank" title="Email me directly"> <FaEnvelope /></Link>                
                </div>
            </div>

            </section>      

                <div className="hire-me contacts-all">
                <h2>Hire.me</h2>
                <div className="row hire-contact">
                    <h3>I am open to offers... Hire me</h3>
                    <Link to="mailto:gabrielchibu@gmail.com" className="btn btn--pink hire">Send me an email</Link>
                </div>
            </div>
      

        </div>
    )
}

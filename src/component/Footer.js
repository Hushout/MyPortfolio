import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import logo from './icon.png';
import Logo from './Logo'
import Social from './Social'
import { Button } from './Button'


function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About me</h2>
                        <Link to='/home'>My projects</Link>
                        <Link to='/'>Information on me</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact me</h2>
                        <Link to='/home'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                    <div className="footer-link-items">
                    <section className="social-media">
                    <h2>Social Media</h2>
                        <div className="social-media-wrap">
                            <div className="footer-logo">
                                <Link to='/' className="social-logo">
                                   <img src={logo} alt="logo" height='70px'/>
                                </Link>
                            </div>
                            <small className="website-rights"></small>
                            <Social /> 
                        </div>
                    </section>
                    </div>
                    
                            
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Footer

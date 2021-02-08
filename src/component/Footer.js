import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
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
                                    <div className="biglogo">
                                <img src={process.env.PUBLIC_URL + '/images/icon.png'} height="70px" />
                                </div>
                                <div className="smalllogo">
                                <img src={process.env.PUBLIC_URL + '/images/icon1.png'}height="200px" />
                                </div>
                                </Link>
                            </div>
                            <small className="website-rights"></small>
                            <div className="hidden-Social">
                            <Social /> 
                            </div>
                        </div>
                    </section>
                    </div>
                    
                            
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Footer

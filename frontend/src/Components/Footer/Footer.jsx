import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsa vel maiores ab incidunt ipsum, autem voluptatum id odit, quia architecto. Ea facere esse rem omnis officiis nam illum quae.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <a target="_blank" href="https://www.linkedin.com/in/rupali-prabha-bunkar/">
                <img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+91-8787985432</li>
                <li>conatct@tomato.com</li>
            </ul>
        </div>
        
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 &copy; Tomato.com - All Right Reserved
      </p>
    </div>
  )
}

export default Footer

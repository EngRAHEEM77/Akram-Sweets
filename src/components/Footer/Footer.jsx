import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro odit fugiat 
              saepe eum provident nobis sit alias officiis culpa ea vel, 
              modi, quaerat labore, deserunt reiciendis ducimus libero soluta?</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>

        </div>
        <div className="footer-content-center">
            <h2>About Us</h2>
            <ul>
                <li>the Company have 5 branches</li>
                <li>Branch1: KM4</li>
                <li>Branch2: SWeden</li>
                <li>Branch3: Kenya</li>
                <li>Branch4: Sudan</li>
                <li>Branch5: Cenada</li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>CONTACT US</h2>
            <ul>
                <li>Phone number: +252 614643671</li>
                <li>Our discode: Akram Sweeets</li>
                <li>Our Email: hikmadel@gmail.com</li>
            </ul>

        </div>
        
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @Akram.com - All Right Reserced.
      </p>
    </div>
  )
}

export default Footer

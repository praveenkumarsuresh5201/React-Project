import React from 'react';
import '../Assets/css/About.css';
import Logo from '../Assets/images/trip2.png'; 
import fb from '../Assets/images/fb.png';
import instagram from '../Assets/images/instagram.png';
import linkedin from '../Assets/images/linkedin.png';
import youtube from '../Assets/images/youtube.png';
import gmail from '../Assets/images/gmail.png';

const About = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h5 className="footer-heading">About WanderOn</h5>
          <p className="footer-text1">
          WanderOn Trip Planner transforms your travel dreams into reality with personalized, seamless itineraries and expert guidance.</p>
          <p className='footer-text2'>Discover the world worry-free with our comprehensive services and 24/7 support..</p>
          <br/>
          <h5 className="footer-contact">Email :  support@WanderOn.in</h5>
          <h5 className="footer-contact">Call Us :   < span className="footer-phone">879 668 3302</span></h5>
        </div>
            <div class="footer-social">
                    <p class="footer-follow">FOLLOW ME</p>
                    <a href="https://www.instagram.com/yourprofile" class="social-link">
                        <img src={instagram} alt="Instagram" class="social-icon" />
                    </a>
                    <a href="https://www.facebook.com/yourprofile" class="social-link">
                        <img src={fb} alt="Facebook" class="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/yourprofile" class="social-link">
                        <img src={linkedin} alt="LinkedIn" class="social-icon" />
                    </a>
                    <a href="https://www.youtube.com/yourchannel" class="social-link">
                        <img src={youtube} alt="YouTube" class="social-icon" />
                    </a>
                    <a href="mailto:your-email@gmail.com" class="social-link">
                        <img src={gmail} alt="Gmail" class="social-icon" />
                    </a>
            </div>
        </div>
      <div className="footer-bottom">
        <div className="footer-logo-container">
        <img className="footer-logo" src={Logo} alt="Logo" /> 
          <div className="footer-company-info">
            <h2 className="footer-company-name">WanderOn Technologies Pvt. Ltd.</h2>
            
            <h5 className="footer-copyright">© Copyright 2024. All Rights Reserved.</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default About;
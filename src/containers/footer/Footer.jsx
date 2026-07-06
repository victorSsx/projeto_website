import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading" data-reveal="fade-up">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn" data-reveal="scale" style={{ '--reveal-delay': '120ms' }}>
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links" data-reveal="fade-up" style={{ '--reveal-delay': '180ms' }}>
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="GPT-3 logo" width="118" height="30" loading="lazy" decoding="async" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

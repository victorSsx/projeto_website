import React from 'react';
import possibilityImage from '../../assets/possibility-optimized.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image" data-reveal="fade-right" data-parallax="0.06">
      <img src={possibilityImage} alt="Person using a virtual reality interface" width="980" height="1091" loading="lazy" decoding="async" />
    </div>
    <div className="gpt3__possibility-content" data-reveal="fade-left">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;

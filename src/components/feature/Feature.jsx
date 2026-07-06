import React from 'react';
import './feature.css';

const Feature = ({ title, text, reveal = 'fade-up', delay = '0ms', parallax }) => (
  <div
    className="gpt3__features-container__feature"
    data-reveal={reveal}
    data-parallax={parallax || undefined}
    style={{ '--reveal-delay': typeof delay === 'number' ? `${delay}ms` : delay }}
  >
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;

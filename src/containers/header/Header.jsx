import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai-optimized.png';
import './header.css';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content' data-reveal="fade-right">
        <h1 className='gradient__text'>Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people' data-reveal="fade-up" style={{ '--reveal-delay': '160ms' }}>
          <img src={people} alt="People who requested access" width="182" height="39" loading="lazy" decoding="async" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className='gpt3__header-image' data-reveal="scale" data-parallax="0.08">
        <img src={ai} alt="Low-poly artificial intelligence face" width="1000" height="1010" loading="eager" decoding="async" />
      </div>
    </div>
  );
}

export default Header;

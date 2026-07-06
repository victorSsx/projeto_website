import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState (false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='GPT-3 logo' width="63" height="16" decoding="async" />
        </div>
        <div className='gpt3__navbar-links_container'>
        <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
      </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        <button
          type="button"
          className={`gpt3__navbar-menu_toggle ${toggleMenu ? 'is-open' : ''}`}
          aria-label={toggleMenu ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={toggleMenu}
          onClick={() => setToggleMenu((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

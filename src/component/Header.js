import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../Assets/css/Header.css';
import trip2 from '../Assets/images/trip2.png';

export default function Header() {
  return (
    <div className="head">
      <nav>
        <div className="header-container">
          <div className="logo-heading-container">
            <img src={trip2} alt="Logo" className='logo' />
            <h1 className='heading'>WanderOn</h1>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='header-nav'>
            <div className="navbar-collapse" id="navbarNavAltMarkup">
              <Link className='home-nav' smooth to="/#home">HOME</Link>
              <Link className='nav-link' smooth to="/#company">COMPANY</Link>
              <Link className='nav-link' smooth to="/#group-tours">GROUP TOURS</Link>
              <Link className='nav-link' smooth to="/#adventure-trip">ADVENTURE TRIP</Link>
              <Link className='nav-link' smooth to="/#package">PACKAGE</Link>
              <Link className='nav-link' smooth to="/#contact">CONTACT</Link>
              <Link className='nav-link' smooth to="/#about">ABOUT</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
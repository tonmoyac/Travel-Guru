import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo.svg';
import './scss/main.scss';
import { Component } from 'react';

export class Navbar extends Component  {

handleScrollToElement(event) {
    const header = document.querySelector('.main-header');
    if (window.pageYOffset > 20){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollToElement);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollToElement);
  }

  render() {
    return (
        <>
        <header className="main-header">
            <div className="logo">
                <a href="/home"><img src={Logo} alt="Logo"/></a>
            </div>
            <input type="search" placeholder="Search for Your Documentation"/>

            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label htmlFor="menu-btn" className="menu-icon">
                <span className="menu-icon__line"></span>
            </label>
        <ul className="nav-links">
        <li className="nav-link">
                <a href="home">Home</a>
            </li>
            <li className="nav-link">
                <a href="d">Documentation</a>
            </li>
            <li className="nav-link">
                <a href="d">Blog</a>
            </li>
            <li className="nav-link">
                <a href="d">Contact</a>
            </li>
            <li className="nav-link">
                <button>Login</button>
            </li>
        </ul>
    </header>
        </>
    );
    }
};

export default Navbar;
import React from 'react';
import "./navBar.css"
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';


const NavBar=() =>
{
    return (
        <>
            <nav className='main-nav'>
                {/* logo */}
                <div className='logo'>
                    <h1>
                        <span>M</span>itranjay
                        <span>K</span>rishna
                    </h1>
                </div>

                {/* Menu Links */}
                <div className='menu-link'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                </div>
                    
                {/* Social Media Links */}
                <div className='social-media'>
                    <ul className='social-media-desktop'>
                        <li><a href='https://www.linkedin.com/in/mitranjaykrishna/' target="_blank" rel='noopener noreferrer' ><FaLinkedin className='Linkedin' /></a></li>
                        <li><a href='https://github.com/mitranjaykrishna' target="_blank" rel='noopener noreferrer'><FaGithubSquare className='GitHub' /></a></li>
                    </ul>
                </div>

                {/* Intro Section */}
                <section className='intro'>
                    <p>This is </p>
                    <h1>Mitranjay Krishna</h1>
                </section>

            </nav>
        </>
    );

};

export default NavBar;
import React, { useState } from 'react'
import '../css/NavBar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function NavBar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className='navBar'>
            <div className='navBar-container'>
                <Link to='/' className='navBar-logo-text' onClick={closeMobileMenu}>
                    <img src={logo} className='logo' alt="Trvl Logo" />   Trvl
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    {click ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </div>

                <div className={click ? 'navBar-items-list active' : 'navBar-items-list'}>
                    <ul>
                        <li className='navBar-item'>
                            <Link to='/' className='navBar-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='navBar-item'>
                            <Link to='/' className='navBar-links' onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className='navBar-item'>
                            <Link to='/' className='navBar-links' onClick={closeMobileMenu}>About</Link>
                        </li>
                    </ul>

                    <div className='navBar-signup-btn'>Sign Up</div>
                </div>

            </div>

        </nav>
    )
}

export default NavBar
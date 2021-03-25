import React, { useState, useRef } from "react";
//do I need to import it twice?
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navburger = useRef(null);
    const navmenu = useRef(null);
    const showmenu = () => {
        if (navburger.current.classList.contains("is-active") && navmenu.current.classList.contains("is-active")) {
            navburger.current.classList.remove('is-active');
            navmenu.current.classList.remove('is-active');
        } else {
            navburger.current.classList.add('is-active');
            navmenu.current.classList.add('is-active');
        }
    };
    return (

        <div className="react-navbar">

            <nav className="navbar is-white is-fixed-top">
                <div className="navbar-brand">
                    <div className="navbar-burger" ref={navburger} onClick={showmenu} data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" ref={navmenu} className="navbar-menu">
                    <div className="navbar-start">

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <NavLink to="/" className="navbar-item">
                                Home
                            </NavLink>
                            <NavLink to="/about" className="navbar-item">
                                About
                            </NavLink>
                            <NavLink to="/work" className="navbar-item">
                                Projects
                            </NavLink>
                            <NavLink to="/contact" className="navbar-item">
                                Contact
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </div>

    )
}
export default Navbar;
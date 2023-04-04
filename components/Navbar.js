import React, { useState, useRef } from "react";
import Link from 'next/link';
import { Button } from "./Button";

//do I need to import it twice?
const Navbar = () => {
  const navburger = useRef(null);
  const navmenu = useRef(null);
  const showmenu = () => {
    if (
      navburger.current.classList.contains("is-active") &&
      navmenu.current.classList.contains("is-active")
    ) {
      navburger.current.classList.remove("is-active");
      navmenu.current.classList.remove("is-active");
    } else {
      navburger.current.classList.add("is-active");
      navmenu.current.classList.add("is-active");
    }
  };

  return (
    <div className="react-navba">
      <nav className="navbar is-white is-fixed-top h-20">
        <div className="container">
          <div className="navbar-brand">
            <div
              className="navbar-burger"
              ref={navburger}
              onClick={showmenu}
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            id="navbarExampleTransparentExample"
            ref={navmenu}
            className="navbar-menu"
          >
            <div className="navbar-start"></div>

            <div className="navbar-end">
              <div className="navbar-item">
                <Button
                  className="navbar-item"
                  href="/" label={"Home"} />
                <Button
                  className="navbar-item"
                  href="/About" label={"About"} />
                <Button
                  className="navbar-item"
                  href="/Work" label={"Work"} />
                <Button
                  className="navbar-item"
                  href="/Contact" label={"Contact"} />
              </div>
            </div>
          </div>
        </div>
      </nav >
    </div >
  );
};
export default Navbar;

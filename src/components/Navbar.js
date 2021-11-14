import React, { useState, useRef } from "react";
//do I need to import it twice?
import { NavLink } from "react-router-dom";

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
    <div className="react-navbar">
      
    </div>
  );
};
export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Nav() {
   const navStyle = {
      color: "white",
      textDecoration: "none"
   };

   return (
      <nav>
         <h3 className="my-logo">M</h3>
         <ul className="nav-links">
            <Link style={navStyle} to="/">
               <li>Projects</li>
            </Link>
            <Link style={navStyle} to="/skills">
               <li>Skills</li>
            </Link>
            <Link style={navStyle} to="/about">
               <li>About</li>
            </Link>
            <Link style={navStyle} to="/contact">
               <li>Contact</li>
            </Link>
         </ul>
      </nav>
   );
}

export default Nav;

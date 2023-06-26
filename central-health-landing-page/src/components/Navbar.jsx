import { Link } from "react-scroll";
import React, { useState } from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="mission-statements" spy={true} smooth={true} duration={500}>
            Mission Statements / About Us
          </Link>
        </li>
        <li>
          <Link to="description" spy={true} smooth={true} duration={500}>
            Brief Description of Product
          </Link>
        </li>
        <li>
          <Link to="request-demo" spy={true} smooth={true} duration={500}>
            Request a Demo
          </Link>
        </li>
        <li>
          <Link to="sign-in-up" spy={true} smooth={true} duration={500}>
            Sign In / Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
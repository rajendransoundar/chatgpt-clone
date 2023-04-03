import React, { useState } from 'react';
import "./style.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button className="burger" onClick={toggleNav}>☰</button>
      <ul className={isOpen ? 'open' : ''}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

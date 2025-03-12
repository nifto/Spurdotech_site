
import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mac-repair">Mac Repair</Link></li>
        <li><Link to="/data-recovery">Data Recovery</Link></li>
        <li><Link to="/upgrades">Upgrades</Link></li>
        <li><Link to="/remote-support">Remote Support</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

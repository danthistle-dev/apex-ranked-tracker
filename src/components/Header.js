import React from 'react';
import logo from '../logo.png'
import './Header.css';

const Header = () => {
  return (
    <ul className="ui black inverted segment" style={{ marginTop: '20px' }}>
      <li><img src={logo} alt="apex" width="70" height="70" /></li>
      <li className="ui grey inverted header" style={{ marginLeft: '20px' }}>APEX Ranked Tracker v0.1</li>
    </ul>
  );
}

export default Header;
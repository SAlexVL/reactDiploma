import React from 'react';
import './appHeader.css';
import {Link} from 'react-router-dom';
import LogoH from './Logo.svg';

const Header = () => {
  return(
      <ul className="header">
        <li className="header__item">
          <Link to='/'>
            <img src={LogoH} alt="logo"/>
          </Link>
        </li>
        <li className="header__item">
          <Link to='/pagecoffee'>Our coffee</Link>
        </li>
        <li className="header__item">
          <Link to='/pleasurepage'>For your pleasure</Link>
        </li>
      </ul>
  )
}

export default Header;
import React from 'react';
import './appHeader.css';
import {Link} from 'react-router-dom';
import LogoH from './Logo.svg';

const Header = () => {
  return(
    <div className="row">
      <div className="col-lg-6">
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
      </div>
    </div>





  )
}

export default Header;
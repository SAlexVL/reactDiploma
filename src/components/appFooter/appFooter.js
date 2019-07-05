import React from 'react';
import './appFooter.css';
import {Link} from 'react-router-dom';
import Logo from './Logo_black.svg';
import BeansLogo from './Beans_logo_dark.svg';

const Footer = () => {
  return(
    <footer>
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-5 offset-lg-4">
            <ul className="footer">
              <li className="footer__item">
                <Link to='/'>
                  <img src={Logo} alt="logo"/>
                </Link>
              </li>
              <li className="footer__item">
                <Link to='/pagecoffee'>Our coffee</Link>
              </li>
              <li className="footer__item">
                <Link to='/pleasurepage'>For your pleasure</Link>
              </li>
            </ul>
          </div>
        </div>
        <img className="beanslogo" src={BeansLogo} alt="Beans logo"/>
      </div>
    </footer>
  )
}

export default Footer;
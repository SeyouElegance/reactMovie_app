import React, {Fragment} from 'react';
import Header from './Header';
import logo from '../webroot/04-media/images/logo.png'

const Menu = () => {
  return(
  <Fragment>
  <header>
    <div className="navbar-fixed">
      <nav className="transparentBG">
        <div className="container">
          <div className="nav-wrapper">
            <a href="!#" className="brand-logo left">
              <i className="material-icons">
                <img src={logo} alt={"logo"}/>
              </i>
              <h2>SpoiltedMovie.tv</h2>
            </a>
            <a href="!#" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down" id="nav-mobile">
              <li>
                <a href="!#">Movies</a>
              </li>
              <li>
                <a href="!#">Tv Series</a>
              </li>
              <li>
                <a href="!#">Tv Shows</a>
              </li>
              <li>
                <a href="!#">Cartoons</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <ul className="sidenav " id="mobile-nav">
      <li>
        <a href="!#">Movies</a>
      </li>
      <li>
        <a href="!#">Tv Series</a>
      </li>
      <li>
        <a href="!#">Tv Shows</a>
      </li>
      <li>
        <a href="!#">Cartoons</a>
      </li>
    </ul>
    <Header />
    </header>
  </Fragment>

  )
}

export default Menu;
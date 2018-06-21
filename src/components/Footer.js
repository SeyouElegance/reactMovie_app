import React, {Fragment} from 'react';

const Footer = () => {
  return(
  <Fragment>
  <footer className="page-footer">
    <div className="container">
      <div className="row my-class-footer">
        <div className="col l6 s6">
          <h5 className="black-text"><i className="material-icons">email</i>
            Newsletter</h5>
          <p className="black-text text-lighten-4">Subscribe now to get 100 exclusive video &amp; two newsletters per month</p>
          <div className="input-field inline">
            <input id="email_inline" type="email" className="validate"/>
            <label htmlFor="email_inline my-class-footer black-text">Your email</label>
          </div>
        </div>
        <div className="row">
        <div className="col l4 offset-l2 s12">
          <h5 className="black-text"><i className="material-icons">fiber_new</i>Links</h5>
          <ul>
            <li>
              <a className="black-text text-lighten-3" href="#!">Music</a>
            </li>
            <li>
              <a className="black-text text-lighten-3" href="#!">Sports</a>
            </li>
            <li>
              <a className="black-text text-lighten-3" href="#!">Documentary</a>
            </li>
            <li>
              <a className="black-text text-lighten-3" href="#!">Video games</a>
            </li>
          </ul>
        </div>
        </div>
        <div className="col s12">
            <div className="divider my-className-divider black"></div>
        </div>
    

        <div className="col s12">
          <a className="black-text left my-class-lien" href="#!">About</a>
          <a className="black-text left my-class-lien" href="#!">Movies</a>
          <a className="black-text left my-class-lien" href="#!">Tv Series</a>
          <a className="black-text left my-class-lien" href="#!">Tv Show</a>
          <a className="black-text left my-class-lien" href="#!">Cartoons</a>
          <a className="black-text right my-class-lien" href="#!">© 2018 Copyright</a>
        </div>
      </div>
    </div>

  </footer>
  </Fragment>
  )
}

export default Footer;
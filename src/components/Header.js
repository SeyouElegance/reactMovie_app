import React, {Fragment} from 'react';
import background from '../webroot/04-media/images/background.png'
const Header = () => {
  return(
  <Fragment>
    <div className="parallax-container center valign-wrapper">
      <div className="container">
        <div className="row">
          <div className="col s12 white-text">
            <h3 className="white-text my-class-headerCitation">Enjoy the spoiled stories
              <br/> more than before</h3>
          </div>
        </div>
      </div>
      <div className="parallax">
        <img src={background} alt={"background"}/>
      </div>
    </div>
  </Fragment>
  )
}

export default Header;
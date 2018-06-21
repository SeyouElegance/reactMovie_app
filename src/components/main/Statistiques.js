import React, {Fragment} from 'react';

const Statistique = () => {
  return(
  <Fragment>
  <div className="my-class-pourcentage valign-wrapper">
      <div className="container">
        <div className="row">
          <div className="col s4">
            <div className="pourcentage">
              80%
            </div>
            <div className="pourcentage-text">
              Quality Full HD
            </div>
          </div>
          <div className="col s4">
            <div className="pourcentage">
              95%
            </div>
            <div className="pourcentage-text">
              The best selections
            </div>
          </div>
          <div className="col s4">
            <div className="pourcentage">
              80%
            </div>
            <div className="pourcentage-text">
              Quality Full HD
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>

  )
}

export default Statistique;
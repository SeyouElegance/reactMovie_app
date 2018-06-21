import React, {Fragment} from 'react';

const PanelMovie = () => {
  return(
  <Fragment>
  <div className="container">
      <div className="row my-class-panel">
        <div className="col s12 my-class-panel-margin">
        <h5><i className="material-icons">live_tv</i> Spotlight this month</h5>
        </div>
      </div>
      <div className="divider"></div>
    </div>
    <div className="container">
      <div className="row panels">
        <div className="col s3 panel panel1">
          <p>Movies</p>
        </div>
        <div className="col s3 panel panel2">
          <p>Tv Series</p>
        </div>
        <div className="col s3 panel panel3">
          <p>Tv Show</p>
        </div>
        <div className="col s3 panel panel4">
          <p>Cartoons</p>
        </div>
      </div>
    </div>

  </Fragment>

  )
}

export default PanelMovie;
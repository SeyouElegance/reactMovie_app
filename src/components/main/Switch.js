import React, {Fragment} from 'react';

const Switch = () => {
  return(
  <Fragment>
  <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="switch center">
            <label>
              Off
              <input type="checkbox" className="switchs"/>
              <span className="lever"></span>
              On
            </label>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  )
}

export default Switch;
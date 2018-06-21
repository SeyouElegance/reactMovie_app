import React, { Fragment } from "react";
import VideoListItem from "../components/main/Video-list-item";

const VideoList = props => {
  const { moviesList } = props;
  const movieItems = moviesList.map(movie => (
    <VideoListItem key={movie.id} movie={movie} callback={reveiveCallBack} />
  ));

  function reveiveCallBack(movie) {
    props.callback(movie);
  }




  



  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="carousel">{movieItems}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoList;

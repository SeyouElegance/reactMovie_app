import React, { Fragment } from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";
const VideoListItem = props => {
  //Movie veut dire props.movie
  const { movie } = props; // Faire une affection de variable
  function handleOnClick() {
    props.callback(movie);
  }







  return (
    <Fragment>
      <a className="carousel-item" href="#wrapper" onClick={handleOnClick}>
        <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} alt={`Couverture du film : ${movie.original_title}`}/>
        <h6>{movie.title}</h6>
      </a>
    </Fragment>
  );
};

export default VideoListItem;

import React, { Fragment } from "react";

const BASE_URL = "https://www.youtube.com/embed/"; //Url from bootstrap
const END_OF_URL = "?rel=0";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1280";

const Video = ({ videoId, imageId, description, title }) => {
  return (
    <Fragment>
      <section id="wrapper" className="skewed">
        <div className="layer bottom">
          <div className="content-wrap">
            <img
              width="100%"
              height="100%"
              src={`${IMAGE_BASE_URL}${imageId}`}
              alt=""
            />
            <iframe
              title='VideoYoutube'
              width="100%"
              height="100%"
              src={`${BASE_URL}${videoId}${END_OF_URL}&amp;controls=0&amp;showinfo=0`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>

        <div className="layer top">
          <div className="content-wrap">
            <div className="content-body">
              <a
                id="flow-toggle"
                className="btn white black-text waves-effect waves-light"
              >
                zoom
              </a>
              <h1>{title}</h1>
              <p className="textzoom">{description}</p>
            </div>
            <img
              width="100%"
              height="100%"
              src={`${IMAGE_BASE_URL}${imageId}`}
              alt=""
            />
          </div>
        </div>
        <div className="handle" />
      </section>
    </Fragment>
  );
};

export default Video;

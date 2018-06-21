import React from 'react'; //Composant fonctionelle


const VideoDetail = ({title, description}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}


export default VideoDetail;
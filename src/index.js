import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './webroot/00-base/script.js'; //MON JS POUR LES ANIMATIONS
import './webroot/02-modules/main.css'; //MON CSS 

ReactDOM.render(<App />, document.querySelector('.app'));
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// add this if statement to get the page auto-reload when editted
if (module.hot) {
    module.hot.accept();
}

ReactDOM.render( < App / > , document.querySelector('#root'));
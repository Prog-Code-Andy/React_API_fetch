import React from 'react';
// we connect to the web page use creatRoot index.html -> public page
import ReactDOM from 'react-dom/client';
import './index.css';
// we import from src App
import App from './App';

// we call id use DOM element from index.html
// App send in page with id root and otrisovuet page betten tegs DIV
// in the folder public index.html
// we need to render all DOM element
// createRoot - call our id in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
// we send all DOM element in new root
// render paint web page for as
root.render(<App />)

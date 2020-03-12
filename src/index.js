import React from 'react';
import { render } from 'react-dom';

//import classes using
// import StorePicker from './components/StorePicker';
// import App from './components/App';

import Router from './components/Router';

//import CSS using
import './css/style.css';

// const Component = React.Component; // Use any


//Just a custom html
// render(<p>Heyyy!</p>, document.querySelector("#main"));

//For class
// render(<StorePicker />, document.querySelector("#main")); //OR <StorePicker></StorePicker>

//Static routing
// render(<App/>,document.querySelector("#main"));

//Dynamic routing using router.js
render(<Router/>,document.querySelector("#main"));
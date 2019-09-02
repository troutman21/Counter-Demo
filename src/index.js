import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import cssVariables from './global-styles/css-variables.css';
import globalStyles from './global-styles/global.css';

render(<App />, document.querySelector('#root'));

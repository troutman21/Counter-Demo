import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import CSSVariables from './styles/CSSVariables.css';
import GlobalStyles from './styles/global.css';

render(<App />, document.querySelector('#root'));

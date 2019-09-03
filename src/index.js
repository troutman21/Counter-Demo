import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import globalStyles from './global-styles/global.scss';

render(<App />, document.querySelector('#root'));

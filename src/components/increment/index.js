import React from 'react';
import style from './style.scss';

const Increment = props => (
  <button className={style.button} onClick={props.incrementCount}>
    +1
  </button>
);

export default Increment;

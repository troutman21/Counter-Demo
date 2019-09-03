import React from 'react';
import style from './style.scss';

const Decrement = props => (
  <button className={style.button} onClick={props.decrementCount}>
    -1
  </button>
);

export default Decrement;

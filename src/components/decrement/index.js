import React from 'react';
import styles from './style.css';

const Decrement = props => (
  <button className={styles.button} onClick={props.decrementCount}>
    -1
  </button>
);

export default Decrement;

import React from 'react';
import css from './Button.module.css';

const Button = ({ fetchImages }) => (
  <button type="button" className={css.Button} onClick={fetchImages}>
    Load more...
  </button>
);

export default Button;

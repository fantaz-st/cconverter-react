import React from 'react';
import classes from './Header.module.css';
const Header = () => {
  return (
    <div className={classes['title-subtitle']}>
      <p className={classes.title}>Currency Converter</p>
      <p className={classes.subtitle}>Currency converter made with REACT</p>
    </div>
  );
};

export default Header;

import React from 'react';
import classes from './Description.module.css';

const Description = () => {
  return (
    <div className={classes.description}>
      This app is using <a href="https://exchangerate.host">exchangerate.host</a> API and Euro as a base for conversion. Made by
      <a href="mailto:cbabic.st@gmail.com"> cbabic</a> in 2021.
    </div>
  );
};

export default Description;

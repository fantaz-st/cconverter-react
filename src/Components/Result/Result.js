import React, { useContext } from 'react';
import ConverterContext from '../../store/converter-context';
import AddToFavoritesButton from './AddToFavoritesButton';
import classes from './Result.module.css';

const Result = () => {
  const ctx = useContext(ConverterContext);

  let language = navigator.languages !== undefined ? navigator.languages[0] : navigator.language;
  let result = new Intl.NumberFormat(language).format(ctx.result.calc);
  let resultString = (
    <p className={classes['is-equal']}>
      {result} {ctx.result.nameTo}
    </p>
  );

  if (result.includes('.')) {
    let index;
    if (result.indexOf(',') <= result.indexOf('.')) index = result.indexOf('.');
    else index = result.indexOf(',');
    let firstPart = result.slice(0, result.length - (result.length - (index + 3)));
    let lastPart = result.slice(index + 3);
    //result = `${firstPart}<span>${lastPart}</span>`;
    resultString = (
      <p className={classes['is-equal']}>
        {firstPart}
        <span>{lastPart}</span>
        {ctx.result.nameTo}
      </p>
    );
  }

  return (
    <div className={classes['result-holder']}>
      <div className={classes.result}>
        <p className={classes.from}>
          {ctx.result.amount} {ctx.result.nameFrom} ={' '}
        </p>
        {resultString}
        <p className={classes['rate-1']}>
          1 {ctx.result.from} = {ctx.result.rate1 / ctx.result.rate0} {ctx.result.to}
        </p>
        <p className={classes['rate-2']}>
          1 {ctx.result.to} = {ctx.result.rate0 / ctx.result.rate1} {ctx.result.from}{' '}
        </p>
      </div>
      <AddToFavoritesButton />
    </div>
  );
};

export default Result;
